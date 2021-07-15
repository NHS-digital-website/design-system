// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Global header';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}`;
const sourceCode = `// Sass import \n@use "nhsd/components/organisms/global-header";

// HTML`;

// Component defaults
export default {
  title: `${sbConfig.title.designSystem} / ${sbConfig.title.components} / ${sbConfig.title.organisms} / ${componentName}`,
  parameters: {
    docs: {
      description: {
        component: storyDescription,
      },
    },
  },
};

// Component template
const Template = (args) => template.render({ params: { ...args } });

export const LabComponent = Template.bind({});
LabComponent.args = {
  logoLink: {
    classes: 'nhsd-o-global-header__logo',
    label: 'NHS Digital home',
    href: '/',
    id: 'nhsd-global-header__logo',
  },
  menuBar: {
    links: [
      {
        label: 'Coronavirus',
        classes: 'js-active',
      }, {
        label: 'Data',
      }, {
        label: 'Services',
      }, {
        label: 'Cyber',
      }, {
        label: 'Developer',
      }, {
        label: 'News',
      }, {
        label: 'About us',
      },
    ],
  },
  buttonNav: {
    classes: 'nhsd-m-button-nav--condensed nhsd-m-button-nav--non-responsive nhsd-o-global-header__button-nav',
    buttons: [
    {
      el: 'a',
      id: 'nhsd-global-header__search-button',
      href: '/search',
      aria: {
        label: 'Open search',
        controls: 'nhsd-global-header__search',
        expanded: false,
      },
      classes: 'nhsd-a-button--circle',
      icon: {
        id: 'search',
        classes: 'nhsd-a-icon--size-s',
      },
    }, {
      el: 'button',
      id: 'nhsd-global-header__menu-button',
      label: 'Menu',
      aria: {
        controls: 'nhsd-global-header__menu',
        expanded: false,
      },
      classes: 'nhsd-o-global-header__menu-button',
      icon: {
        id: 'burger',
        classes: 'nhsd-a-icon--size-s',
      },
    }],
  },
  search: true,
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};

export const ProductHeader = Template.bind({});
ProductHeader.storyName = 'Product header';
ProductHeader.args = {
  ...LabComponent.args,
  productName: 'Product or Service',
  productHeader: true,
};
ProductHeader.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ProductHeader(ProductHeader.args)}`,
    },
  },
};

export const ProductHeaderNoSearch = Template.bind({});
ProductHeaderNoSearch.storyName = 'Product header (No Search)';
ProductHeaderNoSearch.args = {
  ...LabComponent.args,
  productName: 'Product or Service',
  productHeader: true,
  buttonNav: {
    classes: 'nhsd-m-button-nav--condensed nhsd-m-button-nav--non-responsive nhsd-o-global-header__button-nav',
    buttons: [{
      el: 'button',
      id: 'nhsd-global-header__menu-button',
      label: 'Menu',
      aria: {
        controls: 'nhsd-global-header__menu',
        expanded: false,
      },
      classes: 'nhsd-o-global-header__menu-button',
      icon: {
        id: 'burger',
        classes: 'nhsd-a-icon--size-s',
      },
    }],
  },
};
ProductHeaderNoSearch.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ProductHeaderNoSearch(ProductHeaderNoSearch.args)}`,
    },
  },
};

export const MobileMenu = Template.bind({});
MobileMenu.storyName = 'Disable desktop menu';
MobileMenu.args = {
  ...LabComponent.args,
  mobileMenu: true,
};
MobileMenu.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${MobileMenu(MobileMenu.args)}`,
    },
  },
};
