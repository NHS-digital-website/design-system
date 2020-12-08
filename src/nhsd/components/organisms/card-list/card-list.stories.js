// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config.js';

// Load template file
import template from  '../../molecules/card/template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Card list';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}`;
const sourceCode = `// Sass import \n@use "nhsd/components/organisms/card-list";

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
    box: {
      classes: 'nhsd-a-box--bg-dark-grey',
    },
    link: {
      href: '#',
    },
    title: 'Potential Coronavirus (COVID-19) symptoms reported through NHS Pathways and 111 online',
    date: '30 Sept 2020',
    arrowIcon: {
      classes: 'nhsd-a-icon--size-s nhsd-a-icon--c-white nhsd-m-card__arrow',
      id: 'arrow_right',
    },
  }, {
    box: {
      classes: 'nhsd-a-box--bg-blue',
    },
    link: {
      href: '#',
    },
    title: 'Potential Coronavirus (COVID-19) symptoms reported through NHS Pathways and 111 online, Week Ending 27th September 2020',
    date: '28 Sept 2020',
    arrowIcon: {
      classes: 'nhsd-a-icon--size-s nhsd-a-icon--c-white nhsd-m-card__arrow',
      id: 'arrow_right',
    },
  }, {
    box: {
      classes: 'nhsd-a-box--bg-dark-grey',
    },
    link: {
      href: '#',
    },
    title: 'Maternity Services Monthly Statistics June 2020, experimental statistics',
    date: '24 Sept 2020',
    arrowIcon: {
      classes: 'nhsd-a-icon--size-s nhsd-a-icon--c-white nhsd-m-card__arrow',
      id: 'arrow_right',
    },
  }, {
    box: {
      classes: 'nhsd-a-box--bg-blue',
    },
    link: {
      href: '#',
    },
    title: 'Childhood Vaccination Coverage Statistics - England - 2019-20',
    date: '24 Sept 2020',
    arrowIcon: {
      classes: 'nhsd-a-icon--size-s nhsd-a-icon--c-white nhsd-m-card__arrow',
      id: 'arrow_right',
    },
  }
];
export const ComponentVariant1 = () => {
  const div = document.createElement('div');
  div.classList.add('nhsd-o-card-list');
  div.innerHTML = `<div class="nhsd-t-grid nhsd-!t-no-gutters">
  <div class="nhsd-t-row nhsd-o-card-list__cards">
    <div class="nhsd-t-col-xs-12 nhsd-t-col-s-6 nhsd-t-col-l-3">${LabComponent(ComponentVariant1Data[0])}</div>
    <div class="nhsd-t-col-xs-12 nhsd-t-col-s-6 nhsd-t-col-l-3">${LabComponent(ComponentVariant1Data[1])}</div>
    <div class="nhsd-t-col-xs-12 nhsd-t-col-s-6 nhsd-t-col-l-3">${LabComponent(ComponentVariant1Data[2])}</div>
    <div class="nhsd-t-col-xs-12 nhsd-t-col-s-6 nhsd-t-col-l-3">${LabComponent(ComponentVariant1Data[3])}</div>
  </div>
</div>`;
  return div;
};
ComponentVariant1.storyName = 'Colour cards 4D/2T/1M';
ComponentVariant1.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ComponentVariant1().outerHTML}`,
    },
  },
};

const ComponentVariant2Data = [
  {
    classes: 'nhsd-m-card--focus-orange',
    box: {
      classes: 'nhsd-a-box--bg-yellow',
    },
    link: {
      href: '#',
    },
    title: 'Indicators and datasets',
    text: 'This is a collection of over a thousand datasets that we publish. The information is for clinical staff, commissioners, researchers, and others needing data and evidence to help with decision-making in health and care.',
    hexIcon: {
      classes: 'nhsd-a-icon--size-xxl nhsd-m-card__icon',
      id: 'chart',
      nested: true
    },
    arrowIcon: {
      classes: 'nhsd-a-icon--size-s nhsd-m-card__arrow',
      id: 'arrow_right',
    },
  }, {
    box: {
      classes: 'nhsd-a-box--bg-white nhsd-a-box--border-yellow',
    },
    link: {
      href: '#',
    },
    title: 'National Indicator Library',
    text: 'The official hub for health and social care indicators in England. It includes methodology, data output and any independent assurance rating.',
    hexIcon: {
      classes: 'nhsd-a-icon--size-xxl nhsd-m-card__icon',
      id: 'chart',
      nested: true
    },
    arrowIcon: {
      classes: 'nhsd-a-icon--size-s nhsd-m-card__arrow',
      id: 'arrow_right',
    },
  }
];

export const ComponentVariant2 = () => {
  const div = document.createElement('div');
  div.classList.add('nhsd-o-card-list');
  div.innerHTML = `<div class="nhsd-t-grid nhsd-!t-no-gutters">
    <div class="nhsd-t-row nhsd-o-card-list__cards">
      <div class="nhsd-t-col-xs-12 nhsd-t-col-s-6 nhsd-t-col-m-5 nhsd-t-off-m-1">${LabComponent(ComponentVariant2Data[0])}</div>
      <div class="nhsd-t-col-xs-12 nhsd-t-col-s-6 nhsd-t-col-m-5">${LabComponent(ComponentVariant2Data[1])}</div>
    </div>
