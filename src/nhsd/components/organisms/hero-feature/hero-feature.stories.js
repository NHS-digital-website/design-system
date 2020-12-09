// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config.js';

// Load template file
import template from  './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Hero feature';
const storyDescription = `${sbConfig.heading.lab}`;
const sourceCode = `// Sass import \n@use "nhsd/components/organisms/hero-feature";

// HTML`;

// Component defaults
export default {
  title: `${sbConfig.title.designSystem} / ${sbConfig.title.components} / ${sbConfig.title.organisms} / ${componentName}`,
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

export const ComponentVariant1 = Template.bind({});
ComponentVariant1.storyName = 'Lab';
ComponentVariant1.args = {
  blocks: [
    {
      title: 'Data and technology that improves lives',
      text: 'We deliver world-class technology and data intelligence for the NHS, supporting healthcare professionals  and empowering patients.',
      button: {
        el: 'a',
        label: 'About NHS Digital',
        href: '#',
        classes: 'nhsd-!t-margin-bottom-9',
      },
      colourBar: true,
      picture: {
        sourceSet: [{
          'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-picture--square',
      },
    }, {
      title: 'Coronavirus (COVID-19)',
      text: 'At NHS Digital we’re helping the NHS frontline face the challenges of the coronavirus (COVID-19) outbreak with systems, services and data. From prioritising patients to protecting the most vulnerable...',
      button: {
        el: 'a',
        label: 'How we\'re supporting the response',
        href: '#',
        classes: 'nhsd-!t-margin-bottom-0',
      },
      picture: {
        sourceSet: [{
          'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: '',
      },
    },
  ],
};
ComponentVariant1.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ComponentVariant1()}`,
    },
  },
};
