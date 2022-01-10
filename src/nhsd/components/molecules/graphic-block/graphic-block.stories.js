// Load icons
import nhsdIcon from '@/helpers/icons/inline-icon';

// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';

const componentName = 'Graphic block';
const storyDescription = `${sbConfig.heading.lab}`;
const sourceCode = `// Sass import \n@use "nhsd/components/molecules/graphic-block";

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
  },
};

// Component template
const Template = (args) => template.render({ params: { ...args } });

export const LabComponent = Template.bind({});
LabComponent.storyName = sbConfig.title.lab;
LabComponent.args = {
  image: {
    src: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
    alt: 'Abstract lights',
    ratio: 'nhsd-t-ratio-1x1',
  },
  title: {
    p1: '50x',
    p2: 'Increase in 111 Online access',
  },
  text: 'Our 111 Online platform significantly eased the burden on phone services throughout the Covid-19 outbreak.',
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};

export const WithIcon = Template.bind({});
WithIcon.storyName = 'With icon';
WithIcon.args = {
  image: {
    src: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
    alt: 'Abstract lights',
    ratio: 'nhsd-t-ratio-1x1',
  },
  title: {
    p1: '50',
    p2: 'Increase in 111 Online access',
  },
  text: 'Our 111 Online platform significantly eased the burden on phone services throughout the Covid-19 outbreak.',
  icon: {
    svgSource: nhsdIcon('arrow_right'),
    classes: 'nhsd-a-icon--size-m',
  },
};
WithIcon.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${WithIcon(WithIcon.args)}`,
    },
  },
};

export const WithLink = Template.bind({});
WithLink.storyName = 'With link';
WithLink.args = {
  image: {
    src: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
    alt: 'Abstract lights',
    ratio: 'nhsd-t-ratio-1x1',
  },
  title: {
    p1: '50x',
    p2: 'Increase in 111 Online access',
  },
  text: 'Our 111 Online platform significantly eased the burden on phone services throughout the Covid-19 outbreak.',
  link: {
    href: '#',
    label: 'Read more about 111 Online access',
  },
};
WithLink.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${WithLink(WithLink.args)}`,
    },
  },
};

export const WithLinkAndIcon = Template.bind({});
WithLinkAndIcon.storyName = 'With link and icon';
WithLinkAndIcon.args = {
  image: {
    src: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
    alt: 'Abstract lights',
    ratio: 'nhsd-t-ratio-1x1',
  },
  title: {
    p1: '50',
    p2: 'Increase in 111 Online access',
  },
  text: 'Our 111 Online platform significantly eased the burden on phone services throughout the Covid-19 outbreak.',
  icon: {
    svgSource: nhsdIcon('chart'),
    classes: 'nhsd-a-icon--size-m',
  },
  link: {
    href: '#',
    label: 'Read more about 111 Online access',
  },
};
WithLinkAndIcon.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${WithLinkAndIcon(WithLinkAndIcon.args)}`,
    },
  },
};