</div>`;
  return div;
};
ComponentVariant2.storyName = 'Icon cards 2D/2T/1M';
ComponentVariant2.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ComponentVariant2().outerHTML}`,
    },
  },
};

const ComponentVariant3Data = [
  {
    box: {
      classes: 'nhsd-a-box--bg-light-grey',
    },
    link: {
      href: '#',
    },
    picture: {
      sourceSet: [{
        'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
      }],
      alt: 'Abstract lights',
    },
    title: 'About NHS Digital',
    text: 'We’re pioneering new ways of gathering and using data, developing new technologies to support those on the front line of care, and collaborating across the NHS to deliver better services.',
    button: {
      label: 'More about what we do',
      classes: 'nhsd-m-card__button',
      el: 'span'
    },
  },
  {
    box: {
      classes: 'nhsd-a-box--bg-light-grey',
    },
    link: {
      href: '#',
    },
    picture: {
      sourceSet: [{
        'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
      }],
      alt: 'Abstract lights',
    },
    title: 'About NHS Digital',
    text: 'We’re pioneering new ways of gathering and using data, developing new technologies to support those on the front line of care, and collaborating across the NHS to deliver better services.',
    button: {
      label: 'More about what we do',
      classes: 'nhsd-m-card__button',
      el: 'span'
    },
  },
  {
    box: {
      classes: 'nhsd-a-box--bg-light-grey',
    },
    link: {
      href: '#',
    },
    picture: {
      sourceSet: [{
        'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
      }],
      alt: 'Abstract lights',
    },
    title: 'About NHS Digital',
    text: 'We’re pioneering new ways of gathering and using data, developing new technologies to support those on the front line of care, and collaborating across the NHS to deliver better services.',
    button: {
      label: 'More about what we do',
      classes: 'nhsd-m-card__button',
      el: 'span'
    },
  },
  {
    box: {
      classes: 'nhsd-a-box--bg-light-grey',
    },
    link: {
      href: '#',
    },
    title: 'About NHS Digital',
    text: 'We’re pioneering new ways of gathering and using data, developing new technologies to support those on the front line of care, and collaborating across the NHS to deliver better services.',
    button: {
      label: 'More about what we do',
      classes: 'nhsd-m-card__button',
      el: 'span'
    },
  }
];
export const ComponentVariant3 = () => {
  const div = document.createElement('div');
  div.classList.add('nhsd-o-card-list');
  div.innerHTML = `<div class="nhsd-t-grid nhsd-!t-no-gutters">
    <div class="nhsd-t-row nhsd-o-card-list__cards">
      <div class="nhsd-t-col-xs-12 nhsd-t-col-s-6 nhsd-t-col-l-3">${LabComponent(ComponentVariant3Data[0])}</div>
      <div class="nhsd-t-col-xs-12 nhsd-t-col-s-6 nhsd-t-col-l-3">${LabComponent(ComponentVariant3Data[1])}</div>
      <div class="nhsd-t-col-xs-12 nhsd-t-col-s-6 nhsd-t-col-l-3">${LabComponent(ComponentVariant3Data[2])}</div>
      <div class="nhsd-t-col-xs-12 nhsd-t-col-s-6 nhsd-t-col-l-3">${LabComponent(ComponentVariant3Data[0])}</div>
    </div>
</div>`;
  return div;
};
ComponentVariant3.storyName = 'Picture cards 4D/2T/1M';
ComponentVariant3.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ComponentVariant3().outerHTML}`,
    },
  },
};

const ComponentVariant3BData = [
  {
    box: {
      classes: 'nhsd-a-box--bg-light-grey',
    },
    link: {
      href: '#',
    },
    picture: {
      sourceSet: [{
        'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
      }],
      alt: 'Abstract lights',
    },
    date: '30 Sept 2020',
    title: 'About NHS Digital',
    text: 'We’re pioneering new ways of gathering and using data, developing new technologies to support those on the front line of care, and collaborating across the NHS to deliver better services.',
    button: {
      label: 'More about what we do',
      classes: 'nhsd-m-card__button',
      el: 'span'
    },
  },
  {
    box: {
      classes: 'nhsd-a-box--bg-light-grey',
    },
    link: {
      href: '#',
    },
    picture: {
      sourceSet: [{
        'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
      }],
      alt: 'Abstract lights',
    },
    date: '30 Sept 2020',
    title: 'About NHS Digital',
    text: 'We’re pioneering new ways of gathering and using data, developing new technologies to support those on the front line of care, and collaborating across the NHS to deliver better services.',
    button: {
      label: 'More about what we do',
      classes: 'nhsd-m-card__button',
      el: 'span'
    },
  },
  {
    box: {
      classes: 'nhsd-a-box--bg-light-grey',
    },
    link: {
      href: '#',
    },
    picture: {
      sourceSet: [{
        'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
      }],
      alt: 'Abstract lights',
    },
    date: '30 Sept 2020',
    title: 'About NHS Digital',
    text: 'We’re pioneering new ways of gathering and using data, developing new technologies to support those on the front line of care, and collaborating across the NHS to deliver better services.',
    button: {
      label: 'More about what we do',
      classes: 'nhsd-m-card__button',
      el: 'span'
    },
  },
  {
    box: {
      classes: 'nhsd-a-box--bg-light-grey',
    },
    link: {
      href: '#',
    },
    date: '30 Sept 2020',
    title: 'About NHS Digital',
    text: 'We’re pioneering new ways of gathering and using data, developing new technologies to support those on the front line of care, and collaborating across the NHS to deliver better services.',
    button: {
      label: 'More about what we do',
      classes: 'nhsd-m-card__button',
      el: 'span'
    },
  }
];
export const ComponentVariant3B = () => {
  const div = document.createElement('div');
  div.classList.add('nhsd-o-card-list');
  div.innerHTML = `<div class="nhsd-t-grid nhsd-!t-no-gutters">
    <div class="nhsd-t-row nhsd-o-card-list__cards">
      <div class="nhsd-t-col-xs-12 nhsd-t-col-s-6 nhsd-t-col-l-3">${LabComponent(ComponentVariant3BData[0])}</div>
      <div class="nhsd-t-col-xs-12 nhsd-t-col-s-6 nhsd-t-col-l-3">${LabComponent(ComponentVariant3BData[1])}</div>
      <div class="nhsd-t-col-xs-12 nhsd-t-col-s-6 nhsd-t-col-l-3">${LabComponent(ComponentVariant3BData[2])}</div>
      <div class="nhsd-t-col-xs-12 nhsd-t-col-s-6 nhsd-t-col-l-3">${LabComponent(ComponentVariant3BData[0])}</div>
    </div>
