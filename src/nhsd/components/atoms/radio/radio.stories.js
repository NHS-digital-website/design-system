/* global window */

// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from '../checkbox/template.njk';
import listTemplate from '../checkbox/checkbox-list.njk';

// Load stylesheet file
require('../checkbox/_index.scss');

const componentName = 'Radio';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}

The radio atom reuses styling from the <a href="${window.location.origin}/?path=/docs/design-system-components-atoms-checkbox--lab-component">checkbox</a> atom and updates the component appearance dynamically depending on the input type.`;

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
  classes: '',
  label: 'Label',
  hint: 'The text above is a label',
  radio: true,
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};

export const SmallRadio = Template.bind({});
SmallRadio.storyName = 'Small Radio';
SmallRadio.args = {
  classes: 'nhsd-a-checkbox--small',
  label: 'Label',
  radio: true,
};
SmallRadio.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${SmallRadio(SmallRadio.args)}`,
    },
  },
};

export const LargeRadio = Template.bind({});
LargeRadio.storyName = 'Large Radio';
LargeRadio.args = {
  classes: 'nhsd-a-checkbox--large',
  label: 'Label',
  radio: true,
};
LargeRadio.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LargeRadio(LargeRadio.args)}`,
    },
  },
};

export const DisabledRadio = Template.bind({});
DisabledRadio.storyName = 'Disabled Radio';
DisabledRadio.args = {
  label: 'Label',
  disabled: true,
  radio: true,
};
DisabledRadio.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${DisabledRadio(DisabledRadio.args)}`,
    },
  },
};

// Component template
const ListTemplate = (args) => listTemplate.render({ params: { ...args } });

export const ExampleRadioList = ListTemplate.bind({});

ExampleRadioList.storyName = 'Radio Example';
ExampleRadioList.args = {
  inputs: [{
    label: 'Option 1',
    radio: true,
  },
  {
    label: 'Option 2',
    radio: true,
  },
  {
    label: 'Option 3',
    disabled: true,
    radio: true,
  },
  {
    label: 'Option 4',
    radio: true,
  }],
};
ExampleRadioList.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ExampleRadioList(ExampleRadioList.args)}`,
    },
  },
};
