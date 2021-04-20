// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Tag';
const storyDescription = `${sbConfig.heading.lab}`;
const sourceCode = `// Sass import \n@use "nhsd/components/atoms/tag";

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
  backgrounds: {
    default: 'dim',
  },
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent()}`,
    },
  },
};

export const ComponentVariant1 = Template.bind({});
ComponentVariant1.storyName = 'Dark grey background';
ComponentVariant1.args = {
  classes: 'nhsd-a-tag--bg-dark-grey',
  label: 'National statistics',
};
ComponentVariant1.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ComponentVariant1(ComponentVariant1.args)}`,
    },
  },
};

export const ComponentVariant2 = Template.bind({});
ComponentVariant2.storyName = 'Light grey background';
ComponentVariant2.args = {
  classes: 'nhsd-a-tag--bg-light-grey',
  label: 'Info only',
};
ComponentVariant2.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ComponentVariant2(ComponentVariant2.args)}`,
    },
  },
};

export const ComponentVariant3 = Template.bind({});
ComponentVariant3.storyName = 'Light red background';
ComponentVariant3.args = {
  classes: 'nhsd-a-tag--bg-light-red',
  label: 'High severity',
};
ComponentVariant3.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ComponentVariant3(ComponentVariant3.args)}`,
    },
  },
};

export const ComponentVariant4 = Template.bind({});
ComponentVariant4.storyName = 'Light blue background';
ComponentVariant4.args = {
  classes: 'nhsd-a-tag--bg-light-blue',
  label: 'Medium severity',
};
ComponentVariant4.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ComponentVariant4(ComponentVariant4.args)}`,
    },
  },
};

export const ComponentVariant5 = Template.bind({});
ComponentVariant5.storyName = 'Light green background';
ComponentVariant5.args = {
  classes: 'nhsd-a-tag--bg-light-green',
  label: 'Low severity',
};
ComponentVariant5.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ComponentVariant5(ComponentVariant5.args)}`,
    },
  },
};

export const MetaTag = Template.bind({});
MetaTag.storyName = 'Meta tag';
MetaTag.args = {
  classes: 'nhsd-a-tag--meta',
  label: 'XLS',
};
MetaTag.parameters = {
  backgrounds: {
    default: 'dim',
  },
  docs: {
    source: {
      code: `${sourceCode}\n${MetaTag(MetaTag.args)}`,
    },
  },
};

export const MetaTagLight = Template.bind({});
MetaTagLight.storyName = 'Meta tag / Light';
MetaTagLight.args = {
  classes: 'nhsd-a-tag--meta-light',
  label: '1.5MB',
};
MetaTagLight.parameters = {
  backgrounds: {
    default: 'dim',
  },
  docs: {
    source: {
      code: `${sourceCode}\n${MetaTagLight(MetaTagLight.args)}`,
    },
  },
};

export const PhaseTag = Template.bind({});
PhaseTag.storyName = 'Phase tag';
PhaseTag.args = {
  classes: 'nhsd-a-tag--phase',
  label: 'ALPHA',
};
PhaseTag.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${PhaseTag(PhaseTag.args)}`,
    },
  },
};
