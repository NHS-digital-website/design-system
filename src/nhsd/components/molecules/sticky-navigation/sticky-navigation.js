/* global document window IntersectionObserver */
import nhsd from '@/nhsd';
import debounce from 'debounce';

const componentClass = 'nhsd-m-sticky-navigation';
let stickyNavItems = [];
let observer = null;

const TOP_THRESHOLD = 0.1;

function initItem(navEl) {
    const contentId = navEl.dataset.navContent;
    const contentEl = document.querySelector(`#${contentId}`);
    if (!contentEl) return;

    stickyNavItems.push({
        navEl,
        contentEl,
    });
}

function updateActiveStates(activeItem) {
    stickyNavItems.forEach((item) => item.navEl.classList.remove(`${componentClass}__item--active`));

    activeItem.navEl.classList.add(`${componentClass}__item--active`);
    nhsd.trigger('sticky-navigation[update]', activeItem);
}

function findActiveItem() {
    const windowTopPos = window.innerHeight * TOP_THRESHOLD;

    let activeItem = null;
    stickyNavItems.forEach((item) => {
        const itemTopPos = item.contentEl.getBoundingClientRect().top;

        if (windowTopPos < itemTopPos) return;
        if (activeItem && itemTopPos < activeItem.contentEl.getBoundingClientRect().top) return;

        activeItem = item;
    });

    if (activeItem) updateActiveStates(activeItem);
}

function createIntersectionObserver() {
    const findActiveItemDebounced = debounce(findActiveItem, 18);
    return new IntersectionObserver(() => findActiveItemDebounced(), {
        root: null,
        rootMargin: '-10% 0% 0% 0%',
        threshold: [1],
    });
}

export default function NHSDStickyNavigation(componentEl) {
    if (observer) observer.disconnect();
    stickyNavItems = [];

    const items = componentEl.querySelectorAll(`.${componentClass}__item`);
    items.forEach((item) => initItem(item));

    observer = createIntersectionObserver();
    stickyNavItems.forEach((item) => observer.observe(item.contentEl));
}
