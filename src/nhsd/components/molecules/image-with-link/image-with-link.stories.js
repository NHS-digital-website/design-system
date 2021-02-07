// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Image with link';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}

- External link atom <a href="/docs/design-system-components-atoms-link--external-link">rules</a> apply for external links!
- Pictures in this component are for decoration only, and should be hidden from screen readers using \`aria-hidden="true"\`.
- Link atom is intentionally wrapped in a \`<div>\` element with heading styling, as we don't need semantic headings.
- The molecule works well with extra small and small headings - depending on column arrangements (see organism for [examples](/docs/design-system-components-organisms-image-with-link-list--lab-component)).
- The link can be internal or external - same rule applies as for default links (external link is announced to screen readers)`;
const sourceCode = `// Sass import \n@use "nhsd/components/molecules/image-with-link";

// HTML`;

// Component defaults
export default {
  title: `${sbConfig.title.designSystem} / ${sbConfig.title.components} / ${sbConfig.title.molecules} / ${componentName}`,
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
  image: {
    ariaHidden: true,
    sourceSet: [{
      url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
    }],
    alt: 'Abstract lights',
    classes: 'nhsd-a-image--round-corners nhsd-!t-margin-bottom-2',
  },
  link: {
    href: '#',
    label: 'Simplifying patient communication with the NHS App',
  },
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};

export const ComponentVariant1 = Template.bind({});
ComponentVariant1.storyName = 'Internal link';
ComponentVariant1.args = {
  image: {
    ariaHidden: true,
    sourceSet: [{
      url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
    }],
    alt: 'Abstract lights',
    classes: 'nhsd-a-image--round-corners nhsd-!t-margin-bottom-2',
  },
  link: {
    href: '#',
    label: 'Simplifying patient communication with the NHS App',
  },
};
ComponentVariant1.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ComponentVariant1(ComponentVariant1.args)}`,
    },
  },
};

export const ComponentVariant2 = Template.bind({});
ComponentVariant2.storyName = 'External link';
ComponentVariant2.args = {
  image: {
    ariaHidden: true,
    sourceSet: [{
      url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
    }],
    alt: 'Abstract lights',
    classes: 'nhsd-a-image--round-corners nhsd-!t-margin-bottom-2',
  },
  link: {
    href: 'https://valtech.com',
    external: true,
    label: 'Simplifying patient communication with the NHS App',
  },
};
ComponentVariant2.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ComponentVariant2(ComponentVariant2.args)}`,
    },
  },
};
