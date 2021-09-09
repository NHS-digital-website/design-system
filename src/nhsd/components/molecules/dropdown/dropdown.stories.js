// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Dropdown';
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
  items: [{
    text: 'Leeds General Infirmary (D6A2L)'
  },{
    text: 'Leeds West CCG HQ (03CAR)'
  },{
    text: 'Leeds Community and Mental Health Unit (BP4)'
  },{
    text: 'Leeds Community Dental Services (V14366)'
  }]
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};
