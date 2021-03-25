// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';

const componentName = 'Featured Card Layout';
const storyDescription = `${sbConfig.heading.lab}

### Components used
- <a href="/docs/design-system-components-molecules-card--lab-component">Card</a>

### Details
- This layout is achieved using a responsive \`grid\` layout to switch from a single column stacked layout to a 8 by 4 grid at the small breakpoint.
- We make use of the \`nhsd-m-card--full-height\` modifier class to extend the \`card\` component to the full height of its container.
- The featured card also uses the \`nhsd-m-card--image-position-adjacent\` modifier to position the image adjacent to the content at viewports greater than small breakpoint.
`;

// Component defaults
export default {
    title: `${sbConfig.title.designSystem} / ${sbConfig.title.components} / ${sbConfig.title.templates} / ${componentName}`,
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

export const FeatureCardLayout = Template.bind({});
FeatureCardLayout.storyName = sbConfig.title.lab;
FeatureCardLayout.args = {
  featuredCard: {
    classes: 'nhsd-!t-padding-bottom-3 nhsd-!t-padding-bottom-s-6',
    box: {
      classes: 'nhsd-a-box--bg-light-grey',
    },
    title: 'About NHS Digital',
    text: 'We’re pioneering new ways of gathering and using data, developing new technologies to support those on the front line of care, and collaborating across the NHS to deliver better services.',
    boxLink: {
      href: '#',
      classes: 'nhsd-a-box-link--focus-orange',
    },
    arrowIcon: {
      classes: 'nhsd-a-arrow nhsd-a-icon--size-s nhsd-a-icon--col-black',
      id: 'arrow_right',
    },
    date: 'Thursday 28 January 2021',
    image: {
      classes: 'nhsd-a-image--cover',
      sourceSet: [{
        url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
      }],
      alt: 'Abstract lights',
    },
    imagePosition: 'adjacent',
    fullHeight: true,
  },
  cards: [{
    classes: 'nhsd-!t-padding-bottom-3 nhsd-!t-padding-bottom-s-6',
    box: {
      classes: 'nhsd-a-box--bg-light-grey',
    },
    title: 'Getting a grip on data',
    boxLink: {
      href: '#',
      classes: 'nhsd-a-box-link--focus-orange',
    },
    arrowIcon: {
      classes: 'nhsd-a-arrow nhsd-a-icon--size-s nhsd-a-icon--col-black',
      id: 'arrow_right',
    },
    date: 'Thursday 28 January 2021',
  }, {
    classes: 'nhsd-!t-padding-bottom-3 nhsd-!t-padding-bottom-s-6',
    box: {
      classes: 'nhsd-a-box--bg-light-grey',
    },
    title: 'How data is beating coronavirus',
    boxLink: {
      href: '#',
      classes: 'nhsd-a-box-link--focus-orange',
    },
    arrowIcon: {
      classes: 'nhsd-a-arrow nhsd-a-icon--size-s nhsd-a-icon--col-black',
      id: 'arrow_right',
    },
    date: 'Thursday 28 January 2021',
  }, {
    classes: 'nhsd-!t-padding-bottom-3 nhsd-!t-padding-bottom-s-6',
    box: {
      classes: 'nhsd-a-box--bg-light-grey',
    },
    title: 'Developers at the heart',
    boxLink: {
      href: '#',
      classes: 'nhsd-a-box-link--focus-orange',
    },
    arrowIcon: {
      classes: 'nhsd-a-arrow nhsd-a-icon--size-s nhsd-a-icon--col-black',
      id: 'arrow_right',
    },
    date: 'Thursday 28 January 2021',
  }],
};
FeatureCardLayout.parameters = {
  docs: {
    source: {
      code: `${FeatureCardLayout(FeatureCardLayout.args)}`,
    },
  },
};
