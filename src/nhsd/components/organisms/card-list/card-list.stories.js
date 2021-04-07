/* global document */

// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
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
        component: storyDescription,
      },
    },
  },
};

// Component template
const Template = (args) => template.render({ params: { ...args } });

export const Component1 = Template.bind({});
Component1.storyName = 'Colour cards 4D/2T/1M';
Component1.args = {
  desktopColumns: 2,
  centreColumns: true,
  cards: [
    {
      box: {
        classes: 'nhsd-a-box--bg-dark-grey',
      },
      boxLink: {
        href: '#',
      },
      title: 'Potential Coronavirus (COVID-19) symptoms reported through NHS Pathways and 111 online',
      date: '30 Sept 2020',
      arrowIcon: {
        classes: 'nhsd-a-icon--size-s nhsd-a-icon--col-white nhsd-a-arrow',
        id: 'arrow_right',
      },
    }, {
      box: {
        classes: 'nhsd-a-box--bg-blue',
      },
      boxLink: {
        href: '#',
      },
      title: 'Potential Coronavirus (COVID-19) symptoms reported through NHS Pathways and 111 online, Week Ending 27th September 2020',
      date: '28 Sept 2020',
      arrowIcon: {
        classes: 'nhsd-a-icon--size-s nhsd-a-icon--col-white nhsd-a-arrow',
        id: 'arrow_right',
      },
    }, {
      box: {
        classes: 'nhsd-a-box--bg-dark-grey',
      },
      boxLink: {
        href: '#',
      },
      title: 'Maternity Services Monthly Statistics June 2020, experimental statistics',
      date: '24 Sept 2020',
      arrowIcon: {
        classes: 'nhsd-a-icon--size-s nhsd-a-icon--col-white nhsd-a-arrow',
        id: 'arrow_right',
      },
    }, {
      box: {
        classes: 'nhsd-a-box--bg-blue',
      },
      boxLink: {
        href: '#',
      },
      title: 'Childhood Vaccination Coverage Statistics - England - 2019-20',
      date: '24 Sept 2020',
      arrowIcon: {
        classes: 'nhsd-a-icon--size-s nhsd-a-icon--col-white nhsd-a-arrow',
        id: 'arrow_right',
      },
    },
  ],
};
Component1.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${Component1(Component1.args)}`,
    },
  },
};

export const CyberAlertComponent = Template.bind({});
CyberAlertComponent.storyName = 'Cyber alert cards 3D/3T/1M';
CyberAlertComponent.args = {
  desktopColumns: 3,
  centreColumns: true,
  cards: [{
    box: {
      classes: 'nhsd-a-box--bg-white nhsd-a-box--border-grey',
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
    tags: [{
      classes: 'nhsd-a-tag--bg-dark-grey',
      label: 'CC-3734',
    }, {
      classes: 'nhsd-a-tag--bg-light-red',
      label: 'High Severity',
    }],
    date: 'Thursday 28 January 2021 (updated 29 January 2021)',
    contentTag: {
      classes: 'nhsd-a-tag--bg-light-grey nhsd-!t-margin-top-3 nhsd-!t-margin-bottom-1',
      label: 'Insecure Software',
    },
  }, {
    box: {
      classes: 'nhsd-a-box--bg-white nhsd-a-box--border-grey',
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
    tags: [{
      classes: 'nhsd-a-tag--bg-dark-grey',
      label: 'CC-3734',
    }, {
      classes: 'nhsd-a-tag--bg-light-red',
      label: 'High Severity',
    }],
    date: 'Thursday 28 January 2021 (updated 29 January 2021)',
    contentTag: {
      classes: 'nhsd-a-tag--bg-light-grey nhsd-!t-margin-top-3 nhsd-!t-margin-bottom-1',
      label: 'Insecure Software',
    },
  }, {
    box: {
      classes: 'nhsd-a-box--bg-white nhsd-a-box--border-grey',
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
    tags: [{
      classes: 'nhsd-a-tag--bg-dark-grey',
      label: 'CC-3734',
    }, {
      classes: 'nhsd-a-tag--bg-light-red',
      label: 'High Severity',
    }],
    date: 'Thursday 28 January 2021 (updated 29 January 2021)',
    contentTag: {
      classes: 'nhsd-a-tag--bg-light-grey nhsd-!t-margin-top-3 nhsd-!t-margin-bottom-1',
      label: 'Insecure Software',
    },
  }],
};
CyberAlertComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${CyberAlertComponent(CyberAlertComponent.args)}`,
    },
  },
};

