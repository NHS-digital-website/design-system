/* global document */

import nhsd from '@/nhsd';

function attemptFocus(element) {
    try {
        element.focus();
    } catch {
        return false;
    }
    return element === document.activeElement;
}

export default class {
    componentId = null;

    componentEl = null;

    modalContainer = null;

    lastFocus = null;

    disableTrapping = false;

    constructor(componentEl) {
        if (!componentEl) return null;
        this.componentEl = componentEl;
        this.modalContainer = componentEl.querySelector('.nhsd-m-modal__container');

        if (this.componentEl.id) {
            this.componentId = this.componentEl.id;
        }

        this.setUpTabbing();
        this.bindEvents();
        this.focusModal();
    }

    focusModal() {
        if (this.componentEl.classList.contains('nhsd-m-modal--open')) {
            this.focusChild(this.modalContainer);
        }
    }

    bindEvents() {
        nhsd(this.componentEl).on('modal-open.modal', () => {
            this.componentEl.classList.add('nhsd-m-modal--open');
            this.focusModal();
        });

        nhsd(this.componentEl).on('modal-close.modal', () => this.componentEl.classList.remove('nhsd-m-modal--open'));

        const openButtons = Array.from(document.querySelectorAll(`[data-modal-open="${this.componentId}"]`));
        nhsd(openButtons).on('click', () => nhsd(this.componentEl).trigger('modal-open'));

        const closeButtons = Array.from(this.modalContainer.querySelectorAll('[data-modal-close]'));
        nhsd(closeButtons).on('click.modal', () => nhsd(this.componentEl).trigger('modal-close'));

        // Only bind these close events if the modal isn't mandatory
        if (this.componentEl.dataset.modalMandatory === undefined) {
            nhsd.on('keyup.modal', (e) => {
                if (e.key === 'Escape') {
                    nhsd(this.componentEl).trigger('modal-close');
                }
            });

            nhsd(this.componentEl).on('click.modal', (e) => {
                if (!this.modalContainer.contains(e.target)) nhsd(this.componentEl).trigger('modal-close');
            });
        }
    }

    trapFocus(event) {
        if (this.disableTrapping) return;

        if (this.modalContainer.contains(event.target)) {
            this.lastFocus = event.target;
        } else {
            this.disableTrapping = true;
            this.focusChild(this.modalContainer);
            if (this.lastFocus === document.activeElement) {
                this.focusChild(this.modalContainer, true);
            }
            this.lastFocus = document.activeElement;
            this.disableTrapping = false;
        }
    }

    setUpTabbing() {
        const preNode = document.createElement('div');
        preNode.tabIndex = 0;
        this.modalContainer.parentNode.insertBefore(preNode, this.modalContainer);
        const postNode = document.createElement('div');
        postNode.tabIndex = 0;
        this.modalContainer.parentNode.insertBefore(postNode, this.modalContainer.nextSibling);
        document.addEventListener('focus', this.trapFocus.bind(this), true);
    }

    focusChild(parentEl, desc = false) {
        const startingIndex = desc ? parentEl.children.length - 1 : 0;
        const modifer = desc ? -1 : 1;
        for (let i = startingIndex; i < parentEl.children.length && i >= 0; i += modifer) {
          const childEl = parentEl.children[i];
          if (attemptFocus(childEl) || this.focusChild(childEl, desc)) return true;
        }
        return false;
    }
}
