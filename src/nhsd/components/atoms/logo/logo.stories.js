// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';

const componentName = 'Logo';
const storyDescription = `${sbConfig.heading.default}`;
const sourceCode = `// Sass import \n@use "nhsd/components/atoms/logo";

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

const Template = (args) => template.render({ params: { ...args } });

export const LabComponent = Template.bind({});
LabComponent.storyName = sbConfig.title.defaultStory;
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent()}`,
    },
  },
};

export const NHSEComponent = Template.bind({});
NHSEComponent.storyName = 'NHS England';
NHSEComponent.args = {
  logo: 'nhse',
};
NHSEComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${NHSEComponent(NHSEComponent.args)}`,
    },
  },
};

export const BlackLogoComponent = Template.bind({});
BlackLogoComponent.storyName = 'Black Fill';
BlackLogoComponent.args = {
  classes: 'nhsd-a-logo--black',
};
BlackLogoComponent.parameters = {
  docs: {
    description: {
      story: 'A black fill can be applied to the logo with the class `nhsd-a-logo--black`',
    },
    source: {
      code: `${sourceCode}\n${BlackLogoComponent(BlackLogoComponent.args)}`,
    },
  },
};
