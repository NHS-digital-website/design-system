// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config.js';

// Load template file
import template from  './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Tile';
const storyDescription = `${sbConfig.heading.lab}`;
const sourceCode = `// Sass import \n@use "nhsd/components/molecules/tile";

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
    notes: `${sbConfig.heading.basicRules}`,
  },
};

// Component template
const Template = (args) => {
  return template.render({ params: {...args} });
};

export const LabComponent = Template.bind({});
LabComponent.storyName = sbConfig.title.lab;
LabComponent.args = {
  classes: 'nhsd-m-tile--light-grey',
  picture: {
    classes: 'nhsd-m-tile__picture',
    sourceSet: [{
      'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
    }],
    alt: 'Abstract lights',
  },
  heading: 'Potential Coronavirus (COVID-19) symptoms reported through NHS Pathways and 111 online, Week Ending 27th September 2020',
  body: 'If you have any other questions about NHSmail, our national helpdesk is open 24 hours a day, 365 days a year on 0333 200 1133, or email us at: helpdesk@nhs.net.',
  button: {
    label: 'Read more about COVID-19',
    classes: 'nhsd-m-tile__button',
  },
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};

export const WithoutPictureComponent = Template.bind({});
WithoutPictureComponent.storyName = 'Without picture';
WithoutPictureComponent.args = {
  classes: 'nhsd-m-tile--blue',
  heading: 'Potential Coronavirus (COVID-19) symptoms reported through NHS Pathways and 111 online, Week Ending 27th September 2020',
  body: 'If you have any other questions about NHSmail, our national helpdesk is open 24 hours a day, 365 days a year on 0333 200 1133, or email us at: helpdesk@nhs.net.',
  button: {
    label: 'More about what we do',
    classes: 'nhsd-a-button--invert nhsd-m-tile__button'
  },
};
WithoutPictureComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${WithoutPictureComponent(WithoutPictureComponent.args)}`,
    },
  },
};

export const YellowWithPictureComponent = Template.bind({});
YellowWithPictureComponent.storyName = 'Yellow with picture';
YellowWithPictureComponent.args = {
  classes: 'nhsd-m-tile--yellow',
  picture: {
    classes: 'nhsd-m-tile__picture',
    sourceSet: [{
      'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
    }],
    alt: 'Corona virus',
  },
  heading: 'Potential Coronavirus (COVID-19) symptoms reported through NHS Pathways and 111 online, Week Ending 27th September 2020',
  body: 'If you have any other questions about NHSmail, our national helpdesk is open 24 hours a day, 365 days a year on 0333 200 1133, or email us at: helpdesk@nhs.net.',
  button: {
    label: 'More about what we do',
    classes: 'nhsd-m-tile__button'
  },
};
YellowWithPictureComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${YellowWithPictureComponent(YellowWithPictureComponent.args)}`,
    },
  },
};
