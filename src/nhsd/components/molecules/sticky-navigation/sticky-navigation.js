/* global document window */
import nhsd from '@/nhsd';
import debounce from 'debounce';

const componentClass = 'nhsd-m-sticky-navigation';
let activeItem = null;
let stickyNavItems = [];

let windowTopPos = 0;
const TOP_THRESHOLD = 0.1;

function initItem(navEl) {
    const contentId = navEl.dataset.navContent;
    const contentEl = document.querySelector(`[id='${contentId}']`);
    if (!contentEl) return;

    stickyNavItems.push({
        navEl,
        contentEl,
    });
}

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

export default function NHSDStickyNavigation(componentEl) {
    stickyNavItems = [];

    const items = componentEl.querySelectorAll(`.${componentClass}__item`);
    items.forEach((item) => initItem(item));

    windowTopPos = window.innerHeight * TOP_THRESHOLD;
    window.onresize = () => {
        windowTopPos = window.innerHeight * TOP_THRESHOLD;
    };
    window.onscroll = debounce(findActiveItem, 16);
}
