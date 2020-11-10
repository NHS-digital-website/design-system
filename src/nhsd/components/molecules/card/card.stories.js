// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config.js';

// Load template file
import template from  './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Card';
const storyDescription = `${sbConfig.heading.lab}`;
const sourceCode = `// Sass import \n@use "nhsd/components/molecules/card";

// HTML`;

// Component defaults
export default {
  title: `${sbConfig.title.designSystem} / ${sbConfig.title.components} / ${sbConfig.title.molecules} / ${componentName}`,
  parameters: {
    docs: {
      description: {
        component: storyDescription
      }
    },
    notes: `${sbConfig.heading.basicRules}
    - Heading always must be present.
    - If icon is present, there is no date.
    - If icon is present, the min. heading hight must be 45px.
    - Text element is always followed by a button.
    - If card has a "button" or "arrow link", the card contents have to be wrapped in an \`<a>\` tag.
    - Card always has a focus state - regardless if it has a link or not.`,
  },
};

// Component template
const Template = (args) => {
  return template.render({ params: {...args} });
};

export const LabComponent = Template.bind({});
LabComponent.storyName = sbConfig.title.lab;
LabComponent.args = {
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
  body: 'We’re pioneering new ways of gathering and using data, developing new technologies to support those on the front line of care, and collaborating across the NHS to deliver better services.',
  button: {
    label: 'More about what we do',
    classes: 'nhsd-m-card__button',
    el: 'span'
  },
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};

export const ComponentVariant1 = Template.bind({});
ComponentVariant1.storyName = 'Variant #1';
ComponentVariant1.args = {
  box: {
    classes: 'nhsd-a-box--border-light-grey',
  },
  picture: {
    sourceSet: [{
      'media': '(max-width: 500px)',
      'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
    }, {
      'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_992x661.jpg',
    }],
    alt: '2 scientists carry out tests in a laboratory',
  },
  title: 'About NHS Digital',
  body: `We're pioneering new ways of gathering and using data, developing new technologies to support those on the front line of care, and collaborating across the NHS to deliver better services.`,
  button: {
    label: 'More about what we do',
    el: 'span',
  },
  link: {
    href: '#',
  },
};
ComponentVariant1.parameters = {
  docs: {
    description: {
      story: `${sbConfig.heading.details}:
- White background, light grey border, black heading and dark grey text
- Picture atom used with multiple, responsive image sources
- The whole card links
- Primary button (span element) - receives focus on ard focus and hover; also presses down when the card is pressed
- Yellow outline on focus and hover (default) - box border is hidden when in focus state`,
    },
    source: {
      code: `${sourceCode}\n${ComponentVariant1(ComponentVariant1.args)}`,
    },
  },
};

export const ComponentVariant2 = Template.bind({});
ComponentVariant2.storyName = 'Variant #2';
ComponentVariant2.args = {
  box: {
    classes: 'nhsd-a-box--bg-dark-grey ',
  },
  title: 'About NHS Digital',
  body: 'We’re pioneering new ways of gathering and using data, developing new technologies to support those on the front line of care, and collaborating across the NHS to deliver better services.',
  button: {
    classes: 'nhsd-a-button--invert',
    label: 'More about what we do',
    el: 'span',
  },
  link: {
    href: '#',
  },
};
ComponentVariant2.parameters = {
  docs: {
    description: {
      story: `${sbConfig.heading.details}:
- Dark grey background, white heading and text
- The whole card links
- Invert button (span element) - receives focus on ard focus and hover; also presses down when the card is pressed
- Yellow outline on focus and hover (default)`,
    },
    source: {
      code: `${sourceCode}\n${ComponentVariant2(ComponentVariant2.args)}`,
    },
  },
};

export const ComponentVariant3 = Template.bind({});
ComponentVariant3.storyName = 'Variant #3';
ComponentVariant3.args = {
  box: {
    classes: 'nhsd-a-box--bg-light-grey',
  },
  date: '28 Sep 2020',
  title: 'Creating the COVID-19 text service for vulnerable people',
  body: 'A small group from NHSX, NHS Digital, NHS Business Services Authority and the Behavioural Insights Team has developed a text service for those most threatened by COVID-19.',
  link: {
    href: '#',
  },
};
ComponentVariant3.parameters = {
  docs: {
    description: {
      story: `${sbConfig.heading.details}:
- Light grey background, black heading, dark grey text
- Date shown on top
- The whole card links
- Yellow outline on focus and hover (default)`,
    },
    source: {
      code: `${sourceCode}\n${ComponentVariant3(ComponentVariant3.args)}`,
    },
  },
};