</div>`;
  return div;
};
ComponentVariant3B.storyName = 'Picture cards with dates 4D/2T/1M';
ComponentVariant3B.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ComponentVariant3B().outerHTML}`,
    },
  },
};

const ComponentVariant4Data = [
  {
    box: {
      classes: 'nhsd-a-box--bg-blue',
    },
    link: {
      href: '#',
    },
    title: 'About NHS Digital',
    text: 'This is a collection of over a thousand datasets that we publish. The information is for clinical staff, commissioners, researchers, and others needing data and evidence to help with decision-making in health and care.',
    button: {
      classes: 'nhsd-a-button--invert',
      el: 'span',
      label: 'More about what we do',
    },
  }, {
    box: {
      classes: 'nhsd-a-box--bg-light-grey',
    },
    link: {
      href: '#',
    },
    title: 'About NHS Digital',
    text: 'This is a collection of over a thousand datasets that we publish. The information is for clinical staff, commissioners, researchers, and others needing data and evidence to help with decision-making in health and care.',
    button: {
      el: 'span',
      label: 'More about what we do',
    },
  }, {
    box: {
      classes: 'nhsd-a-box--bg-dark-grey',
    },
    link: {
      href: '#',
    },
    title: 'About NHS Digital',
    text: 'This is a collection of over a thousand datasets that we publish. The information is for clinical staff, commissioners, researchers, and others needing data and evidence to help with decision-making in health and care.',
    button: {
      classes: 'nhsd-a-button--invert',
      el: 'span',
      label: 'More about what we do',
    },
  }
];

