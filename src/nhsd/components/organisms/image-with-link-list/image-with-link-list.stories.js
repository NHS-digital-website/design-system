// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';

const componentName = 'Image with link list';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}

#### Use Cases
- Default use case: 2D/2T/1M arrangement / Small heading style.
- Use case 2: 3D/2T/1M arrangement / extra small heading style.
- Use case 3: 4D/2T/1M arrangement / extra small heading style.

#### Notes
- External link atom <a href="/docs/design-system-components-atoms-link--external-link">rules</a> apply for external links!
- Images in this component are for decoration only, and should be hidden from screen readers using \`aria-hidden="true"\`.
- Title is optional in this organism.
- Button nav is optional.
- Columns are always centred regardless the use case.
- Don't let the molecule width go over 50% of the grid.`;
const sourceCode = `// Sass import \n@use "nhsd/components/organisms/image-with-link-list";

// HTML`;

// Component defaults
export default {
  title: `${sbConfig.title.designSystem} / ${sbConfig.title.components} / ${sbConfig.title.organisms} / ${componentName}`,
  parameters: {
    docs: {
      description: {
        component: storyDescription,
      },
    },
  },
};

// Component template
const Template = (args) => template.render({ params: { ...args } });

export const LabComponent = Template.bind({});
LabComponent.storyName = sbConfig.title.lab;
LabComponent.args = {
  desktopColumns: 2,
  title: 'Products & services',
  blocks: [
    {
      image: {
        ariaHidden: true,
        src: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        alt: 'Abstract lights',
        classes: 'nhsd-t-round',
        ratio: 'nhsd-t-ratio-16x9 nhsd-!t-margin-bottom-2',
      },
      link: {
        href: '#',
        label: 'Simplifying patient communication with the NHS App',
      },
    },
    {
      image: {
        ariaHidden: true,
        src: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        alt: 'Abstract lights',
        classes: 'nhsd-t-round',
        ratio: 'nhsd-t-ratio-16x9 nhsd-!t-margin-bottom-2',
      },
      link: {
        href: '#',
        label: 'Simplifying patient communication with the NHS App',
      },
    },
    {
      image: {
        ariaHidden: true,
        src: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        alt: 'Abstract lights',
        classes: 'nhsd-t-round',
        ratio: 'nhsd-t-ratio-16x9 nhsd-!t-margin-bottom-2',
      },
      link: {
        href: '#',
        label: 'Monitoring cyber risk and recovery across the country',
      },
    },
    {
      image: {
        ariaHidden: true,
        src: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        alt: 'Abstract lights',
        classes: 'nhsd-t-round',
        ratio: 'nhsd-t-ratio-16x9 nhsd-!t-margin-bottom-2',
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

export const ComponentVariant1 = Template.bind({});
ComponentVariant1.storyName = 'Variant 1 (default) - 2D/2T/1M';
ComponentVariant1.args = {
  desktopColumns: 2,
  title: 'Use case 1 - 2 columns',
  blocks: [
    {
      image: {
        ariaHidden: true,
        src: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        alt: 'Abstract lights',
        classes: 'nhsd-t-round',
        ratio: 'nhsd-t-ratio-16x9 nhsd-!t-margin-bottom-2',
      },
      headingClass: 'nhsd-t-heading-s',
      link: {
        href: '#',
        label: 'Simplifying patient communication with the NHS App',
      },
    },
    {
      image: {
        ariaHidden: true,
        src: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        alt: 'Abstract lights',
        classes: 'nhsd-t-round',
        ratio: 'nhsd-t-ratio-16x9 nhsd-!t-margin-bottom-2',
      },
      link: {
        href: '#',
        label: 'Simplifying patient communication with the NHS App',
      },
    },
    {
      image: {
        ariaHidden: true,
        src: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        alt: 'Abstract lights',
        classes: 'nhsd-t-round',
        ratio: 'nhsd-t-ratio-16x9 nhsd-!t-margin-bottom-2',
      },
      link: {
        href: '#',
        label: 'Monitoring cyber risk and recovery across the country',
      },
    },
    {
      image: {
        ariaHidden: true,
        src: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        alt: 'Abstract lights',
        classes: 'nhsd-t-round',
        ratio: 'nhsd-t-ratio-16x9 nhsd-!t-margin-bottom-2',
      },
      link: {
        href: '#',
        label: 'Managing the world’s biggest patient data set',
      },
    },
  ],
};
ComponentVariant1.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ComponentVariant1(ComponentVariant1.args)}`,
    },
  },
};

export const ComponentVariant2 = Template.bind({});
ComponentVariant2.storyName = 'Variant 2 - 3D/2T/1M';
ComponentVariant2.args = {
  desktopColumns: 3,
  title: 'Use case 2 - 3 columns',
  blocks: [
    {
      image: {
        ariaHidden: true,
        src: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        alt: 'Abstract lights',
        classes: 'nhsd-t-round',
        ratio: 'nhsd-t-ratio-16x9 nhsd-!t-margin-bottom-2',
      },
      headingClass: 'nhsd-t-heading-xs',
      link: {
        href: '#',
        label: 'Simplifying patient communication with the NHS App',
      },
    },
    {
      image: {
        ariaHidden: true,
        src: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        alt: 'Abstract lights',
        classes: 'nhsd-t-round',
        ratio: 'nhsd-t-ratio-16x9 nhsd-!t-margin-bottom-2',
      },
      headingClass: 'nhsd-t-heading-xs',
      link: {
        href: '#',
        label: 'Simplifying patient communication with the NHS App',
      },
    },
    {
      image: {
        ariaHidden: true,
        src: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        alt: 'Abstract lights',
        classes: 'nhsd-t-round',
        ratio: 'nhsd-t-ratio-16x9 nhsd-!t-margin-bottom-2',
      },
      headingClass: 'nhsd-t-heading-xs',
      link: {
        href: '#',
        label: 'Monitoring cyber risk and recovery across the country',
      },
    },
  ],
};
ComponentVariant2.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ComponentVariant2(ComponentVariant2.args)}`,
    },
  },
};

