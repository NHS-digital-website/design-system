// prettify html
import pretty from 'pretty';

// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Selector toggle';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}

### Tokens used
- Spacing
- Colour
- Utils
- Typography

### Implementation rules
- Text inside toggle cannot be chnaged.
- Sizing of toggle cannot be changed.
- If nested component **MUST** be wrapped in Label to work.
- Label **Must** also be given a name to be accessible.`;
const sourceCode = `// Sass import \n@use "nhsd/components/atoms/selector-toggle";

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
  nested: false,
  label: 'This is a toggle',
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${pretty(LabComponent(LabComponent.args), { ocd: true })}`,
    },
  },
};

export const StartToggle = Template.bind({});
StartToggle.storyName = 'Start toggle';
StartToggle.args = {
  classes: 'nhsd-a-selector-toggle--start',
  id: 'switch2',
};
StartToggle.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${pretty(StartToggle(StartToggle.args), { ocd: true })}`,
    },
  },
};

export const CancelToggle = Template.bind({});
CancelToggle.storyName = 'Cancel toggle';
CancelToggle.args = {
  classes: 'nhsd-a-selector-toggle--cancel',
  id: 'switch3',
};
CancelToggle.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${pretty(CancelToggle(CancelToggle.args), { ocd: true })}`,
    },
  },
};
