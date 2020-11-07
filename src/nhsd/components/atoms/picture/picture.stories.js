// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config.js';

// Load template file
import template from  './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Picture';
const storyDescription = `${sbConfig.heading.lab}`;
const sourceCode = `// Sass import \n@use "nhsd/components/atoms/picture";

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
    notes: `## Basic rules:
  - Image aspect ratios: 16:9 or 1:1
  - Border radius: 6px (0.333rem)
  - Picture corner variations:
    - Every corner is rounded
    - Top corners are rounded
    - No corners are rounded
  - Picture element (optionally) using multiple source sets - different image for different breakpoints
  - Image element proportionally scales inside the Picture element from the centre
  - Must have at least 1 image source and an alt text to be valid
  - Must have img element to be valid`,
  },
};

// Component template
const Template = (args) => {
  return template.render({ params: {...args} });
};

export const LabComponent = Template.bind({});
LabComponent.storyName = sbConfig.title.lab;
LabComponent.args = {
  sourceSet: [{
    'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_992x661.jpg',
  }],
  alt: '2 scientists testing in a laboratory',
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}${LabComponent(LabComponent.args)}`,
    },
  },
};

export const RoundTopCornersComponent = Template.bind({});
RoundTopCornersComponent.storyName = 'Round top corners';
RoundTopCornersComponent.args = {
  classes: 'nhsd-a-picture--round-top-corners',
  sourceSet: [{
    'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_992x661.jpg',
  }],
  alt: '2 scientists testing in a laboratory',
};
RoundTopCornersComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}${RoundTopCornersComponent(RoundTopCornersComponent.args)}`,
    },
  },
};

export const RoundCornersComponent = Template.bind({});
RoundCornersComponent.storyName = 'Round corners';
RoundCornersComponent.args = {
  classes: 'nhsd-a-picture--round-corners',
  sourceSet: [{
    'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_992x661.jpg',
  }],
  alt: '2 scientists testing in a laboratory',
};
RoundCornersComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}${RoundCornersComponent(RoundCornersComponent.args)}`,
    },
  },
};

export const SquareComponent = Template.bind({});
SquareComponent.storyName = '1:1 image ratio';
SquareComponent.args = {
  classes: 'nhsd-a-picture--square',
  sourceSet: [{
    'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_992x661.jpg',
  }],
  alt: '2 scientists testing in a laboratory',
};
SquareComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}${SquareComponent(SquareComponent.args)}`,
    },
  },
};

export const ResponsiveComponent = Template.bind({});
ResponsiveComponent.storyName = 'Responsive picture (multiple image sources)';
ResponsiveComponent.args = {
  classes: 'nhsd-a-picture--round-top-corners',
  sourceSet: [{
    'media': '(max-width: 500px)',
    'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_489x326.jpg',
  }, {
    'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_992x661.jpg',
  }],
  alt: '2 scientists testing in a laboratory',
};
ResponsiveComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}${ResponsiveComponent(ResponsiveComponent.args)}`,
    },
  },
};
