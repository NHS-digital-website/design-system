// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config.js';

// Load template file
import template from  './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Figure';
const storyDescription = `${sbConfig.heading.lab}
${sbConfig.heading.basicRules}
  - Image aspect ratios: 16:9 or 1:1.
  - Border radius: 6px (0.333rem).
  - Figure corner variations:
    - Every corner is rounded.
    - Top corners are rounded.
    - No corners are rounded.
  - The \`<picture>\` element displaying the image can optionally use multiple source sets - use different image sources for different breakpoints if you want.
  - Image element proportionally scales inside the picture element from the centre.
  - Must have at least 1 image source and an alt text to be valid.
  - Must have img element to be valid.
  - If caption is set on a picutre, \`<figcaption>\` element displays it for good semantics.
  - If figure is decorative only, and should be hidden from screen readers, **aria-hidden** must be added to either the \`<figure>\` element (if figure has caption), or the \`<picture>\` element itself.`;
const sourceCode = `// Sass import \n@use "nhsd/components/atoms/figure";

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
  classes: 'nhsd-a-figure--round-top-corners',
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
  classes: 'nhsd-a-figure--round-corners',
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
  classes: 'nhsd-a-figure--square',
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
ResponsiveComponent.storyName = 'Responsive image (multiple image sources)';
ResponsiveComponent.args = {
  classes: 'nhsd-a-figure--round-top-corners',
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

export const FigureWithCaption = Template.bind({});
FigureWithCaption.storyName = 'Image caption';
FigureWithCaption.args = {
  caption: 'Hello world, I am a caption!',
  sourceSet: [{
    'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_992x661.jpg',
  }],
  alt: '2 scientists testing in a laboratory',
};
FigureWithCaption.parameters = {
  docs: {
    source: {
      code: `${sourceCode}${FigureWithCaption(FigureWithCaption.args)}`,
    },
  },
};

export const FigureAriaHidden = Template.bind({});
FigureAriaHidden.storyName = 'ARIA hidden';
FigureAriaHidden.args = {
  ariaHidden: true,
  sourceSet: [{
    'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_992x661.jpg',
  }],
  alt: '2 scientists testing in a laboratory',
};
FigureAriaHidden.parameters = {
  docs: {
    source: {
      code: `${sourceCode}${FigureAriaHidden(FigureAriaHidden.args)}`,
    },
  },
};

export const FigureWithCaptionAriaHidden = Template.bind({});
FigureWithCaptionAriaHidden.storyName = 'Image caption & ARIA hidden';
FigureWithCaptionAriaHidden.args = {
  ariaHidden: true,
  caption: 'Hello world, I am a caption!',
  sourceSet: [{
    'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_992x661.jpg',
  }],
  alt: '2 scientists testing in a laboratory',
};
FigureWithCaptionAriaHidden.parameters = {
  docs: {
    source: {
      code: `${sourceCode}${FigureWithCaptionAriaHidden(FigureWithCaptionAriaHidden.args)}`,
    },
  },
};
