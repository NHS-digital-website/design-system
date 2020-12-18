// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config.js';

// Load template file
import template from  '../../organisms/card-list/template.njk';
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
  ]
};
Component1.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${Component1(Component1.args)}`,
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
  ]
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
      link: {
        href: '#',
      },
      figure: {
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
      figure: {
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
      figure: {
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
      figure: {
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
  ]
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
      link: {
        href: '#',
      },
      figure: {
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
      figure: {
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
      figure: {
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
      figure: {
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
  ]
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
}
Component6.storyName = 'Colour cards in nested grid';
Component6.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${Component5({
        ...Component5.args,
        grid: {
          classes: 'nhsd-t-grid--full-width',
        },
      })}.innerHTML}`,
    },
  },
};

export const Component7 = Template.bind({});
Component7.storyName = 'Many cards - 4 columns';
let component7Cards = [];
for (let i = 0; i < 9; i ++) {
  component7Cards.push({
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
let component8Cards = [];
for (let i = 0; i < 7; i ++) {
  component8Cards.push({
    classes: 'nhsd-m-card--focus-orange',
    box: {
      classes: 'nhsd-a-box--bg-yellow',
    },
    link: {
      href: '#',
    },
    title: 'Potential Coronavirus (COVID-19) symptoms reported through NHS Pathways and 111 online',
    date: '30 Sept 2020',
    arrowIcon: {
      classes: 'nhsd-a-icon--size-s nhsd-m-card__arrow',
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
