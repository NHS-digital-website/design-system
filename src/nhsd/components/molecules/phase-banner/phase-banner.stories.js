// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Phase Banner';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}

### Components used
- <a href="/docs/design-system-components-atoms-box--lab-component">Box</a>
- <a href="/docs/design-system-components-atoms-tag--lab-component">Tag</a>
- <a href="/docs/design-system-components-atoms-link--lab-component">Link</a>

### Tokens used
- Spacing

### Develop notes
- Link atom used in the main text is optional and used here as an example`;

const sourceCode = `// Sass import \n@use "nhsd/components/molecules/phase-banner";

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
  tag: {
    classes: 'nhsd-a-tag--phase',
    label: 'ALPHA',
  },
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};

export const BetaPhaseBanner = Template.bind({});
BetaPhaseBanner.storyName = sbConfig.title.BetaPhaseBanner;
BetaPhaseBanner.args = {
  tag: {
    classes: 'nhsd-a-tag--phase',
    label: 'BETA',
  },
};
BetaPhaseBanner.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${BetaPhaseBanner(BetaPhaseBanner.args)}`,
    },
  },
};
