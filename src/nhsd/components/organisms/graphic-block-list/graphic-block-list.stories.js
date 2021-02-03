// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from '../../organisms/graphic-block-list/template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Graphic block list';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}`;
const sourceCode = `// Sass import \n@use "nhsd/components/organisms/graphic-block-list";

// HTML`;

// Component defaults
export default {
  title: `${sbConfig.title.designSystem} / ${sbConfig.title.components} / ${sbConfig.title.organisms} / ${componentName}`,
  parameters: {
    docs: {
      description: {
        component: storyDescription
      }
    },
  },
};

// Component template
const Template = (args) => {
  return template.render({ params: { ...args } });
};

export const ComponentVariant1 = Template.bind({});
ComponentVariant1.storyName = 'Lab 4D/2T/1M';
ComponentVariant1.args = {
  blocks: [
    {
      image: {
        sourceSet: [{
          'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-image--square'
      },
      title: {
        p1: '50x',
        p2: 'Increase in 111 Online access',
      },
      text: 'Our 111 Online platform significantly eased the burden on phone services throughout the Covid-19 outbreak.',
    },
    {
      image: {
        sourceSet: [{
          'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-image--square'
      },
      title: {
        p1: '12.2%',
        p2: 'Compellingly streamline front-end relationships via progressive manufactured products. Progressively incentivize superior value and stand-alone best practices.',
      },
      text: 'In March our NHS Pathways software helped triage 1,624,258 111 and 999 calls to the right services.',
    },
    {
      image: {
        sourceSet: [{
          'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-image--square'
      },
      title: {
        p1: '111%',
        p2: 'Surge in NHS app use',
      },
      text: 'We’re now supporting twice as many patients through access to digital healthcare advice and services.',
    },
    {
      image: {
        sourceSet: [{
          'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-image--square'
      },
      title: {
        p1: '1 million',
        p2: 'NHS login accounts',
      },
      text: 'We’re helping more people than ever save time and access services quickly through a single NHS login.',
    },
  ]
};
ComponentVariant1.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ComponentVariant1(ComponentVariant1.args)}`,
    },
  },
};

export const ComponentVariant2 = Template.bind({});
ComponentVariant2.storyName = 'With icon 4D/2T/1M';
ComponentVariant2.args = {
  blocks: [
    {
      image: {
        sourceSet: [{
          'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-image--square'
      },
      title: {
        p1: '50',
        p2: 'Increase in 111 Online access',
      },
      text: 'Our 111 Online platform significantly eased the burden on phone services throughout the Covid-19 outbreak.',
      icon: {
        id: 'chart',
        classes: 'nhsd-a-icon--size-m',
      },
    },
    {
      image: {
        sourceSet: [{
          'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-image--square'
      },
      title: {
        p1: '12.2',
        p2: 'Increase in triaged calls',
      },
      text: 'In March our NHS Pathways software helped triage 1,624,258 111 and 999 calls to the right services.',
      icon: {
        id: 'arrow_right',
        classes: 'nhsd-a-icon--size-m',
      },
    },
    {
      image: {
        sourceSet: [{
          'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-image--square'
      },
      title: {
        p1: '111',
        p2: 'Surge in NHS app use',
      },
      text: 'We’re now supporting twice as many patients through access to digital healthcare advice and services.',
      icon: {
        id: 'search',
        classes: 'nhsd-a-icon--size-m',
      },
    },
    {
      image: {
        sourceSet: [{
          'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-image--square'
      },
      title: {
        p1: '1 million',
        p2: 'NHS login accounts',
      },
      text: 'We’re helping more people than ever save time and access services quickly through a single NHS login.',
      icon: {
        id: 'x',
        classes: 'nhsd-a-icon--size-m',
        nested: true,
      },
    },
  ]
};
ComponentVariant2.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ComponentVariant2(ComponentVariant2.args)}`,
    },
  },
};

export const ComponentVariant3 = Template.bind({});
ComponentVariant3.storyName = 'With link 4D/2T/1M';
ComponentVariant3.args = {
  blocks: [
    {
      image: {
        sourceSet: [{
          'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-image--square'
      },
      title: {
        p1: '50x',
        p2: 'Increase in 111 Online access Increase in 111 Online access Increase in 111 Online access Increase in 111 Online access Increase in 111 Online access Increase in 111 Online access Increase in 111 Online access Increase in 111 Online access',
      },
      text: 'Our 111 Online platform significantly eased the burden on phone services throughout the Covid-19 outbreak.',
      link: {
        href: '#',
        label: 'Access the service now',
      },
    },
    {
      image: {
        sourceSet: [{
          'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-image--square'
      },
      title: {
        p1: '12.2%',
        p2: 'Compellingly streamline front-end relationships via progressive manufactured products. Progressively incentivize superior value and stand-alone best practices.',
      },
      text: 'In March our NHS Pathways software helped triage 1,624,258 111 and 999 calls to the right services. In March our NHS Pathways software helped triage 1,624,258 111 and 999 calls to the right services. In March our NHS Pathways software helped triage 1,624,258 111 and 999 calls to the right services.',
    },
    {
      image: {
        sourceSet: [{
          'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-image--square'
      },
      title: {
        p1: '111%',
        p2: 'Surge in NHS app use',
      },
      text: 'We’re now supporting twice as many patients through access to digital healthcare advice and services.',
      link: {
        href: '#',
        label: 'Check out the NHS app',
      },
    },
    {
      image: {
        sourceSet: [{
          'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-image--square'
      },
      title: {
        p1: '1 million',
        p2: 'NHS login accounts',
      },
      text: 'We’re helping more people than ever save time and access services quickly through a single NHS login.',
      link: {
        href: '#',
        label: 'Log in to your NHS account here',
      },
    },
  ]
};
ComponentVariant3.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ComponentVariant3(ComponentVariant3.args)}`,
    },
  },
};

export const ComponentVariant4 = Template.bind({});
ComponentVariant4.storyName = 'With link and icon 4D/2T/1M';
ComponentVariant4.args = {
  blocks: [
    {
      image: {
        sourceSet: [{
          'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-image--square'
      },
      title: {
        p1: '50',
        p2: 'Increase in 111 Online access',
      },
      text: 'Our 111 Online platform significantly eased the burden on phone services throughout the Covid-19 outbreak.',
      link: {
        href: '#',
        label: 'Access the service now',
      },
      icon: {
        id: 'chart',
        classes: 'nhsd-a-icon--size-m',
      },
    },
    {
      image: {
        sourceSet: [{
          'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-image--square'
      },
      title: {
        p1: '12.2',
        p2: 'Increase in triaged calls',
      },
      text: 'In March our NHS Pathways software helped triage 1,624,258 111 and 999 calls to the right services.',
      link: {
        href: '#',
        label: 'Click the link for goodies',
      },
      icon: {
        id: 'arrow_right',
        classes: 'nhsd-a-icon--size-m',
      },
    },
    {
      image: {
        sourceSet: [{
          'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-image--square'
      },
      title: {
        p1: '111',
        p2: 'Surge in NHS app use',
      },
      text: 'We’re now supporting twice as many patients through access to digital healthcare advice and services.',
      link: {
        href: '#',
        label: 'Check out the NHS app',
      },
      icon: {
        id: 'search',
        classes: 'nhsd-a-icon--size-m',
      },
    },
    {
      image: {
        sourceSet: [{
          'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-image--square'
      },
      title: {
        p1: '1 million',
        p2: 'NHS login accounts',
      },
      text: 'We’re helping more people than ever save time and access services quickly through a single NHS login.',
      link: {
        href: '#',
        label: 'Log in to your NHS account here',
      },
      icon: {
        id: 'x',
        classes: 'nhsd-a-icon--size-m',
        nested: true,
      },
    },
  ]
};
ComponentVariant4.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ComponentVariant4(ComponentVariant4.args)}`,
    },
  },
};
