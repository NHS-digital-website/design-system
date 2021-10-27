// Load icons
import nhsdIcon from '@/helpers/icons/inline-icon';

// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';

// Load stylesheet file
require('./_index.scss');

const componentName = 'Global footer';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}`;
const sourceCode = `// Sass import \n@use "nhsd/components/organisms/global-footer";

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

export const LabComponent = Template.bind({});
LabComponent.storyName = sbConfig.title.lab;
LabComponent.args = {
  blocks: [{
    title: 'About NHS Digital',
    links: [{
      classes: 'nhsd-a-link--col-dark-grey',
      href: '#',
      label: 'About us',
    }, {
      classes: 'nhsd-a-link--col-dark-grey',
      href: '#',
      label: 'Our strategy',
    }, {
      classes: 'nhsd-a-link--col-dark-grey',
      href: '#',
      label: 'Annual report and accounts',
    }, {
      classes: 'nhsd-a-link--col-dark-grey',
      href: '#',
      label: 'Our business plan',
    }, {
      classes: 'nhsd-a-link--col-dark-grey',
      href: '#',
      label: 'News and events',
    }, {
      classes: 'nhsd-a-link--col-dark-grey',
      href: '#',
      label: 'How we look after your information',
    }],
  }, {
    title: 'Legal',
    links: [{
      classes: 'nhsd-a-link--col-dark-grey',
      href: '#',
      label: 'Privacy and cookies',
    }, {
      classes: 'nhsd-a-link--col-dark-grey',
      href: '#',
      label: 'Terms and conditions',
    }, {
      classes: 'nhsd-a-link--col-dark-grey',
      href: '#',
      label: 'Accessibility',
    }, {
      classes: 'nhsd-a-link--col-dark-grey',
      href: '#',
      label: 'Cookie consent',
    }],
  }, {
    title: 'Get in touch',
    links: [{
      classes: 'nhsd-a-link--col-dark-grey',
      href: '#',
      label: 'Contact us',
    }, {
      classes: 'nhsd-a-link--col-dark-grey',
      href: '#',
      label: 'Press office',
    }, {
      classes: 'nhsd-a-link--col-dark-grey',
      href: '#',
      label: 'Freedom of information',
    }, {
      classes: 'nhsd-a-link--col-dark-grey',
      href: '#',
      label: 'Careers',
    }, {
      classes: 'nhsd-a-link--col-dark-grey',
      href: '#',
      label: 'Tell us what you think of our website',
    }],
  }, {
    title: 'Follow us on',
    links: [{
      classes: 'nhsd-a-link--col-dark-grey',
      href: 'https://www.linkedin.com/company/nhs-digital/',
      label: 'LinkedIn',
      external: true,
      icon: {
        svgSource: nhsdIcon('linkedin', true),
        classes: 'nhsd-a-icon--size-l nhsd-a-icon--col-dark-grey',
      },
    }, {
      classes: 'nhsd-a-link--col-dark-grey',
      href: 'https://twitter.com/NHSDigital',
      label: 'Twitter',
      external: true,
      icon: {
        svgSource: nhsdIcon('twitter', true),
        classes: 'nhsd-a-icon--size-l nhsd-a-icon--col-dark-grey',
      },
    }],
  }],
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};
