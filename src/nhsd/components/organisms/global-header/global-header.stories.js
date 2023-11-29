// Load icons
import nhsdIcon from '@/helpers/icons/inline-icon';

// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';

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
const Template = (args) => template.render({ params: { ...args }, nhsdIcon });

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
          svgSource: nhsdIcon('search'),
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
          svgSource: nhsdIcon('burger'),
          classes: 'nhsd-a-icon--size-s',
        },
      }],
  },
  search: true,
};
LabComponent.parameters = {
  layout: 'fullscreen',
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};

export const DescriptorAtom = Template.bind({});
DescriptorAtom.args = {
  paragraph: {
      classes: 'digital-descriptor-text',
      text: 'Digital',
      id: 'digital-descriptor-text-id',
  },
  menuBar: {
    links: [
      {
        label: 'Coronavirus',
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
          svgSource: nhsdIcon('search'),
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
          svgSource: nhsdIcon('burger'),
          classes: 'nhsd-a-icon--size-s',
        },
      }],
  },
  search: true,
  descriptorAtom: true,
};
DescriptorAtom.parameters = {
  layout: 'fullscreen',
  docs: {
    source: {
      code: `${sourceCode}\n${DescriptorAtom(DescriptorAtom.args)}`,
    },
  },
};

export const MegaMenuComponent = Template.bind({});
MegaMenuComponent.args = {
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
      }, {
        label: 'Data',
        megaMenu: 'data',
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
  megaMenus: [{
    id: 'data',
    image: {
      src: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_992x661.jpg',
      alt: '2 scientists testing in a laboratory',
      classes: 'nhsd-a-image--cover nhsd-t-round-top-left',
    },
    links: [
      {
        label: 'Go to Data',
        classes: 'nhsd-t-heading-s nhsd-!t-margin-0',
      },
      {
        label: 'Publications',
      },
      {
        label: 'Dashboards',
      },
      {
        label: 'Another link',
      },
      {
        label: 'Another link',
      },
      {
        label: 'Another link',
      },
      {
        label: 'Another link',
      },
      {
        label: 'Another link',
      },
      {
        label: 'Another link',
      },
      {
        label: 'Another link',
      },
      {
        label: 'Another link',
      },
    ],
  }],
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
        svgSource: nhsdIcon('search'),
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
        svgSource: nhsdIcon('burger'),
        classes: 'nhsd-a-icon--size-s',
      },
    }],
  },
  search: true,
};
MegaMenuComponent.parameters = {
  layout: 'fullscreen',
  docs: {
    source: {
      code: `${sourceCode}\n${MegaMenuComponent(MegaMenuComponent.args)}`,
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
        svgSource: nhsdIcon('burger'),
        classes: 'nhsd-a-icon--size-s',
      },
    }],
  },
};
ProductHeaderNoSearch.parameters = {
  layout: 'fullscreen',
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
  layout: 'fullscreen',
  docs: {
    source: {
      code: `${sourceCode}\n${MobileMenu(MobileMenu.args)}`,
    },
  },
};
