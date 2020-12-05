// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config.js';

// Load template file
import template from  '../../molecules/graphic-block/template.njk';
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
  return template.render({ params: {...args} });
};

const LabComponent = Template.bind({});

const ComponentVariant1Data = [
  {
    picture: {
      sourceSet: [{
        'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
      }],
      alt: 'Abstract lights',
      classes: 'nhsd-a-picture--square'
    },
    title: {
      p1: '50x',
      p2: 'Increase in 111 Online access',
    },
    text: 'Our 111 Online platform significantly eased the burden on phone services throughout the Covid-19 outbreak.',
  },
  {
    picture: {
      sourceSet: [{
        'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
      }],
      alt: 'Abstract lights',
      classes: 'nhsd-a-picture--square'
    },
    title: {
      p1: '12.2%',
      p2: 'Increase in triaged calls',
    },
    text: 'In March our NHS Pathways software helped triage 1,624,258 111 and 999 calls to the right services.',
  },
  {
    picture: {
      sourceSet: [{
        'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
      }],
      alt: 'Abstract lights',
      classes: 'nhsd-a-picture--square'
    },
    title: {
      p1: '111%',
      p2: 'Surge in NHS app use',
    },
    text: 'We’re now supporting twice as many patients through access to digital healthcare advice and services.',
  },
  {
    picture: {
      sourceSet: [{
        'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
      }],
      alt: 'Abstract lights',
      classes: 'nhsd-a-picture--square'
    },
    title: {
      p1: '1 million',
      p2: 'NHS login accounts',
    },
    text: 'We’re helping more people than ever save time and access services quickly through a single NHS login.',
  },
];
export const ComponentVariant1 = () => {
  const div = document.createElement('div');
  div.classList.add('nhsd-o-graphic-block-list');
  div.innerHTML = `<div class="nhsd-t-grid nhsd-!t-no-gutters nhsd-t-grid--debugs">
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-xs-12 nhsd-t-col-s-4 nhsd-t-off-s-2 nhsd-t-col-l-3 nhsd-t-off-l-0">${LabComponent(ComponentVariant1Data[0])}</div>
    <div class="nhsd-t-col-xs-12 nhsd-t-col-s-4 nhsd-t-col-l-3">${LabComponent(ComponentVariant1Data[1])}</div>
    <div class="nhsd-t-col-xs-12 nhsd-t-col-s-4 nhsd-t-off-s-2 nhsd-t-col-l-3 nhsd-t-off-l-0">${LabComponent(ComponentVariant1Data[2])}</div>
    <div class="nhsd-t-col-xs-12 nhsd-t-col-s-4 nhsd-t-col-l-3">${LabComponent(ComponentVariant1Data[3])}</div>
  </div>
</div>`;
  return div;
};
ComponentVariant1.storyName = 'Lab 4D/2T/1M';
ComponentVariant1.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ComponentVariant1().outerHTML}`,
    },
  },
};

const ComponentVariant2Data = [
  {
    picture: {
      sourceSet: [{
        'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
      }],
      alt: 'Abstract lights',
      classes: 'nhsd-a-picture--square'
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
    picture: {
      sourceSet: [{
        'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
      }],
      alt: 'Abstract lights',
      classes: 'nhsd-a-picture--square'
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
    picture: {
      sourceSet: [{
        'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
      }],
      alt: 'Abstract lights',
      classes: 'nhsd-a-picture--square'
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
    picture: {
      sourceSet: [{
        'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
      }],
      alt: 'Abstract lights',
      classes: 'nhsd-a-picture--square'
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
];
export const ComponentVariant2 = () => {
  const div = document.createElement('div');
  div.classList.add('nhsd-o-graphic-block-list');
  div.innerHTML = `<div class="nhsd-t-grid nhsd-!t-no-gutters">
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-xs-12 nhsd-t-col-s-4 nhsd-t-off-s-2 nhsd-t-col-l-3 nhsd-t-off-l-0">${LabComponent(ComponentVariant2Data[0])}</div>
    <div class="nhsd-t-col-xs-12 nhsd-t-col-s-4 nhsd-t-col-l-3">${LabComponent(ComponentVariant2Data[1])}</div>
    <div class="nhsd-t-col-xs-12 nhsd-t-col-s-4 nhsd-t-off-s-2 nhsd-t-col-l-3 nhsd-t-off-l-0">${LabComponent(ComponentVariant2Data[2])}</div>
    <div class="nhsd-t-col-xs-12 nhsd-t-col-s-4 nhsd-t-col-l-3">${LabComponent(ComponentVariant2Data[3])}</div>
  </div>
</div>`;
  return div;
};
ComponentVariant2.storyName = 'With icon 4D/2T/1M';
ComponentVariant2.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ComponentVariant2().outerHTML}`,
    },
  },
};

