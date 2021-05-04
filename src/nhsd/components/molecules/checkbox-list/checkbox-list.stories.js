// prettify html
import pretty from 'pretty';

// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Checkbox list';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}
- There different spacing rules dependant on size of checkboxs or radio button`;

const sourceCode = `// Sass import \n@use "nhsd/components/molecule/checkbox-list";

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
    title: {
      control: 'text',
      defaultValue: 'What years did something happen?',
    },
    hint: {
      control: 'text',
      defaultValue: 'This is a friendly hint',
    },
    errorText: {
      control: 'text',
      defaultValue: '',
    },
    classes: {
      control: {
        type: 'select',
        options: [
          'nhsd-a-checkbox--small',
          'nhsd-a-checkbox',
          'nhsd-a-checkbox--large',
          'nhsd-a-checkbox--rounded nhsd-a-checkbox--rounded-small',
          'nhsd-a-checkbox--rounded',
          'nhsd-a-checkbox--rounded nhsd-a-checkbox--rounded-large',
        ],
      },
      defaultValue: '',
    },
  },
};

// Component template
const Template = (args) => template.render({ params: { ...args } });

export const LabComponent = Template.bind({});
LabComponent.storyName = sbConfig.title.lab;
const checkboxList = [
  {
    label: 'Label',
    hint: 'The text above is a label',
  },
  {
    label: 'Label',
  },
  {
    label: 'Label',
    hint: 'The text above is a label',
  },
];
LabComponent.args = {
  title: 'What years did something happen?',
  hint: 'This is a friendly hint',
  errorText: '',
  checkboxList,
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${pretty(LabComponent(LabComponent.args), { ocd: true })}`,
    },
  },
};

export const ErrorComponent = Template.bind({});
ErrorComponent.storyName = 'Error check list';
const errorCheckboxList = [
  {
    label: 'Label',
    hint: 'The text above is a label',
  },
  {
    label: 'Label',
  },
  {
    label: 'Label',
    hint: 'The text above is a label',
  },
];
ErrorComponent.args = {
  classes: 'nhsd-t-form-group nhsd-t-form-group--error',
  title: 'What years did something happen?',
  hint: 'This is a friendly hint',
  errorText: 'You must select a checkbox',
  checkboxList: errorCheckboxList,
};
ErrorComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${pretty(ErrorComponent(ErrorComponent.args), { ocd: true })}`,
    },
  },
};