export const CyberAlertComponent2 = Template.bind({});
CyberAlertComponent2.storyName = 'Cyber alert cards 2D/2T/1M';
CyberAlertComponent2.args = {
  desktopColumns: 2,
  centreColumns: true,
  cards: [{
    box: {
      classes: 'nhsd-a-box--bg-white nhsd-a-box--border-grey',
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
    tags: [{
      classes: 'nhsd-a-tag--bg-dark-grey',
      label: 'CC-3734',
    }, {
      classes: 'nhsd-a-tag--bg-light-red',
      label: 'High Severity',
    }],
    date: 'Thursday 28 January 2021 (updated 29 January 2021)',
    contentTag: {
      classes: 'nhsd-a-tag--bg-light-grey nhsd-!t-margin-top-3 nhsd-!t-margin-bottom-1',
      label: 'Insecure Software',
    },
  }, {
    box: {
      classes: 'nhsd-a-box--bg-white nhsd-a-box--border-grey',
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
    tags: [{
      classes: 'nhsd-a-tag--bg-dark-grey',
      label: 'CC-3734',
    }, {
      classes: 'nhsd-a-tag--bg-light-red',
      label: 'High Severity',
    }],
    date: 'Thursday 28 January 2021 (updated 29 January 2021)',
    contentTag: {
      classes: 'nhsd-a-tag--bg-light-grey nhsd-!t-margin-top-3 nhsd-!t-margin-bottom-1',
      label: 'Insecure Software',
    },
  }, {
    box: {
      classes: 'nhsd-a-box--bg-white nhsd-a-box--border-grey',
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
    tags: [{
      classes: 'nhsd-a-tag--bg-dark-grey',
      label: 'CC-3734',
    }, {
      classes: 'nhsd-a-tag--bg-light-red',
      label: 'High Severity',
    }],
    date: 'Thursday 28 January 2021 (updated 29 January 2021)',
    contentTag: {
      classes: 'nhsd-a-tag--bg-light-grey nhsd-!t-margin-top-3 nhsd-!t-margin-bottom-1',
      label: 'Insecure Software',
    },
  }],
};
CyberAlertComponent2.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${CyberAlertComponent2(CyberAlertComponent2.args)}`,
    },
  },
};

export const Component2 = Template.bind({});
Component2.storyName = 'Icon cards 2D/2T/1M';
Component2.args = {
  desktopColumns: 2,
  centreColumns: true,
  cards: [
    {
      box: {
        classes: 'nhsd-a-box--bg-yellow',
      },
      boxLink: {
        href: '#',
        classes: 'nhsd-a-box-link--focus-orange',
      },
      title: 'Indicators and datasets',
      text: 'This is a collection of over a thousand datasets that we publish. The information is for clinical staff, commissioners, researchers, and others needing data and evidence to help with decision-making in health and care.',
      hexIcon: {
        classes: 'nhsd-a-icon--size-xxl nhsd-m-card__icon',
        id: 'chart',
        nested: true,
      },
      arrowIcon: {
        classes: 'nhsd-a-icon--size-s nhsd-a-arrow',
        id: 'arrow_right',
      },
    }, {
      box: {
        classes: 'nhsd-a-box--bg-white nhsd-a-box--border-yellow',
      },
      boxLink: {
        href: '#',
        classes: 'nhsd-a-box-link--focus-orange',
      },
      title: 'National Indicator Library',
      text: 'The official hub for health and social care indicators in England. It includes methodology, data output and any independent assurance rating.',
      hexIcon: {
        classes: 'nhsd-a-icon--size-xxl nhsd-m-card__icon',
        id: 'chart',
        nested: true,
      },
      arrowIcon: {
        classes: 'nhsd-a-icon--size-s nhsd-a-arrow',
        id: 'arrow_right',
      },
    },
  ],
};
Component2.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${Component2(Component2.args)}`,
    },
  },
};

