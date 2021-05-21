// prettify html
import pretty from 'pretty';

// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Contact us';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}
- useful link on how to make telephone and email hrefs <a href='https://www.elegantthemes.com/blog/wordpress/call-link-html-phone-number'>here</a>`;
const sourceCode = `// Sass import \n@use "nhsd/components/molecules/contact-us";
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
  box: {
    classes: 'nhsd-a-box--bg-light-blue-10',
  },
  heading: 'Contact Us',
  subHeading: 'Media enquires',
  phone: {
    href: 'tel:0330 30 33 888',
    label: '0330 30 33 888',
  },
  email: {
    href: 'mailto:media@nhsdigital.nhs.net',
    label: 'media@nhsdigital.nhs.net',
  },
};

LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${pretty(LabComponent(LabComponent.args), { ocd: true })}`,
    },
  },
};
