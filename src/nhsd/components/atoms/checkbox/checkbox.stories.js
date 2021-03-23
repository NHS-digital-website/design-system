// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Checkbox';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}

### Tokens used
- Colour

### Component variants

1. Checkbox with a label
2. Checkbox only

### Implementation rules

- Simple checkbox input.
- Checkbox is vertically alligned to middle`;

const sourceCode = `// Sass import \n@use "nhsd/components/atoms/checkbox";

// HTML`;

// Component defaults
export default {
  title: `${sbConfig.title.designSystem} / ${sbConfig.title.components} / ${sbConfig.title.atoms} / ${componentName}`,
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
  label: 'Label',
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};

export const NoLabel = Template.bind({});
NoLabel.storyName = sbConfig.title.NoLabel;
NoLabel.args = {};
NoLabel.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${NoLabel(NoLabel.args)}`,
    },
  },
};
