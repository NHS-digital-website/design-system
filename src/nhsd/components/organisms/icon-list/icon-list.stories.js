// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Icon list';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}`;
const sourceCode = `// Sass import \n@use "nhsd/components/organism/icon-list";

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
const iconList = [
  {
    IconLink: true,
    link: {
      href: '#',
      label: 'Simplifying patient communication with the NHS App',
    },
    title: 'Icon list item without link',
    text: 'The text above is a link',
    icon: {
      id: 'link',
      classes: 'nhsd-a-icon--size-xl nhsd-a-icon--col-blue',
    },
    arrowIcon: {
      classes: 'nhsd-a-arrow nhsd-a-icon--size-s nhsd-a-icon--col-black',
      id: 'arrow_right',
    },
  },
  {
    IconLink: false,
    title: 'Icon list item without link',
    text: 'The text above isnt a link',
    icon: {
      id: 'i_circled',
      classes: 'nhsd-a-icon--size-xl nhsd-a-icon--col-blue',
    },
    arrowIcon: {
      classes: 'nhsd-a-arrow nhsd-a-icon--size-s nhsd-a-icon--col-black',
      id: 'arrow_right',
    },
    last: false,
  },
  {
    IconLink: false,
    title: 'Icon list item without link',
    text: 'The text above isnt a link',
    icon: {
      id: 'i_circled',
      classes: 'nhsd-a-icon--size-xl nhsd-a-icon--col-blue',
    },
    arrowIcon: {
      classes: 'nhsd-a-arrow nhsd-a-icon--size-s nhsd-a-icon--col-black',
      id: 'arrow_right',
    },
    last: false,
  },
  {
    IconLink: true,
    link: {
      href: '#',
      label: 'Simplifying patient communication with the NHS App',
    },
    title: 'Icon list item without link',
    text: 'The text above is a link',
    icon: {
      id: 'link',
      classes: 'nhsd-a-icon--size-xl nhsd-a-icon--col-blue',
    },
    arrowIcon: {
      classes: 'nhsd-a-arrow nhsd-a-icon--size-s nhsd-a-icon--col-black',
      id: 'arrow_right',
    },
    last: true,
  },
];
LabComponent.args = {
  iconList,
  horizontalRule: {
    classes: 'nhsd-a-horizontal-rule--size-s',
  },
};

LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};
