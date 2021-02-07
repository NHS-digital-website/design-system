// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Skip link';
const storyDescription = `Skip link allows keyboard and screen reader users to skip the main navigation, and go from the very top of the document to the main contents.

${sbConfig.heading.basicRules}

- The **Skip link** component should be the very first element receiving keyboard focus in the document.

### Components used
- <a href="/docs/design-system-components-atoms-link--lab-component">Link atom</a>

### Tokens used
- Colours
- Grid
- Spacing
- Typography
`;
const sourceCode = `// Sass import \n@use "nhsd/components/atoms/skip-link";

// HTML`;

// Component defaults
export default {
  title: `${sbConfig.title.designSystem} / ${sbConfig.title.components} / ${sbConfig.title.atoms} / ${componentName}`,
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
  label: 'Skip to main content',
  href: '#main-content',
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};
