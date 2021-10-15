// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
import listTemplate from './checkbox-list.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Checkbox';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}`;

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
LabComponent.storyName = sbConfig.title.defaultStory;
LabComponent.args = {
  inputs: [{
    classes: '',
    label: 'Label',
    hint: 'The text above is a label',
    rounded: false,
  }],
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
  inputs: [{
    classes: 'nhsd-a-checkbox--small',
    label: 'Label',
  }],
};
SmallCheckbox.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${SmallCheckbox(SmallCheckbox.args)}`,
    },
  },
};

export const LargeCheckbox = Template.bind({});
LargeCheckbox.storyName = 'Large Checkbox';
LargeCheckbox.args = {
  inputs: [{
    classes: 'nhsd-a-checkbox--large',
    label: 'Label',
  }],
};
LargeCheckbox.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LargeCheckbox(LargeCheckbox.args)}`,
    },
  },
};

export const DisabledChecbox = Template.bind({});
DisabledChecbox.storyName = 'Disabled Checkbox';
DisabledChecbox.args = {
  label: 'Label',
  disabled: true,
};
DisabledChecbox.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${DisabledChecbox(DisabledChecbox.args)}`,
    },
  },
};

// Component template
const ListTemplate = (args) => listTemplate.render({ params: { ...args } });

export const ExampleCheckboxList = ListTemplate.bind({});

ExampleCheckboxList.storyName = 'Checkbox Example';
ExampleCheckboxList.args = {
  inputs: [{
    label: 'Option 1',
  },
  {
    label: 'Option 2',
  },
  {
    label: 'Option 3',
    disabled: true,
  },
  {
    label: 'Option 4',
  }],
};
ExampleCheckboxList.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ExampleCheckboxList(ExampleCheckboxList.args)}`,
    },
  },
};
