// prettify html
import pretty from 'pretty';

// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';

require('./_example.scss');

const componentName = 'Image';
const storyDescription = `${sbConfig.heading.lab}
The \`nhsd-a-image\` token can be applied either directly to the \`<img>\` element or to the \`<picture>\` element if multiple image sources are used.
`;
const sourceCode = `// Sass import \n@use "nhsd/components/atoms/image";

// HTML
`;

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
  src: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_992x661.jpg',
  alt: '2 scientists testing in a laboratory',
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}${pretty(LabComponent(LabComponent.args), { ocd: true })}`,
    },
  },
};

export const RoundTopCornersComponent = Template.bind({});
RoundTopCornersComponent.storyName = 'Round top corners';
RoundTopCornersComponent.args = {
  classes: 'nhsd-t-round-top',
  src: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_992x661.jpg',
  alt: '2 scientists testing in a laboratory',
};
RoundTopCornersComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}${pretty(RoundTopCornersComponent(RoundTopCornersComponent.args), { ocd: true })}`,
    },
  },
};

export const RoundCornersComponent = Template.bind({});
RoundCornersComponent.storyName = 'Round corners';
RoundCornersComponent.args = {
  classes: 'nhsd-t-round',
  src: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_992x661.jpg',
  alt: '2 scientists testing in a laboratory',
};
RoundCornersComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}${pretty(RoundCornersComponent(RoundCornersComponent.args), { ocd: true })}`,
    },
  },
};

export const SquareComponent = Template.bind({});
SquareComponent.storyName = '1:1 aspect ratio';
SquareComponent.args = {
  ratio: 'nhsd-t-ratio-1x1',
  src: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_992x661.jpg',
  alt: '2 scientists testing in a laboratory',
};
SquareComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}${pretty(SquareComponent(SquareComponent.args), { ocd: true })}`,
    },
  },
};

export const ResponsiveComponent = Template.bind({});
ResponsiveComponent.storyName = 'Multiple image sources';
ResponsiveComponent.args = {
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
      code: `${sourceCode}${pretty(ResponsiveComponent(ResponsiveComponent.args), { ocd: true })}`,
    },
  },
};

export const WithCaption = Template.bind({});
WithCaption.storyName = 'Image caption';
WithCaption.args = {
  caption: 'Hello world, I am a caption!',
  src: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_992x661.jpg',
  alt: '2 scientists testing in a laboratory',
};
WithCaption.parameters = {
  docs: {
    source: {
      code: `${sourceCode}${pretty(WithCaption(WithCaption.args), { ocd: true })}`,
    },
  },
};

export const BackgroundImageComponent = Template.bind({});
BackgroundImageComponent.storyName = 'Cover image';
BackgroundImageComponent.args = {
  classes: 'nhsd-a-image--cover',
  src: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_992x661.jpg',
  alt: '2 scientists testing in a laboratory',
  exampleContainer: true,
};
BackgroundImageComponent.parameters = {
  docs: {
    source: {
      description: {
        story: 'The variant `.nhsd-a-image--cover` can be applied when an image needs to fill the entirity of its parent container.',
      },
      code: `${sourceCode}${pretty(BackgroundImageComponent(BackgroundImageComponent.args), { ocd: true })}`,
    },
  },
};

export const BackgroundImageLeftAlignComponent = Template.bind({});
BackgroundImageLeftAlignComponent.storyName = 'Cover image (left positioned)';
BackgroundImageLeftAlignComponent.args = {
  classes: 'nhsd-a-image--cover nhsd-a-image--position-left',
  src: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_992x661.jpg',
  alt: '2 scientists testing in a laboratory',
  exampleContainer: true,
};
BackgroundImageLeftAlignComponent.parameters = {
  docs: {
    description: {
      story: 'The variants, `.nhsd-a-image--position-left`, `.nhsd-a-image--position-right`, `.nhsd-a-image--position-top` & `.nhsd-a-image--position-bottom` can be applied in conjunction with `.nhsd-a-image--cover` to adjust the position of the image inside the container.',
    },
    source: {
      code: `${sourceCode}${pretty(BackgroundImageLeftAlignComponent(BackgroundImageLeftAlignComponent.args), { ocd: true })}`,
    },
  },
};

export const disableScaling = Template.bind({});
disableScaling.storyName = 'Disable scaling';
disableScaling.args = {
  classes: 'nhsd-a-image--no-scale',
  src: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_992x661.jpg',
  alt: '2 scientists testing in a laboratory',
};
disableScaling.parameters = {
  docs: {
    description: {
      story: 'By default the image atom will scale to fit the container it\'s placed in. To disable this behaviour the variant `.nhsd-a-image--no-scale` can be applied.',
    },
    source: {
      code: `${sourceCode}${pretty(disableScaling(disableScaling.args), { ocd: true })}`,
    },
  },
};
