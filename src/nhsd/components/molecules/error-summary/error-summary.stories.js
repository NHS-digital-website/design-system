// prettify html
import pretty from 'pretty';

// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Error summary';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}`;
const sourceCode = `// Sass import \n@use "nhsd/components/molecules/error-summary";

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
  box: {
    classes: 'nhsd-a-box--border-red',
  },
  title: 'Error Summary',
  errors: [
    {
      label: 'This is an anchor link to problem one',
      classes: 'nhsd-a-link--col-red',
    },
    {
      label: 'This is an anchor link to problem two',
      classes: 'nhsd-a-link--col-red',
    },
    {
      label: 'This is an anchor link to problem three',
      classes: 'nhsd-a-link--col-red',
    },
  ],
};

LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${pretty(LabComponent(LabComponent.args), { ocd: true })}`,
    },
  },
};
