// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config.js';

// Load template file
import template from  '../../organisms/picture-with-link-list/template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Picture with link list';
const storyDescription = `${sbConfig.heading.lab}`;
const sourceCode = `// Sass import \n@use "nhsd/components/organisms/picture-with-link-list";

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

export const Component1 = Template.bind({});
Component1.storyName = sbConfig.title.lab;
Component1.args = {
  desktopColumns: 2,
  centreColumns: true,
  title: 'Products & services',
  blocks: [
    {
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
      },
    },
    {
      picture: {
        sourceSet: [{
          'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-picture--round-corners nhsd-!t-margin-bottom-2',
      },
      link: {
        href: '#',
        label: 'Simplifying patient communication with the NHS App'
      },
    },
    {
      picture: {
        sourceSet: [{
          'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-picture--round-corners nhsd-!t-margin-bottom-2',
      },
      link: {
        href: '#',
        label: 'Monitoring cyber risk and recovery across the country',
      },
    },
    {
      picture: {
        sourceSet: [{
          'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-picture--round-corners nhsd-!t-margin-bottom-2',
      },
      link: {
        href: '#',
        label: 'Managing the world’s biggest patient data set',
      },
    },
  ],
};
Component1.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${Component1(Component1.args)}`,
    },
  },
};
