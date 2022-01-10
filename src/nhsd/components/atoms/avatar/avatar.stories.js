// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Author image
import authorImage from '../../../assets/images/author-image.jpg';

// Load template file
import template from './template.njk';

const componentName = 'Avatar';
const storyDescription = `${sbConfig.heading.default}`;
const sourceCode = `// Sass import \n@use "nhsd/components/atoms/avatar";

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
    argTypes: {},
  },
};

// Component template
const Template = (args) => template.render({ params: { ...args } });

export const LabComponent = Template.bind({});
LabComponent.storyName = sbConfig.title.defaultStory;
LabComponent.args = {
  image: {
    ariaHidden: true,
    src: authorImage,
    alt: 'Jason Hodge',
    classes: 'nhsd-a-image--cover',
  },
  fullName: 'Jason Hodge',
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};

export const SmallStory = Template.bind({});
SmallStory.storyName = 'Small';
SmallStory.args = {
  image: {
    ariaHidden: true,
    src: authorImage,
    alt: 'Jason Hodge',
    classes: 'nhsd-a-image--cover',
  },
  fullName: 'Jason Hodge',
  classes: 'nhsd-a-avatar--small',
};
SmallStory.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${SmallStory(SmallStory.args)}`,
    },
  },
};

export const LargeStory = Template.bind({});
LargeStory.storyName = 'Large';
LargeStory.args = {
  image: {
    ariaHidden: true,
    src: authorImage,
    alt: 'Jason Hodge',
    classes: 'nhsd-a-image--cover',
  },
  fullName: 'Jason Hodge',
  classes: 'nhsd-a-avatar--large',
};
LargeStory.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LargeStory(LargeStory.args)}`,
    },
  },
};

export const InitialsAvatar = Template.bind({});
InitialsAvatar.storyName = 'Initials';
InitialsAvatar.args = {
  initials: 'JH',
  fullName: 'Jason Hodge',
  classes: 'nhsd-a-avatar--initials',
};
InitialsAvatar.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${InitialsAvatar(InitialsAvatar.args)}`,
    },
  },
};
