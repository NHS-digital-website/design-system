// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Expander';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}

### Components used
- <a href="/docs/design-system-components-atoms-icon--lab-component">Icon</a>
- <a href="/docs/design-system-components-atoms-box--lab-component">Box</a>

### Tokens used
- Spacing
- Colours
- Typogrpahy

### Developer notes

- Javascript must be enabled for the proper functioning of this component
- The **Expander** molecule makes use of the **Icon** and **Box** atoms
- Can be used and displayed as a list of expanders, using the **Expander List** Organism`;

const sourceCode = `// Sass import \n@use "nhsd/components/molecules/expander";

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
  heading: '"Most people" expander',
  content: 'This is the content inside an expander. It can contain text, images and other content by using the visual editor.',
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
  heading: '"Some people" expander',
  content: 'This is the content inside an expander. It can contain text, images and other content by using the visual editor.',
  type: 'some people',
};
SomePeople.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${SomePeople(SomePeople.args)}`,
    },
  },
};
