// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Horizontal rule';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}
  - The default size is MEDIUM
  - Use size modifier class names to switch sizes`;
const sourceCode = `// Sass import \n@use "nhsd/components/atoms/horizontal-rule";

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
    argTypes: {},
  },
};

// Component template
const Template = (args) => template.render({ params: { ...args } });

export const LabComponent = Template.bind({});
LabComponent.storyName = sbConfig.title.lab;
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent()}`,
    },
  },
};

export const ExtraSmallComponent = Template.bind({});
ExtraSmallComponent.storyName = 'Small';
ExtraSmallComponent.args = {
  classes: 'nhsd-a-horizontal-rule--size-xs',
};
ExtraSmallComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ExtraSmallComponent(ExtraSmallComponent.args)}`,
    },
  },
};

export const SmallComponent = Template.bind({});
SmallComponent.storyName = 'Small';
SmallComponent.args = {
  classes: 'nhsd-a-horizontal-rule--size-s',
};
SmallComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${SmallComponent(SmallComponent.args)}`,
    },
  },
};

export const MediumComponent = Template.bind({});
MediumComponent.storyName = 'Medium (default)';
MediumComponent.args = {
  classes: 'nhsd-a-horizontal-rule--size-m',
};
MediumComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${MediumComponent(MediumComponent.args)}`,
    },
  },
};

export const LargeComponent = Template.bind({});
LargeComponent.storyName = 'Large';
LargeComponent.args = {
  classes: 'nhsd-a-horizontal-rule--size-l',
};
LargeComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LargeComponent(LargeComponent.args)}`,
    },
  },
};
