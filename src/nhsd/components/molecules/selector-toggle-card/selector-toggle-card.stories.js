// prettify html
import pretty from 'pretty';

// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Selector toggle card';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}
  - Min. height: 200px on desktop / 150px until tablet.
  - No borders on any box background - BUT white box on white background must have a light grey border.`;
const sourceCode = `// Sass import \n@use "nhsd/components/molecules/selector-card-toggle";

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
  classes: 'nhsd-a-box-link',
  box: {
    classes: 'nhsd-a-box nhsd-a-box--bg-white nhsd-a-box--border-grey ',
  },
  selector: {
    nested: true,
  },
  title: 'Preference',
  text: 'These mean we can show you content',
  label: 'This is a toggle',
};

LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${pretty(LabComponent(LabComponent.args), { ocd: true })}`,
    },
  },
};
