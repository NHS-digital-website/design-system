// Load icons
import nhsdIcon from '@/helpers/icons/inline-icon';

// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';

// Load stylesheet file
require('./_index.scss');

const componentName = 'Search bar';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}

### Components used
- <a href="/docs/design-system-components-atoms-button--lab-component">Button atom</a>

### Tokens used
- Colours
- Forms (WIP)
- Spacing
- Transition
- Typography
- Utils

### Developer notes

- The **Search bar molecule** uses form tokens to populate a simple form with an input field, and a submit button.
- This component being a simple form works without JavaScript.
- An ARIA label is used for accessible labelling.
- For a fully integrated example visit the  <a href="/story/design-system-components-organisms-global-header--lab">Global Header</a> organism.`;
const sourceCode = `// Sass import \n@use "nhsd/components/molecules/search-field";

// HTML`;

// Component defaults
export default {
  title: `${sbConfig.title.designSystem} / ${sbConfig.title.components} / ${sbConfig.title.molecules} / ${componentName}`,
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
LabComponent.storyName = sbConfig.title.lab;
LabComponent.args = {
  searchIcon: {
    svgSource: nhsdIcon('search'),
    classes: 'nhsd-a-icon--size-s',
  },
  clearIcon: {
    svgSource: nhsdIcon('x'),
    classes: 'nhsd-a-icon--size-s',
  },
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};

export const CustomPlaceholder = Template.bind({});
CustomPlaceholder.storyName = sbConfig.title.CustomPlaceholder;
CustomPlaceholder.args = {
  placeholder: 'Custom placeholder...',
  searchIcon: {
    svgSource: nhsdIcon('search'),
    classes: 'nhsd-a-icon--size-s',
  },
  clearIcon: {
    svgSource: nhsdIcon('x'),
    classes: 'nhsd-a-icon--size-s',
  },
};
CustomPlaceholder.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${CustomPlaceholder(CustomPlaceholder.args)}`,
    },
  },
};

export const FullWidth = Template.bind({});
FullWidth.storyName = sbConfig.title.FullWidth;
FullWidth.args = {
  classes: 'nhsd-m-search-bar__full-width',
  searchIcon: {
    svgSource: nhsdIcon('search'),
    classes: 'nhsd-a-icon--size-s',
  },
  clearIcon: {
    svgSource: nhsdIcon('x'),
    classes: 'nhsd-a-icon--size-s',
  },
};
FullWidth.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${FullWidth(FullWidth.args)}`,
    },
  },
};

export const Small = Template.bind({});
Small.storyName = sbConfig.title.Small;
Small.args = {
  classes: 'nhsd-m-search-bar__small',
  searchIcon: {
    svgSource: nhsdIcon('search'),
    classes: 'nhsd-a-icon--size-s',
  },
  clearIcon: {
    svgSource: nhsdIcon('x'),
    classes: 'nhsd-a-icon--size-s',
  },
};
Small.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${Small(Small.args)}`,
    },
  },
};