export const Component3 = Template.bind({});
Component3.storyName = 'Picture cards 4D/2T/1M';
Component3.args = {
  desktopColumns: 4,
  cards: [
    {
      box: {
        classes: 'nhsd-a-box--bg-light-grey',
      },
      boxLink: {
        href: '#',
      },
      image: {
        sourceSet: [{
          url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
      },
      title: 'About NHS Digital',
      text: 'We’re pioneering new ways of gathering and using data, developing new technologies to support those on the front line of care, and collaborating across the NHS to deliver better services.',
      button: {
        label: 'More about what we do',
        classes: 'nhsd-m-card__button',
        el: 'span',
      },
    },
    {
      box: {
        classes: 'nhsd-a-box--bg-light-grey',
      },
      boxLink: {
        href: '#',
      },
      image: {
        sourceSet: [{
          url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
      },
      title: 'About NHS Digital',
      text: 'We’re pioneering new ways of gathering and using data, developing new technologies to support those on the front line of care, and collaborating across the NHS to deliver better services.',
      button: {
        label: 'More about what we do',
        classes: 'nhsd-m-card__button',
        el: 'span',
      },
    },
    {
      box: {
        classes: 'nhsd-a-box--bg-light-grey',
      },
      boxLink: {
        href: '#',
      },
      image: {
        sourceSet: [{
          url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
      },
      title: 'About NHS Digital',
      text: 'We’re pioneering new ways of gathering and using data, developing new technologies to support those on the front line of care, and collaborating across the NHS to deliver better services.',
      button: {
        label: 'More about what we do',
        classes: 'nhsd-m-card__button',
        el: 'span',
      },
    },
    {
      box: {
        classes: 'nhsd-a-box--bg-light-grey',
      },
      boxLink: {
        href: '#',
      },
      image: {
        sourceSet: [{
          url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
      },
      title: 'About NHS Digital',
      text: 'We’re pioneering new ways of gathering and using data, developing new technologies to support those on the front line of care, and collaborating across the NHS to deliver better services.',
      button: {
        label: 'More about what we do',
        classes: 'nhsd-m-card__button',
        el: 'span',
      },
    },
  ],
};
Component3.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${Component3(Component3.args)}`,
    },
  },
};

export const Component4 = Template.bind({});
Component4.storyName = 'Picture cards with dates 4D/2T/1M';
Component4.args = {
  desktopColumns: 4,
  cards: [
    {
      box: {
        classes: 'nhsd-a-box--bg-light-grey',
      },
      boxLink: {
        href: '#',
      },
      image: {
        sourceSet: [{
          url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
      },
      date: '30 Sept 2020',
      title: 'About NHS Digital',
      text: 'We’re pioneering new ways of gathering and using data, developing new technologies to support those on the front line of care, and collaborating across the NHS to deliver better services.',
      button: {
        label: 'More about what we do',
        classes: 'nhsd-m-card__button',
        el: 'span',
      },
    },
    {
      box: {
        classes: 'nhsd-a-box--bg-light-grey',
      },
      boxLink: {
        href: '#',
      },
      image: {
        sourceSet: [{
          url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
      },
      date: '30 Sept 2020',
      title: 'About NHS Digital',
      text: 'We’re pioneering new ways of gathering and using data, developing new technologies to support those on the front line of care, and collaborating across the NHS to deliver better services.',
      button: {
        label: 'More about what we do',
        classes: 'nhsd-m-card__button',
        el: 'span',
      },
    },
    {
      box: {
        classes: 'nhsd-a-box--bg-light-grey',
      },
      boxLink: {
        href: '#',
      },
      image: {
        sourceSet: [{
          url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
      },
      date: '30 Sept 2020',
      title: 'About NHS Digital',
      text: 'We’re pioneering new ways of gathering and using data, developing new technologies to support those on the front line of care, and collaborating across the NHS to deliver better services.',
      button: {
        label: 'More about what we do',
        classes: 'nhsd-m-card__button',
        el: 'span',
      },
    },
    {
      box: {
        classes: 'nhsd-a-box--bg-light-grey',
      },
      boxLink: {
        href: '#',
      },
      image: {
        sourceSet: [{
          url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
      },
      date: '30 Sept 2020',
      title: 'About NHS Digital',
      text: 'We’re pioneering new ways of gathering and using data, developing new technologies to support those on the front line of care, and collaborating across the NHS to deliver better services.',
      button: {
        label: 'More about what we do',
        classes: 'nhsd-m-card__button',
        el: 'span',
      },
    },
  ],
};
Component4.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${Component4(Component4.args)}`,
    },
  },
};

export const Component5 = Template.bind({});
Component5.storyName = 'Colour cards - with title and buttons - 3D/3T/1M';
Component5.args = {
  desktopColumns: 3,
  title: 'News & Events',
  cards: [
    {
      box: {
        classes: 'nhsd-a-box--bg-blue',
      },
      boxLink: {
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
      boxLink: {
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
      boxLink: {
        href: '#',
      },
      title: 'About NHS Digital',
      text: 'This is a collection of over a thousand datasets that we publish. The information is for clinical staff, commissioners, researchers, and others needing data and evidence to help with decision-making in health and care.',
      button: {
        classes: 'nhsd-a-button--invert',
        el: 'span',
        label: 'More about what we do',
      },
    },
  ],
  buttonNav: {
    buttons: [
      {
        el: 'a',
        label: 'View all news',
        href: '#',
      }, {
        classes: 'nhsd-a-button--outline',
        el: 'a',
        label: 'View all events',
        href: '#',
      },
    ],
  },
};
Component5.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${Component5(Component5.args)}`,
    },
  },
};

export const Component6 = () => {
  const div = document.createElement('div');
  div.innerHTML = `<div class="nhsd-t-grid nhsd-!t-no-gutters">
<div class="nhsd-t-row">
  <div class="nhsd-t-col-12">
    <!-- Card list organism sits in a nested grid -->
    ${Component5({
    ...Component5.args,
    grid: {
      classes: 'nhsd-t-grid--full-width',
    },
  })}
  </div>
</div>
</div>`;
  return div;
};
Component6.storyName = 'Colour cards in nested grid';
Component6.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${Component5({
        ...Component5.args,
        grid: {
          classes: 'nhsd-t-grid--full-width',
        },
      })}`,
    },
  },
};

export const Component7 = Template.bind({});
Component7.storyName = 'Many cards - 4 columns';
const component7Cards = [];
for (let i = 0; i < 9; i += 1) {
  component7Cards.push({
    box: {
      classes: 'nhsd-a-box--bg-dark-grey',
    },
    boxLink: {
      href: '#',
    },
    title: 'Potential Coronavirus (COVID-19) symptoms reported through NHS Pathways and 111 online',
    date: '30 Sept 2020',
    arrowIcon: {
      classes: 'nhsd-a-icon--size-s nhsd-a-icon--col-white nhsd-a-arrow',
      id: 'arrow_right',
    },
  });
}
Component7.args = {
  desktopColumns: 4,
  cards: component7Cards,
};
Component7.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${Component7(Component7.args)}`,
    },
  },
};

export const Component8 = Template.bind({});
Component8.storyName = 'Many cards - 3 columns';
const component8Cards = [];
for (let i = 0; i < 7; i += 1) {
  component8Cards.push({
    box: {
      classes: 'nhsd-a-box--bg-yellow',
    },
    boxLink: {
      href: '#',
      classes: 'nhsd-a-box-link--focus-orange',
    },
    title: 'Potential Coronavirus (COVID-19) symptoms reported through NHS Pathways and 111 online',
    date: '30 Sept 2020',
    arrowIcon: {
      classes: 'nhsd-a-icon--size-s nhsd-a-arrow',
      id: 'arrow_right',
    },
  });
}
Component8.args = {
  desktopColumns: 3,
  cards: component8Cards,
};
Component8.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${Component8(Component8.args)}`,
    },
  },
};

export const Component9 = Template.bind({});
Component9.storyName = 'Task cards - 1 columns';
const Component9Cards = [
  {
    box: {
      classes: 'nhsd-a-box--bg-dark-green',
    },
    boxLink: {
      href: '#',
    },
    title: "If you're a patient, book or manage your e-Refferal by visting NHS.UK",
    text: 'For those who have been referred to a hospital or clinic through the NHS e-Refferal Service.',
    arrowIcon: {
      classes: 'nhsd-a-icon--size-s nhsd-a-icon--col-white nhsd-a-arrow',
      id: 'arrow_right',
    },
  }, {
    box: {
      classes: 'nhsd-a-box--bg-dark-green',
    },
    boxLink: {
      href: '#',
    },
    title: 'NHS staff can find out how to help patients to manage their referral online',
    arrowIcon: {
      classes: 'nhsd-a-icon--size-s nhsd-a-icon--col-white nhsd-a-arrow',
      id: 'arrow_right',
    },
  }, {
    box: {
      classes: 'nhsd-a-box--bg-dark-green',
    },
    boxLink: {
      href: '#',
    },
    title: 'Information on the live service and alerts is available',
    arrowIcon: {
      classes: 'nhsd-a-icon--size-s nhsd-a-icon--col-white nhsd-a-arrow',
      id: 'arrow_right',
    },
  },
];
Component9.args = {
  desktopColumns: 1,
  cards: Component9Cards,
};
Component9.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${Component9(Component9.args)}`,
    },
  },
};
