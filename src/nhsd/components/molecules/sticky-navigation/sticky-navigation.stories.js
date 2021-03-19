// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Sticky Navigation';
const storyDescription = `${sbConfig.heading.lab}

### Components used
- <a href="/docs/design-system-components-atoms-link--lab-component">Link atom</a>

### Implementation info
- Sticky nav items are nested with the \`nhsd-m-sticky-navigation__item--nested\` modifier
- Navigation items can be linked to content with the data attribute \`data-nav-content\` and value of the content id.  
  E.g. \`data-nav-content="my-content-id"\`
- Active links are styled with the \`nhsd-m-sticky-navigation__item--active\` modifier`;

const sourceCode = `// Sass import \n@use "nhsd/components/molecules/sticky-navigation";

// HTML`;

// Component defaults
export default {
  title: `${sbConfig.title.designSystem} / ${sbConfig.title.components} / ${sbConfig.title.molecules} / ${componentName}`,
  parameters: {
    argsTypes: {
      headerText: { control: 'text', defaultValue: 'Page of contents', description: 'Modifies header text' },
    },
    docs: {
      description: {
        component: storyDescription,
      },
    },
  },
};

// Component template
const Template = (args) => template.render({ params: { ...args } });

export const StickyNavComponent = Template.bind({});
StickyNavComponent.storyName = sbConfig.title.lab;
StickyNavComponent.args = {
  headerText: 'Page of contents',
  navItems: [
    {
      link: {
        label: 'Top of page',
        href: '#top-of-page',
      },
      contentId: 'top-of-page',
    }, {
      link: {
        label: 'Overview',
        href: '#overview',
      },
      contentId: 'overview',
    }, {
      // active: true,
      link: {
        label: 'Risk criteria',
        href: '#risk-criteria',
      },
      contentId: 'risk-criteria',
    }, {
      link: {
        label: 'Methodology & timings',
        href: '#methodology-and-timings',
      },
      contentId: 'methodology-and-timings',
    }, {
      link: {
        label: 'Nested link one (Active)',
        href: '#nested-link-one',
      },
      contentId: 'nested-link-one',
      active: true,
      nested: true,
    }, {
      link: {
        label: 'Nested link two',
        href: '#nested-link-two',
      },
      contentId: 'nested-link-two',
      nested: true,
    }, {
      link: {
        label: 'Nested link three',
        href: '#nested-link-three',
      },
      contentId: 'nested-link-three',
      nested: true,
    }, {
      link: {
        label: 'Known issues',
        href: '#known-issues',
      },
      contentId: 'known-issues',
    },
  ],
};
StickyNavComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${StickyNavComponent(StickyNavComponent.args)}`,
    },
  },
};
