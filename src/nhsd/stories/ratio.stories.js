/* global document */

// Load storybook config
import * as sbConfig from '../../../.storybook/storybook-config';

const storyDescription = `${sbConfig.heading.default}

${sbConfig.heading.details}:
The ratio token can be used to enforce an aspect ratio on HTML elements. This can useful when styling images and other content.
`;
const sourceCode = '// Sass import \n@use "nhsd/scss-core/tokens/ratio";\n\n//HTML';

// Component defaults
export default {
  title: `${sbConfig.title.designSystem} / ${sbConfig.title.tokens} / ${sbConfig.title.ratio}`,
  parameters: {
    docs: {
      description: {
        component: storyDescription,
      },
    },
  },
};

export const VideoEmbed = () => {
  const div = document.createElement('div');
  div.innerHTML = `<div class="nhsd-t-ratio-16x9">
  <iframe src="https://www.youtube.com/embed/PRVd30lUeAw" title="YouTube video" allowfullscreen></iframe>
</div>`;
  return div;
};
VideoEmbed.storyName = `${sbConfig.title.defaultStory}`;
VideoEmbed.parameters = {
  docs: {
    description: {
      story: '`nhsd-t-ratio-16x9` ratio token applied to an iframe featuring a YouTube video.',
    },
    source: {
      code: `${sourceCode}\n${VideoEmbed().innerHTML}`,
    },
  },
};

export const ImageEmbed = () => {
  const div = document.createElement('div');
  div.innerHTML = `<div class="nhsd-t-ratio-4x3">
    <img class="nhsd-a-image" src="https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_992x661.jpg" alt="2 scientists testing in a laboratory">
  </div>`;
  return div;
};
ImageEmbed.storyName = 'Image';
ImageEmbed.parameters = {
  docs: {
    description: {
      story: '`nhsd-t-ratio-4x3` ratio token applied to an iframe featuring a YouTube video.',
    },
    source: {
      code: `${sourceCode}\n${ImageEmbed().innerHTML}`,
    },
  },
};
