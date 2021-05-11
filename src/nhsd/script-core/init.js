/* global document window */
import nhsd from './nhsd';
import NHSDGlobalHeader from '../components/organisms/global-header/global-header';
import NHSDCodeViewer from '../components/organisms/code-viewer/code-viewer';
import NHSDStickyNavigation from '../components/molecules/sticky-navigation/sticky-navigation';
import NHSDFilterMenuSection from '../components/molecules/filter-menu-section/filter-menu-section';
import NHSDExpander from '../components/molecules/expander/expander';
import NHSDTable from '../components/molecules/table/table';
import NHSDTabs from '../components/molecules/tabs/tabs';
import NHSDNotificationBanner from '../components/molecules/notification-banner/notification-banner';

window.nhsd = nhsd;

/* Ensure we don't double initalise any componets */
const componentList = [];

function initComponent(selector, componentClass) {
    const componentEls = document.querySelectorAll(selector);
    Array.from(componentEls).forEach((componentEl) => {
        if (componentList.includes(componentEl)) return;

        /* eslint-disable no-new, new-cap, no-console */
        try {
            new componentClass(componentEl);
        } catch (e) {
            console.error(`Failed to initialise ${componentClass.name}`);
        }
        /* eslint-enable no-new, new-cap, no-console */
    });
}

export default function init() {
    initComponent('.nhsd-o-global-header', NHSDGlobalHeader);
    initComponent('.nhsd-o-code-viewer', NHSDCodeViewer);
    initComponent('.nhsd-m-sticky-navigation', NHSDStickyNavigation);
    initComponent('.nhsd-m-filter-menu-section', NHSDFilterMenuSection);
    initComponent('.nhsd-m-expander', NHSDExpander);
    initComponent('.nhsd-m-table', NHSDTable);
    initComponent('.nhsd-m-tabs', NHSDTabs);
    initComponent('.nhsd-m-notification-banner', NHSDNotificationBanner);
}