export const ComponentVariant4 = () => {
  const div = document.createElement('div');
  div.classList.add('nhsd-o-card-list');
  div.innerHTML = `<div class="nhsd-t-grid">
    <div class="nhsd-t-row nhsd-t-text-align-center">
      <div class="nhsd-t-col"><h2 class="nhsd-t-heading-xl nhsd-!t-margin-bottom-7">News & Events</h2></div>
    </div>
    <div class="nhsd-t-row nhsd-o-card-list__cards">
      <div class="nhsd-t-col-xs-12 nhsd-t-col-s-4">${LabComponent(ComponentVariant4Data[0])}</div>
      <div class="nhsd-t-col-xs-12 nhsd-t-col-s-4">${LabComponent(ComponentVariant4Data[1])}</div>
      <div class="nhsd-t-col-xs-12 nhsd-t-col-s-4">${LabComponent(ComponentVariant4Data[2])}</div>
    </div>
    <div class="nhsd-t-row">
      <div class="nhsd-t-col-xs-12 nhsd-t-col-s-6 nhsd-!t-text-align-xs-center nhsd-t-text-align-right">
        <a href="#" class="nhsd-a-button nhsd-!t-margin-bottom-3">
          <span class="nhsd-a-button__label">View all cards</span>
        </a>
      </div>
      <div class="nhsd-t-col-xs-12 nhsd-t-col-s-6 nhsd-!t-text-align-xs-center nhsd-t-text-align-left">
        <a href="#" class="nhsd-a-button nhsd-a-button--outline nhsd-!t-margin-bottom-0">
          <span class="nhsd-a-button__label">View all cards</span>
        </a>
      </div>
    </div>
</div>`;
  return div;
};
ComponentVariant4.storyName = 'Colour cards 3D/3T/1M';
ComponentVariant4.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ComponentVariant4().outerHTML}`,
    },
  },
};

export const ComponentVariant5 = () => {
  const div = document.createElement('div');
  div.classList.add('nhsd-o-card-list');
  div.innerHTML = `<div class="nhsd-t-grid">
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-12 nhsd-!t-no-gutters">
      <div class="nhsd-t-grid nhsd-t-grid--full-width nhsd-!t-no-gutters">
        <div class="nhsd-t-row nhsd-o-card-list__cards">
          <div class="nhsd-t-col-xs-12 nhsd-t-col-s-4">${LabComponent(ComponentVariant4Data[0])}</div>
          <div class="nhsd-t-col-xs-12 nhsd-t-col-s-4">${LabComponent(ComponentVariant4Data[1])}</div>
          <div class="nhsd-t-col-xs-12 nhsd-t-col-s-4">${LabComponent(ComponentVariant4Data[2])}</div>
        </div>
      </div>
    </div>
  </div>
</div>`;
  return div;
};
ComponentVariant5.storyName = 'Colour cards 3D/3T/1M - Nested grid inception';
ComponentVariant5.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ComponentVariant5().outerHTML}`,
    },
  },
};
