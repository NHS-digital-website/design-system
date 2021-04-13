// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Selector toggle card list';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}`;
const sourceCode = `// Sass import \n@use "nhsd/components/organism/selector-card-toggle-list";

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
const toggleCardList = [
  {
    classes: 'nhsd-a-box-link',
    box: {
      classes: 'nhsd-a-box nhsd-a-box--bg-white nhsd-a-box--border-grey ',
    },
    selector: {
      nested: true,
    },
    title: 'Preference',
    text: 'These mean we can show you content',
    label: 'this is a preference toggle',
  },
  {
    classes: 'nhsd-a-box-link',
    box: {
      classes: 'nhsd-a-box nhsd-a-box--bg-white nhsd-a-box--border-grey ',
    },
    selector: {
      nested: true,
      classes: 'nhsd-a-selector-toggle--start',
    },
    title: 'Analytics',
    text: 'This means we can see what people do on our site',
    label: 'this is a  analytics toggle',
  },
  {
    classes: 'nhsd-a-box-link',
    box: {
      classes: 'nhsd-a-box nhsd-a-box--bg-white nhsd-a-box--border-grey ',
    },
    selector: {
      nested: true,
      classes: 'nhsd-a-selector-toggle--cancel',
    },
    title: 'Other cookies',
    text: "Cookies that don't fit in other categories",
    label: 'this is a other cookies toggle',
  },
];
LabComponent.args = {
  classes: 'nhsd-o-selector-toggle-card-list__items',
  toggleCardList,
};

LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};
