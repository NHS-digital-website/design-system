// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');
require('./_example.scss');

const componentName = 'Image';
const storyDescription = `${sbConfig.heading.lab}
${sbConfig.heading.basicRules}
  - Image aspect ratios: 16:9 or 1:1.
  - Border radius: 6px (0.333rem).
  - Image corner variations:
    - Every corner is rounded.
    - Top corners are rounded.
    - No corners are rounded.
  - The \`<picture>\` element displaying the image can optionally use multiple source sets - use different image sources for different breakpoints if you want.
  - Picture element proportionally scales inside the picture element from the centre.
  - Must have at least 1 image source and an alt text to be valid.
  - Must have img element to be valid.
  - If caption is set on a picutre, \`<figcaption>\` element displays it for good semantics.
  - If the image is decorative only, and should be hidden from screen readers, **aria-hidden** must be added to either the \`<figure>\` element (if image has caption), or the \`<picture>\` element itself.`;
const sourceCode = `// Sass import \n@use "nhsd/components/atoms/image";

// HTML`;

// Component defaults
export default {
  title: `${sbConfig.title.designSystem} / ${sbConfig.title.components} / ${sbConfig.title.atoms} / ${componentName}`,
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
  sourceSet: [{
    url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_992x661.jpg',
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
  classes: 'nhsd-a-image--round-top-corners',
  sourceSet: [{
    url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_992x661.jpg',
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
  classes: 'nhsd-a-image--round-corners',
  sourceSet: [{
    url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_992x661.jpg',
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
SquareComponent.storyName = '1:1 aspect ratio';
SquareComponent.args = {
  classes: 'nhsd-a-image--square',
  sourceSet: [{
    url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_992x661.jpg',
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

export const FourByThree = Template.bind({});
FourByThree.storyName = '4:3 aspect ratio';
FourByThree.args = {
  classes: 'nhsd-a-image--4by3',
  sourceSet: [{
    url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_992x661.jpg',
  }],
  alt: '2 scientists testing in a laboratory',
};
FourByThree.parameters = {
  docs: {
    source: {
      code: `${sourceCode}${FourByThree(FourByThree.args)}`,
    },
  },
};

export const MaintainRatio = Template.bind({});
MaintainRatio.storyName = 'Maintain aspect ratio';
MaintainRatio.args = {
  classes: 'nhsd-a-image--maintain-ratio',
  sourceSet: [{
    url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_992x661.jpg',
  }],
  alt: '2 scientists testing in a laboratory',
};
MaintainRatio.parameters = {
  docs: {
    source: {
      code: `${sourceCode}${MaintainRatio(MaintainRatio.args)}`,
    },
  },
};

export const ResponsiveComponent = Template.bind({});
ResponsiveComponent.storyName = 'Responsive image (multiple image sources)';
ResponsiveComponent.args = {
  classes: 'nhsd-a-image--round-top-corners',
  sourceSet: [{
    media: '(max-width: 500px)',
    url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_489x326.jpg',
  }, {
    url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_992x661.jpg',
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

export const WithCaption = Template.bind({});
WithCaption.storyName = 'Image caption';
WithCaption.args = {
  caption: 'Hello world, I am a caption!',
  sourceSet: [{
    url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_992x661.jpg',
  }],
  alt: '2 scientists testing in a laboratory',
};
WithCaption.parameters = {
  docs: {
    source: {
      code: `${sourceCode}${WithCaption(WithCaption.args)}`,
    },
  },
};

export const AriaHidden = Template.bind({});
AriaHidden.storyName = 'ARIA hidden';
AriaHidden.args = {
  ariaHidden: true,
  sourceSet: [{
    url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_992x661.jpg',
  }],
  alt: '2 scientists testing in a laboratory',
};
AriaHidden.parameters = {
  docs: {
    source: {
      code: `${sourceCode}${AriaHidden(AriaHidden.args)}`,
    },
  },
};

export const WithCaptionAriaHidden = Template.bind({});
WithCaptionAriaHidden.storyName = 'Image caption & ARIA hidden';
WithCaptionAriaHidden.args = {
  ariaHidden: true,
  caption: 'Hello world, I am a caption!',
  sourceSet: [{
    url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_992x661.jpg',
  }],
  alt: '2 scientists testing in a laboratory',
};
WithCaptionAriaHidden.parameters = {
  docs: {
    source: {
      code: `${sourceCode}${WithCaptionAriaHidden(WithCaptionAriaHidden.args)}`,
    },
  },
};

export const BackgroundImageComponent = Template.bind({});
BackgroundImageComponent.storyName = 'Cover image';
BackgroundImageComponent.args = {
  classes: 'nhsd-a-image--cover',
  sourceSet: [{
    url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_992x661.jpg',
  }],
  alt: '2 scientists testing in a laboratory',
  exampleContainer: true,
};
BackgroundImageComponent.parameters = {
  docs: {
    source: {
      description: {
        story: 'The variant `.nhsd-a-image--cover` can be applied when an image needs to fill the entirity of its parent container.',
      },
      code: `${sourceCode}${BackgroundImageComponent(BackgroundImageComponent.args)}`,
    },
  },
};

export const BackgroundImageLeftAlignComponent = Template.bind({});
BackgroundImageLeftAlignComponent.storyName = 'Cover image (left positioned)';
BackgroundImageLeftAlignComponent.args = {
  classes: 'nhsd-a-image--cover nhsd-a-image--position-left',
  sourceSet: [{
    url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_992x661.jpg',
  }],
  alt: '2 scientists testing in a laboratory',
  exampleContainer: true,
};
BackgroundImageLeftAlignComponent.parameters = {
  docs: {
    description: {
      story: 'The variants, `.nhsd-a-image--position-left`, `.nhsd-a-image--position-right`, `.nhsd-a-image--position-top` & `.nhsd-a-image--position-bottom` can be applied in conjunction with `.nhsd-a-image--cover` to adjust the position of the image inside the container.',
    },
    source: {
      code: `${sourceCode}${BackgroundImageLeftAlignComponent(BackgroundImageLeftAlignComponent.args)}`,
    },
  },
};

export const disableScaling = Template.bind({});
disableScaling.storyName = 'Disable scaling';
disableScaling.args = {
  classes: 'nhsd-a-image--no-scale',
  sourceSet: [{
    url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_992x661.jpg',
  }],
  alt: '2 scientists testing in a laboratory',
};
disableScaling.parameters = {
  docs: {
    description: {
      story: 'By default the image atom will scale to fit the container it\'s placed in. To disable this behaviour the variant `.nhsd-a-image--no-scale` can be applied.',
    },
    source: {
      code: `${sourceCode}${disableScaling(disableScaling.args)}`,
    },
  },
};
