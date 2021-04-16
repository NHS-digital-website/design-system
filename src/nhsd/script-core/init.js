/* global document window */
import nhsd from './nhsd';
import NHSDGlobalHeader from '../components/organisms/global-header/global-header';
import NHSDCodeViewer from '../components/organisms/code-viewer/code-viewer';
import NHSDStickyNavigation from '../components/molecules/sticky-navigation/sticky-navigation';
import NHSDFilterMenuSection from '../components/molecules/filter-menu-section/filter-menu-section';
import NHSDExpander from '../components/molecules/expander/expander';
import NHSDTable from '../components/molecules/table/table';
import NHSDTabs from '../components/molecules/tabs/tabs';

window.nhsd = nhsd;

/* Ensure we don't double initalise any componets */
const componentList = [];

function initComponent(selector, componentClass) {
    const componentEls = document.querySelectorAll(selector);
    Array.from(componentEls).forEach((componentEl) => {
        if (componentList.includes(componentEl)) return;

        /* eslint-disable no-new, new-cap */
        new componentClass(componentEl);
        /* eslint-enable no-new, new-cap */
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
}
