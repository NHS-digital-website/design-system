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
  classes: '',
  label: 'Label',
  hint: 'The text above is a label',
  rounded: false,
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};

export const SmallCheckbox = Template.bind({});
SmallCheckbox.storyName = 'Small Checkbox';
SmallCheckbox.args = {
  classes: 'nhsd-a-checkbox--small',
  label: 'Label',
};
SmallCheckbox.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${SmallCheckbox(SmallCheckbox.args)}`,
    },
  },
};

export const Checkbox = Template.bind({});
Checkbox.storyName = 'Meduim Checkbox (Default)';
Checkbox.args = {
  classes: '',
  label: 'Label',
  rounded: false,
};
Checkbox.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${Checkbox(Checkbox.args)}`,
    },
  },
};

export const LargeCheckbox = Template.bind({});
LargeCheckbox.storyName = 'Large Checkbox';
LargeCheckbox.args = {
  classes: 'nhsd-a-checkbox--large',
  label: 'Label',
};
LargeCheckbox.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LargeCheckbox(LargeCheckbox.args)}`,
    },
  },
};

export const SmallRoundedCheckbox = Template.bind({});
SmallRoundedCheckbox.storyName = 'Small Rounded Checkbox';
SmallRoundedCheckbox.args = {
  classes: 'nhsd-a-checkbox--rounded nhsd-a-checkbox--rounded-small',
  label: 'Label',
  rounded: true,
};
SmallRoundedCheckbox.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${SmallRoundedCheckbox(SmallRoundedCheckbox.args)}`,
    },
  },
};

export const RoundedCheckbox = Template.bind({});
RoundedCheckbox.storyName = 'Meduim Rounded Checkbox (Default)';
RoundedCheckbox.args = {
  classes: 'nhsd-a-checkbox--rounded',
  label: 'Label',
  rounded: true,
};
RoundedCheckbox.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${RoundedCheckbox(RoundedCheckbox.args)}`,
    },
  },
};

export const LargeRoundedCheckbox = Template.bind({});
LargeRoundedCheckbox.storyName = 'Large Rounded Checkbox';
LargeRoundedCheckbox.args = {
  classes: 'nhsd-a-checkbox--rounded nhsd-a-checkbox--rounded-large',
  label: 'Label',
  rounded: true,
};
LargeRoundedCheckbox.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LargeRoundedCheckbox(LargeRoundedCheckbox.args)}`,
    },
  },
};
