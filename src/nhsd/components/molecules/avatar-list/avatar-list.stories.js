// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Author image
import authorImage from '../../../assets/images/author-image.jpg';
import authorImage2 from '../../../assets/images/author-image2.jpg';
import authorImage3 from '../../../assets/images/author-image3.jpg';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Avatar List';
const storyDescription = `${sbConfig.heading.default}`;
const sourceCode = `// Sass import \n@use "nhsd/components/molecules/avatar-lisr";

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
    argTypes: {},
  },
};

// Component template
const Template = (args) => template.render({ params: { ...args } });

export const LabComponent = Template.bind({});
LabComponent.storyName = sbConfig.title.defaultStory;
LabComponent.args = {
  avatars: [{
    image: {
      ariaHidden: true,
      sourceSet: [{
        url: authorImage,
      }],
      title: 'Jason Hodge',
      alt: 'Jason Hodge',
      classes: 'nhsd-a-image--cover',
    },
    href: '#',
  }, {
    image: {
      ariaHidden: true,
      sourceSet: [{
        url: authorImage2,
      }],
      title: 'Simon Bolton',
      alt: 'Simon Bolton',
      classes: 'nhsd-a-image--cover',
    },
    href: '#',
  }, {
    image: {
      ariaHidden: true,
      sourceSet: [{
        url: authorImage3,
      }],
      title: 'Dr Peter Short',
      alt: 'Dr Peter Short',
      classes: 'nhsd-a-image--cover',
    },
    href: '#',
  }, {
    classes: 'nhsd-a-avatar--initials',
    initials: 'PS',
    fullName: 'Dr Peter Short',
    href: '#',
  }],
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};
