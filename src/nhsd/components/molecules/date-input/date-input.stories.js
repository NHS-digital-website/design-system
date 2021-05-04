// prettify html
import pretty from 'pretty';

// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Date input';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}
- The input date, month and year have a fixed width.`;
const sourceCode = `// Sass import \n@use "nhsd/components/molecule/date-input";
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
  classes: '',
  title: 'What years did something happen?',
  hint: 'This is a friendly hint',
  errorText: '',
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${pretty(LabComponent(LabComponent.args), { ocd: true })}`,
    },
  },
};

export const ErrorComponent = Template.bind({});
ErrorComponent.storyName = 'Error State';
ErrorComponent.args = {
  classes: 'nhsd-t-form-group--error',
  title: 'What years did something happen?',
  hint: 'This is a friendly hint',
  errorText: 'This is an error',
};
ErrorComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${pretty(ErrorComponent(ErrorComponent.args), { ocd: true })}`,
    },
  },
};
