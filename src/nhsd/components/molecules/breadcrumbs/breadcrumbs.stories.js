// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Breadcrumbs';
const storyDescription = `Use breadcrumbs to help users understand where they are in the website.

${sbConfig.heading.basicRules}

We use \`aria-label="breadcrumb"\` as a label in the nav element to let people who use screen readers know what it is.

### Components used
- <a href="/docs/design-system-components-atoms-icon--lab-component">Icon atom</a>
- <a href="/docs/design-system-components-atoms-link--lab-component">Link atom</a>

### Tokens used
- Colour
- Typography
- Spacing
- Fonts`;
const sourceCode = `// Sass import \n@use "nhsd/components/molecules/breadcrumbs";

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
  argTypes: {
    firstLevel: { control: 'object', description: 'Breadcrumb link' },
    secondLevel: { control: 'object', description: 'Breadcrumb link' },
    thirdLevel: { control: 'object', description: 'Breadcrumb link' },
    fourthLevel: { control: 'object', description: 'Breadcrumb link' },
    currentLevel: { control: 'object', description: 'Breadcrumb link' },
  },
};

// Component template
const Template = (args) => template.render({ params: { ...args } });

export const LabComponent = Template.bind({});
LabComponent.storyName = sbConfig.title.lab;
LabComponent.args = {
  firstLevel: {
    label: 'NHS Digital',
    classes: 'nhsd-a-link nhsd-a-link--col-dark-grey',
  },
  secondLevel: {
    label: 'Second level',
    classes: 'nhsd-a-link nhsd-a-link--col-dark-grey',
  },
  thirdLevel: {
    label: 'Third level',
    classes: 'nhsd-a-link nhsd-a-link--col-dark-grey',
  },
  fourthLevel: {
    label: 'Fourth level',
    classes: 'nhsd-a-link nhsd-a-link--col-dark-grey',
  },
  currentLevel: {
    label: 'Current page',
    classes: 'nhsd-a-link nhsd-a-link--col-dark-grey',
    current: true,
  },
  icon: {
    id: 'chevron_right',
    classes: 'nhsd-a-icon--size-xxs nhsd-a-icon--col-dark-grey',
  },
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};

export const Story1 = Template.bind({});
Story1.storyName = 'Breadcrumbs / full display';
Story1.args = {
  firstLevel: {
    label: 'NHS Digital',
    classes: 'nhsd-a-link nhsd-a-link--col-dark-grey',
  },
  secondLevel: {
    label: 'Second level',
    classes: 'nhsd-a-link nhsd-a-link--col-dark-grey',
  },
  thirdLevel: {
    label: 'Third level',
    classes: 'nhsd-a-link nhsd-a-link--col-dark-grey',
  },
  fourthLevel: {
    label: 'Fourth level',
    classes: 'nhsd-a-link nhsd-a-link--col-dark-grey',
  },
  currentLevel: {
    label: 'Current page',
    classes: 'nhsd-a-link nhsd-a-link--col-dark-grey',
    current: true,
  },
  icon: {
    id: 'chevron_right',
    classes: 'nhsd-a-icon--size-xxs nhsd-a-icon--col-dark-grey',
  },
};
Story1.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${Story1(Story1.args)}`,
    },
  },
};

export const Story2 = Template.bind({});
Story2.storyName = 'Breadcrumbs / compressed with elipsis (WIP)';
Story2.args = {
  firstLevel: {
    label: 'NHS Digital',
    classes: 'nhsd-a-link nhsd-a-link--col-dark-grey',
  },
  secondLevel: {
    label: 'Second level',
    classes: 'nhsd-a-link nhsd-a-link--col-dark-grey',
    compact: true,
  },
  thirdLevel: {
    label: 'Third level',
    classes: 'nhsd-a-link nhsd-a-link--col-dark-grey',
    compact: true,
  },
  fourthLevel: {
    label: 'Fourth level',
    classes: 'nhsd-a-link nhsd-a-link--col-dark-grey',
  },
  currentLevel: {
    label: 'Current page',
    classes: 'nhsd-a-link nhsd-a-link--col-dark-grey',
    current: true,
  },
  icon: {
    id: 'chevron_right',
    classes: 'nhsd-a-icon--size-xxs nhsd-a-icon--col-dark-grey',
  },
  menuIcon: {
    id: 'ellipsis',
    classes: 'nhsd-a-icon--size-xs nhsd-a-icon--col-blue',
  },
};
Story2.parameters = {
  docs: {
    description: {
      story: 'The interactive ellipsis version is still WIP and not ready to be used.',
    },
    source: {
      code: `${sourceCode}\n${Story2(Story2.args)}`,
    },
  },
};
