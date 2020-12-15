// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config.js';

// Load template file
import template from  '../../organisms/picture-with-link-list/template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Picture with link list';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}

#### Use Cases
- Default use case: 2D/2T/1M arrangement / Small heading style.
- Use case 2: 3D/2T/1M arrangement / extra small heading style.
- Use case 3: 4D/2T/1M arrangement / extra small heading style.

#### Notes
- Title is optional in this organism.
- Columns are always centred regardless the use case.
- Don't let the molecule width go over 50% of the grid.`;
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

export const LabComponent = Template.bind({});
LabComponent.storyName = sbConfig.title.lab;
LabComponent.args = {
  desktopColumns: 2,
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
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};


export const Component1 = Template.bind({});
Component1.storyName = `Variant 1 (default) - 2D/2T/1M`;
Component1.args = {
  desktopColumns: 2,
  title: 'Use case 1 - 2 columns',
  blocks: [
    {
      picture: {
        sourceSet: [{
          'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-picture--round-corners nhsd-!t-margin-bottom-2',
      },
      headingClass: 'nhsd-t-heading-s',
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

export const Component2 = Template.bind({});
Component2.storyName = `Variant 2 - 3D/2T/1M`;
Component2.args = {
  desktopColumns: 3,
  title: 'Use case 2 - 3 columns',
  blocks: [
    {
      picture: {
        sourceSet: [{
          'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-picture--round-corners nhsd-!t-margin-bottom-2',
      },
      headingClass: 'nhsd-t-heading-xs',
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
      headingClass: 'nhsd-t-heading-xs',
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
      headingClass: 'nhsd-t-heading-xs',
      link: {
        href: '#',
        label: 'Monitoring cyber risk and recovery across the country',
      },
    },
  ],
};
Component2.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${Component2(Component2.args)}`,
    },
  },
};

export const Component3 = Template.bind({});
Component3.storyName = `Variant 3 - 4D/2T/1M`;
Component3.args = {
  desktopColumns: 4,
  title: 'Use case 3 - 4 columns',
  blocks: [
    {
      picture: {
        sourceSet: [{
          'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-picture--round-corners nhsd-!t-margin-bottom-2',
      },
      headingClass: 'nhsd-t-heading-xs',
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
      headingClass: 'nhsd-t-heading-xs',
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
      headingClass: 'nhsd-t-heading-xs',
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
      headingClass: 'nhsd-t-heading-xs',
      link: {
        href: '#',
        label: 'Managing the world’s biggest patient data set',
      },
    },
  ],
};
Component3.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${Component3(Component3.args)}`,
    },
  },
};
