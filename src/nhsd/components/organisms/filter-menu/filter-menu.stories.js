import pretty from 'pretty';

// Load icons
import nhsdIcon from '@/helpers/icons/inline-icon';

// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';

const componentName = 'Filter Menu';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}

### Components used
- <a href="/docs/design-system-components-molecules-search-bar--lab-component">Search Bar</a>
- <a href="/docs/design-system-components-molecules-filter-menu-section--lab-component">Filter Menu Section</a>

### Developer notes

- The **Filter menu organism** takes the search bar and filter menu section molecules to build a set of configurable menus used for filtering
- Javascript is required for the proper functioning of this component
- The titles and filter options are configurable
- The list of filters and their options can be of any length
- Includes small skip link atom to skip to content`;

const sourceCode = `// Sass import \n@use "nhsd/components/organisms/filter-menu";

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
const Template = (args) => pretty(template.render({ params: { ...args, nhsdIcon } }), { ocd: true });

export const LabComponent = Template.bind({});
LabComponent.storyName = sbConfig.title.lab;
LabComponent.args = {
  placeholder: 'Filter search...',
  filters: [
    {
      title: 'Heading 1',
      options: [
        'Filter 1',
        'Filter 2',
        'Filter 3',
      ],
    },
    {
      title: 'Heading 2',
      options: [
        'Filter 1',
        'Filter 2',
        'Filter 3',
      ],
    },
  ],
  button: {
    label: 'Filter results',
  },
  skipLink: {
    label: 'Skip to content',
    href: '#content-id',
    fullWidth: true,
    classes: 'nhsd-a-skip-link--small nhsd-!t-margin-bottom-3',
  },
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};