export const ComponentVariant3 = Template.bind({});
ComponentVariant3.storyName = 'Variant 3 - 4D/2T/1M';
ComponentVariant3.args = {
  desktopColumns: 4,
  title: 'Use case 3 - 4 columns',
  blocks: [
    {
      image: {
        ariaHidden: true,
        src: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        alt: 'Abstract lights',
        classes: 'nhsd-t-round',
        ratio: 'nhsd-t-ratio-16x9 nhsd-!t-margin-bottom-2',
      },
      headingClass: 'nhsd-t-heading-xs',
      link: {
        href: '#',
        label: 'Simplifying patient communication with the NHS App',
      },
    },
    {
      image: {
        ariaHidden: true,
        src: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        alt: 'Abstract lights',
        classes: 'nhsd-t-round',
        ratio: 'nhsd-t-ratio-16x9 nhsd-!t-margin-bottom-2',
      },
      headingClass: 'nhsd-t-heading-xs',
      link: {
        href: '#',
        label: 'Simplifying patient communication with the NHS App',
      },
    },
    {
      image: {
        ariaHidden: true,
        src: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        alt: 'Abstract lights',
        classes: 'nhsd-t-round',
        ratio: 'nhsd-t-ratio-16x9 nhsd-!t-margin-bottom-2',
      },
      headingClass: 'nhsd-t-heading-xs',
      link: {
        href: '#',
        label: 'Monitoring cyber risk and recovery across the country',
      },
    },
    {
      image: {
        ariaHidden: true,
        src: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        alt: 'Abstract lights',
        classes: 'nhsd-t-round',
        ratio: 'nhsd-t-ratio-16x9 nhsd-!t-margin-bottom-2',
      },
      headingClass: 'nhsd-t-heading-xs',
      link: {
        href: '#',
        label: 'Managing the world’s biggest patient data set',
      },
    },
  ],
};
ComponentVariant3.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ComponentVariant3(ComponentVariant3.args)}`,
    },
  },
};

export const ComponentVariant4 = Template.bind({});
ComponentVariant4.storyName = 'With button nav';
ComponentVariant4.args = {
  desktopColumns: 2,
  title: 'With button nav',
  blocks: [
    {
      image: {
        ariaHidden: true,
        src: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        alt: 'Abstract lights',
        classes: 'nhsd-t-round',
        ratio: 'nhsd-t-ratio-16x9 nhsd-!t-margin-bottom-2',
      },
      link: {
        href: '#',
        label: 'Simplifying patient communication with the NHS App',
      },
    },
    {
      image: {
        ariaHidden: true,
        src: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        alt: 'Abstract lights',
        classes: 'nhsd-t-round',
        ratio: 'nhsd-t-ratio-16x9 nhsd-!t-margin-bottom-2',
      },
      link: {
        href: '#',
        label: 'Simplifying patient communication with the NHS App',
      },
    },
  ],
  buttonNav: {
    buttons: [
      {
        el: 'a',
        label: 'View all news',
        href: '#',
      }, {
        classes: 'nhsd-a-button--outline',
        el: 'a',
        label: 'View all events',
        href: '#',
      },
    ],
  },
};
ComponentVariant4.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ComponentVariant4(ComponentVariant4.args)}`,
    },
  },
};
