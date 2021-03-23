// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Filter Menu Section';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}

### Components used
- <a href="/docs/design-system-components-atoms-horizontal-rule--lab-component">Horizontal rule atom</a>
- <a href="/docs/design-system-components-atoms-icon-rule--lab-component">Icon atom</a>
- <a href="/docs/design-system-components-atoms-checkbox--lab-component">Checkbox atom</a>

### Tokens used
- Spacing
- Colours

### Developer notes

- The **Filter menu section molecule** takes atoms to populate an accordion style menu with various configurable filter options
- Javascript is required for the proper functioning of this component
- The heading and filter options are configurable
- The list of filter options can be of any length`;

const sourceCode = `// Sass import \n@use "nhsd/components/molecules/filter-menu-section";

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
  title: 'Heading',
  options: [
    'Filter 1',
    'Filter 2',
    'Filter 3',
  ],
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};
