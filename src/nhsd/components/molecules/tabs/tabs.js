/* global document */

import nhsd from '@/nhsd';

export default function NHSDTabs(componentEl) {
    const tabEls = [];

    function showContent(selectedTab) {
        tabEls.forEach((tabEl) => {
            tabEl.content.classList.add('nhsd-!t-display-hide');
            tabEl.content.setAttribute('aria-hidden', true);
            tabEl.tab.classList.remove('nhsd-a-tab__active');
            tabEl.tab.setAttribute('aria-selected', false);
        });
        selectedTab.content.classList.remove('nhsd-!t-display-hide');
        selectedTab.content.setAttribute('aria-hidden', false);
        selectedTab.tab.classList.add('nhsd-a-tab__active');
        selectedTab.tab.setAttribute('aria-selected', true);

        nhsd.event(componentEl).trigger('tabs[show]', selectedTab);
        return false;
    }

    function hideHeaders(content) {
        const headers = content.querySelectorAll('[data-hide-tab-header]');
        headers.forEach((header) => header.classList.add('nhsd-!t-display-hide'));
    }

    Array.from(componentEl.querySelectorAll('.nhsd-a-tab')).forEach((tab) => {
        if (!tab.dataset.tabContent) return;

        const content = document.querySelector(`#${tab.dataset.tabContent}`);
        if (!content) return;

        hideHeaders(content);

        const tabEl = {
            tab,
            content,
        };
        tabEls.push(tabEl);

        nhsd.event(tab).unbind('.nhsd-tabs');
        nhsd.event(tab).on('click.nhsd-tabs', () => showContent(tabEl));
    });

    if (tabEls.length === 0) return;

    showContent(tabEls[0]);
}
