/* global document window */
import nhsd from '@/nhsd';
import debounce from 'debounce';

const componentClass = 'nhsd-m-sticky-navigation';
let activeItem = null;
let stickyNavItems = [];

let windowTopPos = 0;
const TOP_THRESHOLD = 0.1;

function updateActiveStates() {
    stickyNavItems.forEach((item) => item.navEl.classList.remove(`${componentClass}__item--active`));

    if (activeItem) activeItem.navEl.classList.add(`${componentClass}__item--active`);
    nhsd.trigger('sticky-navigation[update]', activeItem);
}

function findActiveItem() {
    let newActiveItem = null;
    let newItemTopPos = null;
    stickyNavItems.forEach((item) => {
        const itemTopPos = item.contentEl.getBoundingClientRect().top;
        if (windowTopPos < itemTopPos) return;
        if (newActiveItem && itemTopPos < newItemTopPos) return;

        newActiveItem = item;
        newItemTopPos = newActiveItem.contentEl.getBoundingClientRect().top;
    });

    if (activeItem !== newActiveItem) {
        activeItem = newActiveItem;
        updateActiveStates();
    }
}

function clickEvent(navItem) {
    const link = navItem.navEl.querySelector('a');
    if (!link) return;

    nhsd(link).on('click.sticky-nav', () => {
        // Temporarily disable scroll event
        nhsd(window).unbind('scroll.sticky-nav');
        activeItem = navItem;
        updateActiveStates();
        setTimeout(() => nhsd(window).on('scroll.sticky-nav', debounce(findActiveItem, 16)), 60);
    });
}

function initItem(navEl) {
    const contentId = navEl.dataset.navContent;
    const contentEl = document.querySelector(`[id='${contentId}']`);
    if (!contentEl) return;

    const navItem = {
        navEl,
        contentEl,
    };

    clickEvent(navItem);

    stickyNavItems.push(navItem);
}

export default function NHSDStickyNavigation(componentEl) {
    stickyNavItems = [];

    const items = componentEl.querySelectorAll(`.${componentClass}__item`);
    items.forEach((item) => initItem(item));

    windowTopPos = window.innerHeight * TOP_THRESHOLD;
    nhsd(window).on('resize.sticky-nav', () => {
        windowTopPos = window.innerHeight * TOP_THRESHOLD;
        debounce(findActiveItem, 16);
    });
    nhsd(window).on('scroll.sticky-nav', debounce(findActiveItem, 16));
    findActiveItem();
}
