// Load storybook config
import * as sbConfig from '../../../../storybook.config.js';

// Load template file
import template from  './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Logo';
const storyDescription = `The **NHS Digital logo** is available as an inline SVG for HTML, and also as an image file in SVG format.`;
const sourceCode = `// Sass import \n@use "nhsd/components/atoms/logo";

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
  },
};

const Template = (args) => {
  return template.render({ params: {...args} });
};

export const Logo = Template.bind({});
Logo.storyName = 'NHS Digital logo';
Logo.parameters = {
  docs: {
    source: {
      code: `${sourceCode} ${Logo()}`,
    }
  },
};
