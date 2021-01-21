// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config.js';

// Load template file
import template from  './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Menu bar';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}`;
const sourceCode = `// Sass import \n@use "nhsd/components/molecules/menu-bar";

// HTML`;

// Component defaults
export default {
  title: `${sbConfig.title.designSystem} / ${sbConfig.title.components} / ${sbConfig.title.molecules} / ${componentName}`,
  parameters: {
    docs: {
      description: {
        component: storyDescription
      }
    },
  },
};

// Component template
const Template = (args) => {
  return template.render({ params: {...args} });
};

export const LabComponent = Template.bind({});
LabComponent.storyName = sbConfig.title.lab;
LabComponent.args = {
  links: [
    {
      label: 'Coronavirus',
    }, {
      label: 'Data',
    }, {
      label: 'Services',
      classes: 'js-active',
    }, {
      label: 'Cyber',
    }, {
      label: 'Developer',
    }, {
      label: 'News',
    }, {
      label: 'About us',
    },
  ]
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};

export const DefaultComponent = Template.bind({});
DefaultComponent.storyName = 'Desktop view';
DefaultComponent.args = {
  links: [
    {
      label: 'Coronavirus',
    }, {
      label: 'Data',
    }, {
      label: 'Services',
      classes: 'js-active',
    }, {
      label: 'Cyber',
    }, {
      label: 'Developer',
    }, {
      label: 'News',
    }, {
      label: 'About us',
    },
  ]
};
DefaultComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${DefaultComponent(DefaultComponent.args)}`,
    },
  },
};

export const MobileView = Template.bind({});
MobileView.storyName = 'Mobile view';
MobileView.args = {
  classes: 'js-mobile',
  links: [
    {
      label: 'Coronavirus',
    }, {
      label: 'Data',
    }, {
      label: 'Services',
      classes: 'js-active',
    }, {
      label: 'Cyber',
    }, {
      label: 'Developer',
    }, {
      label: 'News',
    }, {
      label: 'About us',
    },
  ]
};
MobileView.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${MobileView(MobileView.args)}`,
    },
  },
};
