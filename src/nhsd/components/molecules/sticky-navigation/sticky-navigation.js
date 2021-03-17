/* global document window */
import nhsd from '@/nhsd';
import nhsdEvent from '@/helpers/nhsd-event';
import debounce from 'debounce';

const componentClass = 'nhsd-m-sticky-navigation';

let scheduledAnimationFrame = false;
let activeElement = null;
let trackedContent = [];
let windowOffset = window.innerHeight * 0.1;

function initItem(navItem) {
    const contentId = navItem.dataset.navContent;
    const contentEl = document.querySelector(`#${contentId}`);

    if (!contentEl) return;

    trackedContent.push({
        navItem,
        contentEl,
    });
}

function updateActiveStates() {
    let newActiveElement = null;
    let newActiveElementPos = null;
    trackedContent.forEach((trackedItem) => {
        const pos = trackedItem.contentEl.getBoundingClientRect().top;

        if (newActiveElementPos === null || (pos < windowOffset && pos > newActiveElementPos)) {
            newActiveElement = trackedItem;
            newActiveElementPos = pos;
        }
    });

    if (scheduledAnimationFrame) return;
    window.requestAnimationFrame(() => {
        scheduledAnimationFrame = false;

        if (!newActiveElement || newActiveElement === activeElement) return;

        activeElement = newActiveElement;

        trackedContent.forEach((trackedItem) => trackedItem.navItem.classList.remove(`${componentClass}__item--active`));

        activeElement.navItem.classList.add(`${componentClass}__item--active`);
        nhsd.trigger('sticky-navigation[update]', activeElement);
    });
    scheduledAnimationFrame = true;
}

export default function NHSDStickyNavigation(componentEl) {
    trackedContent = [];
    activeElement = null;
    const items = componentEl.querySelectorAll(`.${componentClass}__item`);
    items.forEach((item) => initItem(item));
    updateActiveStates();
}

nhsdEvent(window).on('scroll', debounce(updateActiveStates, 18));
nhsdEvent(window).on('resize', debounce(() => {
    windowOffset = window.innerHeight * 0.1;
    updateActiveStates();
}), 25);
