/* global document */

// Load storybook config
import * as sbConfig from '../../../.storybook/storybook-config';

const storyDescription = `${sbConfig.heading.default}

${sbConfig.heading.details}:
The round token can be used to apply NHSD's default border radius to HTML elements.

| Token  | Behaviour |
| ------------- | ------------- |
| \`nhsd-t-round\`  | Rounds all corners |
| \`nhsd-t-round-top\` | Rounds top corners |
| \`nhsd-t-round-bottom\` | Rounds bottom corners |
`;
const sourceCode = '// Sass import \n@use "nhsd/scss-core/tokens/round";\n\n//HTML';

// Component defaults
export default {
  title: `${sbConfig.title.designSystem} / ${sbConfig.title.tokens} / ${sbConfig.title.round}`,
  parameters: {
    docs: {
      description: {
        component: storyDescription,
      },
    },
  },
};

export const RoundImage = () => {
  const div = document.createElement('div');
  div.innerHTML = '<img class="nhsd-a-image nhsd-t-round" src="https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_992x661.jpg" alt="2 scientists testing in a laboratory">';
  return div;
};
RoundImage.storyName = `${sbConfig.title.defaultStory}`;
RoundImage.parameters = {
  docs: {
    description: {
      story: '`nhsd-t-round` token applied to an image',
    },
    source: {
      code: `${sourceCode}\n${RoundImage().innerHTML}`,
    },
  },
};

export const RoundTopImage = () => {
  const div = document.createElement('div');
  div.innerHTML = '<img class="nhsd-a-image nhsd-t-round-top" src="https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_992x661.jpg" alt="2 scientists testing in a laboratory">';
  return div;
};
RoundTopImage.storyName = 'Round top';
RoundTopImage.parameters = {
  docs: {
    description: {
      story: '`nhsd-t-round-top` token applied to an image',
    },
    source: {
      code: `${sourceCode}\n${RoundTopImage().innerHTML}`,
    },
  },
};
