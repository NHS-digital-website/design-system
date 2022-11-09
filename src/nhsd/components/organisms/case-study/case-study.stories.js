// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';

import fibreImage from '../../../assets/images/fibre.jpg';

const componentName = 'Case study';
const storyDescription = `${sbConfig.heading.default}

The case study component supports different image aspect ratios via the ratio token.

For the desktop image aspect ratio the desire ratio token should be applied to the \`.nhsd-o-case-study__picture-skeleton\` element.

For the mobile image aspect ratio the desire ratio token should be applied to the \`.nhsd-o-case-study__image-container\` element.`;
const sourceCode = `// Sass import \n@use "nhsd/components/organisms/case-study";

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

export const DefaultComponent = Template.bind({});
DefaultComponent.args = {
  label: 'Case Study',
  title: 'NHS Digital Academy (COVID-19 Response) - and a few more lines of title',
  text: 'NHS Digital graduate scheme recruit Alicia Bailey is working in our Digital Delivery Centre on the systems that allow members of the public to set preferences about the use of their data for research and planning. NHS Digital graduate scheme recruit Alicia Bailey is working in our Digital Delivery Centre on the systems that allow members of the public to set preferences about the use of their data for research and planning. NHS Digital graduate scheme recruit Alicia Bailey is working in our Digital Delivery Centre on the systems that allow members of the public to set preferences about the use of their data for research and planning. NHS Digital graduate scheme recruit Alicia Bailey is working in our Digital Delivery Centre on the systems that allow members of the public to set preferences about the use of their data for research and planning.',
  button: {
    el: 'a',
    label: 'NHS Digital careers',
    classes: 'nhsd-!t-margin-top-2 nhsd-!t-margin-bottom-0',
  },
  image: {
    src: fibreImage,
    alt: 'Abstract lights',
    classes: 'nhsd-a-image--cover',
  },
};
DefaultComponent.storyName = 'Default';
DefaultComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${DefaultComponent(DefaultComponent.args)}`,
    },
  },
};

export const MirroredComponent = Template.bind({});
MirroredComponent.storyName = 'Mirrored';
MirroredComponent.args = {
  classes: 'nhsd-o-case-study--mirrored',
  label: 'Case Study',
  title: 'NHS Digital Academy (COVID-19 Response) - and a few more lines of title',
  text: 'NHS Digital graduate scheme recruit Alicia Bailey is working in our Digital Delivery Centre on the systems that allow members of the public to set preferences about the use of their data for research and planning. NHS Digital graduate scheme recruit Alicia Bailey is working in our Digital Delivery Centre on the systems that allow members of the public to set preferences about the use of their data for research and planning. NHS Digital graduate scheme recruit Alicia Bailey is working in our Digital Delivery Centre on the systems that allow members of the public to set preferences about the use of their data for research and planning. NHS Digital graduate scheme recruit Alicia Bailey is working in our Digital Delivery Centre on the systems that allow members of the public to set preferences about the use of their data for research and planning.',
  button: {
    el: 'a',
    label: 'NHS Digital careers',
    classes: 'nhsd-!t-margin-top-2 nhsd-!t-margin-bottom-0',
  },
  image: {
    src: fibreImage,
    alt: 'Abstract lights',
    classes: 'nhsd-a-image--cover',
  },
};
MirroredComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${MirroredComponent(MirroredComponent.args)}`,
    },
  },
};
