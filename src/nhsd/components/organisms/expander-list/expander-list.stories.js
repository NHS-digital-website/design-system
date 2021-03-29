// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Expander list';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}

### Components used
- <a href="/docs/design-system-components-atoms-horizontal-rule--lab-component">Horizontal Rule</a>
- <a href="/docs/design-system-components-molecules-expander--lab-component">Expander</a>

### Tokens used
- Spacing

### Developer notes

- Javascript must be enabled for the proper functioning of this component
- The **Expander-list** organism makes use of the **Horizontal Rule** atom and the **Expander** molecule
- For each 'expander' object added to the 'expanders' list parameter, a new row will be added to display the new expander
- Only supports one type of expander per list
- Do not use if there is only one expander you wish to display. For that, use the <a href="/docs/design-system-components-molecules-expander--lab-component">Expander</a> molecule instead.`;

const sourceCode = `// Sass import \n@use "nhsd/components/organisms/expander-list";

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
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: [
          'most people',
          'some people',
        ],
      },
      defaultValue: 'most people',
    },
  },
};

// Component template
const Template = (args) => template.render({ params: { ...args } });

export const LabComponent = Template.bind({});
LabComponent.storyName = sbConfig.title.lab;
LabComponent.args = {
  expanders: [
    {
      heading: '"Most people" one',
      content: 'This is the content inside an expander. It can contain text, images and other content by using the visual editor.',
    },
    {
      heading: '"Most people" two',
      content: 'This is the content inside an expander. It can contain text, images and other content by using the visual editor.',
    },
    {
      heading: '"Most people" three',
      content: 'This is the content inside an expander. It can contain text, images and other content by using the visual editor.',
    },
  ],
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};

export const SomePeople = Template.bind({});
SomePeople.storyName = sbConfig.title.SomePeople;
SomePeople.args = {
  type: 'some people',
  expanders: [
    {
      heading: '"Some people" one',
      content: 'This is the content inside an expander. It can contain text, images and other content by using the visual editor.',
    },
    {
      heading: '"Some people" two',
      content: 'This is the content inside an expander. It can contain text, images and other content by using the visual editor.',
    },
    {
      heading: '"Some people" three',
      content: 'This is the content inside an expander. It can contain text, images and other content by using the visual editor.',
    },
  ],
};
SomePeople.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${SomePeople(SomePeople.args)}`,
    },
  },
};
