/* global document */

// Components
import NHSDGlobalHeader from '../components/organisms/global-header/global-header';
import NHSDCodeViewer from '../components/organisms/code-viewer/code-viewer';
import NHSDStickyNavigation from '../components/molecules/sticky-navigation/sticky-navigation';
import NHSDFilterMenuSection from '../components/molecules/filter-menu-section/filter-menu-section';
import NHSDStatistics from '../components/molecules/statistics-block/statistics';
import NHSDTable from '../components/molecules/table/table';
import NHSDTabs from '../components/molecules/tabs/tabs';
import NHSDNotificationBanner from '../components/molecules/notification-banner/notification-banner';
import NHSDBreadcrumbs from '../components/molecules/breadcrumbs/breadcrumbs';
import NHSDModal from '../components/molecules/modal/modal';
import NHSDDropDown from '../components/organisms/dropdown/dropdown';
import NHSDSearchBar from '../components/molecules/search-bar/search-bar';

// Helpers
import showHide from './helpers/show-hide';

/* Ensure we don't double initalise any componets */
const componentList = [];

function initComponent(selector, componentClass) {
    const componentEls = document.querySelectorAll(selector);
    Array.from(componentEls).forEach((componentEl) => {
        if (componentList.includes(componentEl)) return;
        componentList.push(componentEl);

        /* eslint-disable no-new, new-cap, no-console */
        try {
            new componentClass(componentEl);
        } catch (e) {
            console.error(`Failed to initialise ${componentClass.name}`, e);
        }
        /* eslint-enable no-new, new-cap, no-console */
    });
}

export default function init() {
    // Components
    initComponent('.nhsd-o-code-viewer', NHSDCodeViewer);
    initComponent('.nhsd-o-dropdown', NHSDDropDown);
    initComponent('.nhsd-o-global-header', NHSDGlobalHeader);
    initComponent('.nhsd-m-breadcrumbs', NHSDBreadcrumbs);
    initComponent('.nhsd-m-filter-menu-section', NHSDFilterMenuSection);
    initComponent('.nhsd-m-modal', NHSDModal);
    initComponent('.nhsd-m-notification-banner', NHSDNotificationBanner);
    initComponent('.nhsd-m-statistics-block', NHSDStatistics);
    initComponent('.nhsd-m-sticky-navigation', NHSDStickyNavigation);
    initComponent('.nhsd-m-table', NHSDTable);
    initComponent('.nhsd-m-tabs', NHSDTabs);
    initComponent('.nhsd-m-search-bar', NHSDSearchBar);

    // Helpers
    showHide();
}
