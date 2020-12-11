// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config.js';

// Load template file
import template from  './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Picture with link';
const storyDescription = `${sbConfig.heading.lab}`;
const sourceCode = `// Sass import \n@use "nhsd/components/molecules/picture-with-link";

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

export const Story1 = Template.bind({});
Story1.storyName = sbConfig.title.lab;
Story1.args = {
  picture: {
    sourceSet: [{
      'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
    }],
    alt: 'Abstract lights',
    classes: 'nhsd-a-picture--round-corners nhsd-!t-margin-bottom-2',
  },
  link: {
    href: '#',
    label: 'Simplifying patient communication with the NHS App',
    classes: 'nhsd-t-heading-s',
  },
};
Story1.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${Story1(Story1.args)}`,
    },
  },
};