const ComponentVariant3Data = [
  {
    picture: {
      sourceSet: [{
        'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
      }],
      alt: 'Abstract lights',
      classes: 'nhsd-a-picture--square'
    },
    title: {
      p1: '50x',
      p2: 'Increase in 111 Online access',
    },
    text: 'Our 111 Online platform significantly eased the burden on phone services throughout the Covid-19 outbreak.',
    link: {
      href: '#',
    },
  },
  {
    picture: {
      sourceSet: [{
        'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
      }],
      alt: 'Abstract lights',
      classes: 'nhsd-a-picture--square'
    },
    title: {
      p1: '12.2%',
      p2: 'Increase in triaged calls',
    },
    text: 'In March our NHS Pathways software helped triage 1,624,258 111 and 999 calls to the right services.',
    link: {
      href: '#',
    },
  },
  {
    picture: {
      sourceSet: [{
        'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
      }],
      alt: 'Abstract lights',
      classes: 'nhsd-a-picture--square'
    },
    title: {
      p1: '111%',
      p2: 'Surge in NHS app use',
    },
    text: 'We’re now supporting twice as many patients through access to digital healthcare advice and services.',
    link: {
      href: '#',
    },
  },
  {
    picture: {
      sourceSet: [{
        'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
      }],
      alt: 'Abstract lights',
      classes: 'nhsd-a-picture--square'
    },
    title: {
      p1: '1 million',
      p2: 'NHS login accounts',
    },
    text: 'We’re helping more people than ever save time and access services quickly through a single NHS login.',
    link: {
      href: '#',
    },
  },
];
export const ComponentVariant3 = () => {
  const div = document.createElement('div');
  div.classList.add('nhsd-o-graphic-block-list');
  div.innerHTML = `<div class="nhsd-t-grid nhsd-!t-no-gutters nhsd-t-grid--debugs">
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-xs-12 nhsd-t-col-s-4 nhsd-t-off-s-2 nhsd-t-col-l-3 nhsd-t-off-l-0">${LabComponent(ComponentVariant3Data[0])}</div>
    <div class="nhsd-t-col-xs-12 nhsd-t-col-s-4 nhsd-t-col-l-3">${LabComponent(ComponentVariant3Data[1])}</div>
    <div class="nhsd-t-col-xs-12 nhsd-t-col-s-4 nhsd-t-off-s-2 nhsd-t-col-l-3 nhsd-t-off-l-0">${LabComponent(ComponentVariant3Data[2])}</div>
    <div class="nhsd-t-col-xs-12 nhsd-t-col-s-4 nhsd-t-col-l-3">${LabComponent(ComponentVariant3Data[3])}</div>
  </div>
</div>`;
  return div;
};
ComponentVariant3.storyName = 'With link 4D/2T/1M';
ComponentVariant3.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ComponentVariant3().outerHTML}`,
    },
  },
};

const ComponentVariant4Data = [
  {
    picture: {
      sourceSet: [{
        'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
      }],
      alt: 'Abstract lights',
      classes: 'nhsd-a-picture--square'
    },
    title: {
      p1: '50',
      p2: 'Increase in 111 Online access',
    },
    text: 'Our 111 Online platform significantly eased the burden on phone services throughout the Covid-19 outbreak.',
    link: {
      href: '#',
    },
    icon: {
      id: 'chart',
      classes: 'nhsd-a-icon--size-m',
    },
  },
  {
    picture: {
      sourceSet: [{
        'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
      }],
      alt: 'Abstract lights',
      classes: 'nhsd-a-picture--square'
    },
    title: {
      p1: '12.2',
      p2: 'Increase in triaged calls',
    },
    text: 'In March our NHS Pathways software helped triage 1,624,258 111 and 999 calls to the right services.',
    link: {
      href: '#',
    },
    icon: {
      id: 'arrow_right',
      classes: 'nhsd-a-icon--size-m',
    },
  },
  {
    picture: {
      sourceSet: [{
        'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
      }],
      alt: 'Abstract lights',
      classes: 'nhsd-a-picture--square'
    },
    title: {
      p1: '111',
      p2: 'Surge in NHS app use',
    },
    text: 'We’re now supporting twice as many patients through access to digital healthcare advice and services.',
    link: {
      href: '#',
    },
    icon: {
      id: 'search',
      classes: 'nhsd-a-icon--size-m',
    },
  },
  {
    picture: {
      sourceSet: [{
        'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
      }],
      alt: 'Abstract lights',
      classes: 'nhsd-a-picture--square'
    },
    title: {
      p1: '1 million',
      p2: 'NHS login accounts',
    },
    text: 'We’re helping more people than ever save time and access services quickly through a single NHS login.',
    link: {
      href: '#',
    },
    icon: {
      id: 'x',
      classes: 'nhsd-a-icon--size-m',
      nested: true,
    },
  },
];
export const ComponentVariant4 = () => {
  const div = document.createElement('div');
  div.classList.add('nhsd-o-graphic-block-list');
  div.innerHTML = `<div class="nhsd-t-grid nhsd-!t-no-gutters nhsd-t-grid--debugs">
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-xs-12 nhsd-t-col-s-4 nhsd-t-off-s-2 nhsd-t-col-m-3 nhsd-t-off-m-0">${LabComponent(ComponentVariant4Data[0])}</div>
    <div class="nhsd-t-col-xs-12 nhsd-t-col-s-4 nhsd-t-col-m-3">${LabComponent(ComponentVariant4Data[1])}</div>
    <div class="nhsd-t-col-xs-12 nhsd-t-col-s-4 nhsd-t-off-s-2 nhsd-t-col-m-3 nhsd-t-off-m-0">${LabComponent(ComponentVariant4Data[2])}</div>
    <div class="nhsd-t-col-xs-12 nhsd-t-col-s-4 nhsd-t-col-m-3">${LabComponent(ComponentVariant4Data[3])}</div>
  </div>
</div>`;
  return div;
};
ComponentVariant4.storyName = 'With link and icon 4D/2T/1M';
ComponentVariant4.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ComponentVariant4().outerHTML}`,
    },
  },
};
