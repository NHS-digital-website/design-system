// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Author image
import authorImage from '../../../assets/images/author-image.jpg';

// Load template file
import template from './template.njk';

const componentName = 'Author';
const storyDescription = `${sbConfig.heading.default}`;
const sourceCode = `// Sass import \n@use "nhsd/components/molecules/author";

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
  avatar: {
    image: {
      ariaHidden: true,
      src: authorImage,
      alt: 'Jason Hodge',
      classes: 'nhsd-a-image--cover',
    },
  },
  header: '<a href="#" class="nhsd-a-link">Jason Hodge</a>',
  role: '<p class="nhsd-t-body nhsd-!t-margin-top-2 nhsd-!t-margin-0 nhsd-!t-col-black">Role or job description, NHS Digital</p>',
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};

export const WithSummary = Template.bind({});
WithSummary.storyName = 'With bio';
WithSummary.args = {
  avatar: {
    image: {
      ariaHidden: true,
      src: authorImage,
      alt: 'Jason Hodge',
      classes: 'nhsd-a-image--cover',
    },
    classes: 'nhsd-a-avatar--large',
  },
  header: '<span class="nhsd-t-heading-s nhsd-!t-margin-0">Jason Hodge</span>',
  role: '<p class="nhsd-t-body nhsd-!t-margin-0 nhsd-!t-col-black">Role or job description, NHS Digital</p>',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ornare tortor. Pellentesque interdum ex est, quis pellentesque nisl vehicula vel. Fusce commodo molestie quam, quis condimentum nisi feugiat a. Vivamus laoreet efficitur mi, a egestas augue convallis eu. Nulla egestas turpis vitae lacus molestie iaculis id ut ex. Proin rutrum, orci quis sagittis sagittis, dui leo pulvinar diam, sit amet pulvinar enim ex quis risus. Pellentesque consectetur a eros nec blandit. Cras tempor viverra nisl eget semper. Nullam nisl lacus, fermentum ut arcu ut, sagittis tincidunt diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eleifend purus sed sem lacinia elementum. Aliquam at elementum mauris. Nam justo mi, posuere a scelerisque at, semper eleifend ligula.',
};
WithSummary.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${WithSummary(WithSummary.args)}`,
    },
  },
};
