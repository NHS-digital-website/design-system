// import testing from '../../../assets/images/testing.jpg';

// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';

// Load stylesheet file
require('./_index.scss');

const componentName = 'Banner';
const storyDescription = `${sbConfig.heading.lab}

### Components used
- <a href="/docs/design-system-components-atoms-button--lab-component">Button atom</a>
- <a href="/docs/design-system-components-molecules-button-nav--lab-component">Button Nav molecule</a>

### Tokens used
- Spacing
- Colour
- Typography
- Utils

${sbConfig.heading.basicRules}:

- The banner component is a banner which is intended to be used in document content. 
  - For header banners see the <a href="/docs/design-system-components-organisms-hero--lab-component">hero component</a>
  - Banners turn into cards at mobile viewports`;
const sourceCode = `// Sass import \n@use "nhsd/components/organisms/banner";

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
LabComponent.storyName = 'Lab';
LabComponent.args = {
  featured: true,
  title: {
    label: 'Coronavirus (COVID-19)',
    classes: 'nhsd-t-heading-l',
  },
  text: {
    label: 'At NHS Digital we’re helping the NHS frontline face the challenges of the coronavirus (COVID-19) outbreak with systems, services and data. From prioritising patients to protecting the most vulnerable.',
    classes: 'nhsd-t-body nhsd-!t-margin-bottom-6',
  },
  button: {
    el: 'a',
    label: 'How we\'re supporting the response',
    href: '#',
    classes: 'nhsd-!t-margin-bottom-0',
  },
  image: {
    ariaHidden: true,
    sourceSet: [{
      url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
    }],
    alt: 'Abstract lights',
    classes: 'nhsd-a-image--cover',
  },
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};

export const Featured = Template.bind({});
Featured.storyName = 'Image banner';
Featured.args = { ...LabComponent.args };
Featured.parameters = { ...LabComponent.parameters };

export const FeaturedMirrored = Template.bind({});
FeaturedMirrored.storyName = 'Image Banner (Mirrored)';
FeaturedMirrored.args = {
  mirrored: true,
  bgColourKey: 'yellow-10-tint',
  title: {
    label: 'Coronavirus (COVID-19) Professionally administrate functional catalysts for change through multifunctional content. Efficiently actualize multidisciplinary materials with high standards.',
    classes: 'nhsd-t-heading-l',
  },
  text: {
    label: 'At NHS Digital we’re helping the NHS frontline face the challenges of the coronavirus (COVID-19) outbreak with systems, services and data. From prioritising patients to protecting the most vulnerable. Seamlessly scale impactful e-tailers after innovative supply chains. Compellingly integrate cross-media core competencies without low-risk high-yield outsourcing. Rapidiously drive robust alignments without resource-leveling meta-services. Energistically morph premium methodologies.',
    classes: 'nhsd-t-body nhsd-!t-margin-bottom-6',
  },
  button: {
    el: 'a',
    label: 'How we\'re supporting the response',
    href: '#',
    classes: 'nhsd-!t-margin-bottom-0',
  },
  image: {
    ariaHidden: true,
    sourceSet: [{
      url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
    }],
    alt: 'Abstract lights',
    classes: 'nhsd-a-image--cover',
  },
};
FeaturedMirrored.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${FeaturedMirrored(FeaturedMirrored.args)}`,
    },
  },
};

export const FeaturedWithVideo = Template.bind({});
FeaturedWithVideo.storyName = 'Video Banner';
FeaturedWithVideo.args = {
  featured: true,
  title: {
    label: 'What is NHS Digital?',
    classes: 'nhsd-t-heading-l',
  },
  text: {
    label: 'We deliver world-class technology and data intelligence for the NHS, supporting healthcare professionals  and empowering patients. At NHS Digital we’re helping the NHS frontline face the challenges of the coronavirus (COVID-19) outbreak with systems, services and data. From prioritising patients to protecting the most vulnerable.',
    classes: 'nhsd-t-body nhsd-!t-margin-bottom-0',
  },
  video: 'https://www.youtube.com/embed/PRVd30lUeAw',
};
FeaturedWithVideo.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${FeaturedWithVideo(FeaturedWithVideo.args)}`,
    },
  },
};