export const ComponentVariant4 = Template.bind({});
ComponentVariant4.storyName = 'Variant #4';
ComponentVariant4.args = {
  box: {
    classes: 'nhsd-a-box--bg-light-grey',
  },
  title: 'About NHS Digital',
  body: `We're pioneering new ways of gathering and using data, developing new technologies to support those on the front line of care, and collaborating across the NHS to deliver better services.`,
  link: {
    href: 'https://gov.uk',
    target: '_blank',
  },
  button: {
    label: 'More about what we do',
  },
  tag: {
    classes: 'nhsd-a-tag--bg-dark-grey',
    label: 'NEWS',
  },
};
ComponentVariant4.parameters = {
  docs: {
    description: {
      story: `${sbConfig.heading.details}:
- Light grey background, black heading, dark grey text
- Directonal icon at the bottom (moves 10px to the right on card focus and hover)
- Dark grey tag
- The whole card links - external link - announces to SR users!
- Primary button (span element) - receives yellow focus on ard focus and hover; also presses down when the card is pressed
- Yellow outline on focus and hover (default)`,
    },
    source: {
      code: `${sourceCode}\n${ComponentVariant4(ComponentVariant4.args)}`,
    },
  },
};

export const ComponentVariant5 = Template.bind({});
ComponentVariant5.storyName = 'Variant #5';
ComponentVariant5.args = {
  classes: 'nhsd-m-card--with-icon',
  box: {
    classes: 'nhsd-a-box--bg-blue',
  },
  title: 'Potential Coronavirus (COVID-19) symptoms reported through NHS Pathways and 111 online, Week Ending 27th September 2020',
  link: {
    href: 'https://gov.uk',
    target: '_blank',
  },
  arrow: true,
  tag: {
    classes: 'nhsd-a-tag--bg-light-grey',
    label: 'Info only',
  },
};
ComponentVariant5.parameters = {
  docs: {
    description: {
      story: `${sbConfig.heading.details}:
- Blue background, white text
- Inline links
- Hexagonal icon in the TR corner
- Directonal icon at the bottom (moves 10px to the right on card focus and hover)
- Light grey tag
- Yellow outline on focus and hover (default)`,
    },
    source: {
      code: `${sourceCode}\n${ComponentVariant5(ComponentVariant5.args)}`,
    },
  },
};

export const ComponentVariant6 = Template.bind({});
ComponentVariant6.storyName = 'Variant #6';
ComponentVariant6.args = {
  link: {
    href: '#',
  },
  classes: 'nhsd-m-card--focus-orange',
  box: {
    classes: 'nhsd-a-box--bg-yellow',
  },
  title: 'About NHS Digital',
  body: 'We’re pioneering new ways of gathering and using data, developing new technologies to support those on the front line of care, and collaborating across the NHS to deliver better services.',
  button: {
    label: 'More about what we do',
    classes: 'nhsd-m-card__button',
    el: 'span'
  },
};
ComponentVariant6.parameters = {
  docs: {
    description: {
      story: `${sbConfig.heading.details}:
- Yellow background, black text
- The whole card links
- Orange outline on focus and hover
- Primary button (span element) - receives focus on ard focus and hover; also presses down when the card is pressed`,
    },
    source: {
      code: `${sourceCode}\n${ComponentVariant6(ComponentVariant6.args)}`,
    },
  },
};

export const ComponentVariant7 = Template.bind({});
ComponentVariant7.storyName = 'Variant #7';
ComponentVariant7.args = {
  classes: 'nhsd-m-card--focus-orange',
  box: {
    classes: 'nhsd-a-box--bg-yellow',
  },
  title: 'NHSmail national helpdesk',
  body: 'If you have any other questions about NHSmail, our national helpdesk is open 24 hours a day, 365 days a year on <a href="#" class="nhsd-a-link nhsd-a-link--dark">0333 200 1133</a>, or email us at: <a href="#" class="nhsd-a-link nhsd-a-link--dark">helpdesk@nhs.net</a>.',
};
ComponentVariant7.parameters = {
  docs: {
    description: {
      story: `${sbConfig.heading.details}:
- Yellow background, black text
- Dark inline links - light on focus and hover
- Orange outline on focus and hover`,
    },
    source: {
      code: `${sourceCode}\n${ComponentVariant7(ComponentVariant7.args)}`,
    },
  },
};
