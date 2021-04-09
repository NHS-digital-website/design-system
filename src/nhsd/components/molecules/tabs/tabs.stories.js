import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Tabs';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}

### Components used
- <a href="/docs/design-system-components-atoms-tab--lab-component">Tab atom</a>

### Tokens used
- Colours
- Spacing
- Transition
- Utils

### Developer notes

- The **Tabs** molecule controls the responsive behaviour of the tab atoms.`;
const sourceCode = `// Sass import \n@use "nhsd/components/molecules/tabs";

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
  tabs: [
    {
      label: 'Coronavirus',
    }, {
      label: 'Data',
    }, {
      label: 'Services',
      classes: 'nhsd-a-tab__active',
    }, {
      label: 'Cyber',
    }, {
      label: 'Developer',
    }, {
      label: 'News',
    }, {
      label: 'Training',
    },
    {
      label: 'Campaigns',
    },
    {
      label: 'About the data security',
    },
  ],
  horizontalLine: {
    classes: 'nhsd-a-horizontal-rule--size-xxs',
  },
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};
