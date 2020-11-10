// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config.js';

// Load template file
import template from  './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Box';
const storyDescription = `${sbConfig.heading.lab}`;
const sourceCode = `// Sass import \n@use "nhsd/components/atoms/box";

// HTML`;

// Component defaults
export default {
  title: `${sbConfig.title.designSystem} / ${sbConfig.title.components} / ${sbConfig.title.atoms} / ${componentName}`,
  parameters: {
    docs: {
      description: {
        component: storyDescription
      }
    },
    notes: `${sbConfig.heading.basicRules}`,
  },
};

// Component template
const Template = (args) => {
  return template.render({ params: {...args} });
};

export const LabComponent = Template.bind({});
LabComponent.storyName = sbConfig.title.lab;
LabComponent.args = {
  classes: 'nhsd-a-box--border-light-grey'
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};

export const BoxVariant1 = Template.bind({});
BoxVariant1.storyName = 'White box';
BoxVariant1.parameters = {
  backgrounds: {
    default: 'dim',
  },
  docs: {
    source: {
      code: `${sourceCode}\n${BoxVariant1(BoxVariant1.args)}`,
    },
  },
};

export const BoxVariant0 = Template.bind({});
BoxVariant0.storyName = 'Light grey box';
BoxVariant0.args = {
  classes: 'nhsd-a-box--bg-light-grey'
};
BoxVariant0.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${BoxVariant0(BoxVariant0.args)}`,
    },
  },
};

export const BoxVariant2 = Template.bind({});
BoxVariant2.storyName = 'Dark grey box';
BoxVariant2.args = {
  classes: 'nhsd-a-box--bg-dark-grey'
};
BoxVariant2.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${BoxVariant2(BoxVariant2.args)}`,
    },
  },
};

export const BoxVariant3 = Template.bind({});
BoxVariant3.storyName = 'Yellow box';
BoxVariant3.args = {
  classes: 'nhsd-a-box--bg-yellow'
};
BoxVariant3.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${BoxVariant3(BoxVariant3.args)}`,
    },
  },
};

export const BoxVariant4 = Template.bind({});
BoxVariant4.storyName = 'Blue box';
BoxVariant4.args = {
  classes: 'nhsd-a-box--bg-blue'
};
BoxVariant4.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${BoxVariant4(BoxVariant4.args)}`,
    },
  },
};

export const BoxVariant5 = Template.bind({});
BoxVariant5.storyName = 'White box with yellow outline';
BoxVariant5.args = {
  classes: 'nhsd-a-box--border-yellow'
};
BoxVariant5.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${BoxVariant5(BoxVariant5.args)}`,
    },
  },
};

export const BoxVariant6 = Template.bind({});
BoxVariant6.storyName = 'White box with light blue outline';
BoxVariant6.args = {
  classes: 'nhsd-a-box--border-light-blue'
};
BoxVariant6.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${BoxVariant6(BoxVariant6.args)}`,
    },
  },
};

export const BoxVariant7 = Template.bind({});
BoxVariant7.storyName = 'White box with light grey outline';
BoxVariant7.args = {
  classes: 'nhsd-a-box--border-light-grey'
};
BoxVariant7.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${BoxVariant7(BoxVariant7.args)}`,
    },
  },
};
