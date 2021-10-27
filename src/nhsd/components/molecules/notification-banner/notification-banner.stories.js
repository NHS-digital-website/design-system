// Load icons
import nhsdIcon from '@/helpers/icons/inline-icon';

// prettify html
import pretty from 'pretty';

// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Notification Banner';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}
- The Notification banner will not close if javascript is not available.
`;
const sourceCode = `// Sass import \n@use "nhsd/components/molecules/icon-list-item";

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
  icon: {
    svgSource: nhsdIcon('i_circled'),
    classes: 'nhsd-a-icon--size-xl nhsd-a-icon--col-white',
  },
  link: {
    label: 'with a link',
    classes: 'nhsd-a-link--col-white',
  },
  classes: 'nhsd-m-notification-banner--information',
  closeIcon: {
    svgSource: nhsdIcon('x'),
    classes: 'nhsd-a-icon--size-s nhsd-a-icon--col-white',
  },
  box: {
    classes: 'nhsd-a-box--bg-dark-grey',
  },
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode} ${pretty(LabComponent(LabComponent.args), { ocd: true })} `,
    },
  },
};

export const WarningComponent = Template.bind({});
WarningComponent.storyName = 'Warning Notification Banner';
WarningComponent.args = {
  icon: {
    svgSource: nhsdIcon('exclamation_circled'),
    classes: 'nhsd-a-icon--size-xl ',
  },
  link: {
    label: 'with a link',
  },
  classes: 'nhsd-m-notification-banner--warning',
  closeIcon: {
    svgSource: nhsdIcon('x'),
    classes: 'nhsd-a-icon--size-s',
  },
  box: {
    classes: 'nhsd-a-box--bg-light-yellow',
  },
};
WarningComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode} ${pretty(WarningComponent(WarningComponent.args), { ocd: true })} `,
    },
  },
};

export const ErrorComponent = Template.bind({});
ErrorComponent.storyName = 'Error Notification Banner';
ErrorComponent.args = {
  icon: {
    svgSource: nhsdIcon('exclamation_triangle'),
    classes: 'nhsd-a-icon--size-xl nhsd-a-icon--col-white',
  },
  link: {
    label: 'with a link',
    classes: 'nhsd-a-link--col-white',
  },
  classes: 'nhsd-m-notification-banner--error',
  closeIcon: {
    svgSource: nhsdIcon('x'),
    classes: 'nhsd-a-icon--size-s nhsd-a-icon--col-white',
  },
  box: {
    classes: 'nhsd-a-box--bg-red',
  },
};
ErrorComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode} ${pretty(ErrorComponent(ErrorComponent.args), { ocd: true })} `,
    },
  },
};

export const IrremovableComponent = Template.bind({});
IrremovableComponent.storyName = 'Irremovable Notification Banner';
IrremovableComponent.args = {
  icon: {
    svgSource: nhsdIcon('i_circled'),
    classes: 'nhsd-a-icon--size-xl nhsd-a-icon--col-white',
  },
  link: {
    label: 'with a link',
    classes: 'nhsd-a-link--col-white',
  },
  classes: 'nhsd-m-notification-banner--information nhsd-m-notification-banner--irremovable',
  closeIcon: {
    svgSource: nhsdIcon('x'),
    classes: 'nhsd-a-icon--size-s nhsd-a-icon--col-white',
  },
  box: {
    classes: 'nhsd-a-box--bg-dark-grey',
  },
};
IrremovableComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode} ${pretty(IrremovableComponent(IrremovableComponent.args), { ocd: true })} `,
    },
  },
};

export const InContentBanner = Template.bind({});
InContentBanner.storyName = 'In Content Notification Banner';
InContentBanner.args = {
  inContent: true,
  icon: {
    svgSource: nhsdIcon('exclamation_circled'),
    classes: 'nhsd-a-icon--size-xl ',
  },
  link: {
    label: 'with a link',
  },
  classes: 'nhsd-m-notification-banner--warning nhsd-m-notification-banner--irremovable',
  closeIcon: {
    svgSource: nhsdIcon('x'),
    classes: 'nhsd-a-icon--size-s nhsd-a-icon--col-white',
  },
  box: {
    classes: 'nhsd-a-box--bg-light-yellow',
  },
};
InContentBanner.parameters = {
  docs: {
    source: {
      code: `${sourceCode} ${pretty(IrremovableComponent(InContentBanner.args), { ocd: true })} `,
    },
  },
};
