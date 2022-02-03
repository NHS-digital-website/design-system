/* global document CustomEvent */

const NHSD_EVENT = {
    UUID: 0,
    add(element, eventType, fn) {
        this.UUID += 1;
        const event = new this.Event(element, eventType, fn, this.UUID);
        this.events[this.UUID] = event;
        return event;
    },
    removeByUUID(UUID) {
        delete this.events[UUID];
    },
    remove(...args) {
        this.find(args).forEach((evnt) => this.removeByUUID(evnt.UUID));
    },
    find(element, type, fn = null) {
        let matchedEvents = Object.values(this.events).filter((evnt) => {
            const typeArray = type.split('.');
            const eventType = typeArray[0];
            const namespace = typeArray[1];
            if (element !== evnt.element) return false;
            if (eventType && eventType !== evnt.eventType) return false;
            if (namespace && namespace !== evnt.namespace) return false;
            return true;
        });
        if (typeof fn === 'function') {
            matchedEvents = matchedEvents.filter((evnt) => evnt.fn === fn);
        }
        return matchedEvents;
    },
    events: {},
    Event: class {
        constructor(element, eventType, fn, UUID) {
            this.element = element;
            [this.eventType, this.namespace] = eventType.split('.');
            this.fn = fn;
            this.UUID = UUID;
            // Wrap the event handler so return false will result in e.preventDefault()
            this.handler = function handler(e, ...args) {
                if (fn.bind(this)(e, e.detail, args) === false) {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                }
            };
        }
    },
};

export default function nhsdEvent(elementsOrSelector) {
    let elements = [elementsOrSelector];
    if (Array.isArray(elementsOrSelector)) {
        elements = elementsOrSelector;
    } else if (typeof elementsOrSelector === 'string') {
        elements = document.querySelectorAll(elementsOrSelector);
    }

    return {
        on(eventType, fn) {
            let eventTypes = eventType;
            if (typeof eventTypes === 'string') eventTypes = [eventTypes];
            eventTypes.forEach((event) => {
                elements.forEach((element) => {
                    const eventObj = NHSD_EVENT.add(element, event, fn);
                    element.addEventListener(eventObj.eventType, eventObj.handler, true);
                });
            });
            return this;
        },
        once(eventType, fn) {
            const onceEvent = () => {
                fn();
                this.unbind(eventType, onceEvent);
            };
            return this.on(eventType, onceEvent);
        },
        trigger(eventType, params = {}) {
            let eventTypes = eventType;
            if (typeof eventTypes === 'string') eventTypes = [eventTypes];
            eventTypes.forEach((event) => {
                elements.forEach((element) => {
                    const eventName = event.split('.')[0];
                    element.dispatchEvent(new CustomEvent(eventName, { detail: params }));
                });
            });
            return this;
        },
        unbind(eventType, fn = null) {
            let eventTypes = eventType;
            if (typeof eventTypes === 'string') eventTypes = [eventTypes];
            eventTypes.forEach((event) => {
                elements.forEach((element) => {
                    const matchedEvents = NHSD_EVENT.find(element, event, fn);
                    matchedEvents.forEach((matchedEvent) => {
                        element.removeEventListener(matchedEvent.eventType, matchedEvent.handler, true);
                        NHSD_EVENT.removeByUUID(event.UUID);
                    });
                });
            });
            return this;
        },
    };
}
