/* eslint-disable no-useless-escape */

// Load icons
import nhsdIcon from '@/helpers/icons/inline-icon';

// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';

// Load stylesheet file
require('./_index.scss');

const componentName = 'Dropdown';
const storyDescription = `${sbConfig.heading.default}

${sbConfig.heading.basicRules}
Dropdowns can be used alongside buttons and search bars to create selection and auto-complete menus.

### Using dropdowns
Dropdowns can be used either statically or dynamically. 

#### Static dropdowns
A static dropdown (such as a button menu) doesn't require JS.
Instead, menu items are provided in the HTML at page load and the dropdown menu can be opened and closed by using the \`data-dropdown-toggle\` attribute.

#### Dynamic dropdowns
Dynamic dropdowns (such as autocompletes) require JS to update results.
This can be achieved via the JS API, \`nhsd('#button-menu1').trigger('dropdown-set-items', items)\`

Menu items should be passed as an array of items:

| Parameter            | Type          | Description    |
| :---                 | :---          | :---           |
| text                 | String        | Menu item text |
| href (optional)      | String        | Menu item link |
| onClick (optional)   | function      | On click event |

### JS API events

These events can be listened to: \`nhsd('#button-menu1').on('dropdown-selection', () => [some action])\`

Or triggered: \`nhsd('#button-menu1').trigger('dropdown-open')\`

| Event                | Args        | Description                 |
| :---                 | :---        | :---                        |
| dropdown-selection   | HTMLElement | Sets selected dropdown item |
| dropdown-open        | none        | Opens dropdown              |
| dropdown-close       | none        | Closes dropdown             |
| dropdown-toggle      | none        | Toggles open/close state    |
| dropdown-set-items   | object      | Sets dropdown items         |

### Data attributes

| Attribute                 | Args               | Description                                                                                           |
| :---                      | :---               | :---                                                                                                  |
| data-dropdown-open        | dropdown id        | Opens dropdown. An ID can be provided as value if applied outside dropdown component                  |
| data-dropdown-close       | dropdown id        | Closes dropdown. An ID can be provided as value if applied outside dropdown component                 |
| data-dropdown-toggle      | dropdown id        | Toggles open/close state. An ID can be provided as value if applied outside dropdown component        |
| data-dropdown-auto-close  | "true", "false"    | Applied to base class to enable / disable auto close on click. If not provided will default to true   |
`;

const sourceCode = `// Sass import \n@use "nhsd/components/organism/dropdown";

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
  argTypes: {
    demoType: {
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
    classes: {
      table: {
        disable: true,
      },
    },
  },
};

// Component template
const Template = (args) => template.render({ params: { ...args } });

export const DefaultComponent = Template.bind({});
DefaultComponent.storyName = sbConfig.title.defaultStory;
DefaultComponent.args = {
  id: 'autocomplete-default',
  demoType: 'auto-complete',
  classes: 'nhsd-o-dropdown--full-width',
};
DefaultComponent.parameters = {
  backgrounds: {
    default: 'dim',
  },
  docs: {
    source: {
      code: `${sourceCode}\n${DefaultComponent(DefaultComponent.args)}`,
    },
  },
};

export const AutoComplete = Template.bind({});
AutoComplete.storyName = 'Auto complete';
AutoComplete.args = {
  id: 'autocomplete1',
  demoType: 'auto-complete',
  classes: 'nhsd-o-dropdown--full-width',
};
AutoComplete.parameters = {
  backgrounds: {
    default: 'dim',
  },
  docs: {
    description: {
      story: 'An example auto complete dropdown including example JavaScript implementation code.',
    },
    source: {
      code: `${sourceCode}\n${AutoComplete(AutoComplete.args)}`,
    },
  },
};

export const ButtonMenu = Template.bind({});
ButtonMenu.storyName = 'Button menu';
ButtonMenu.args = {
  id: 'button-menu1',
  demoType: 'button-menu',
  button: {
    classes: 'nhsd-a-button',
    label: 'Dropdown Menu',
    icon: {
      svgSource: nhsdIcon('chevron_down'),
      classes: 'nhsd-a-icon--size-s',
    },
    attributes: [{
      key: 'data-dropdown-toggle',
    }],
    aria: {
      'aria-expanded': 'false',
      'aria-owns': 'button-menu1-dropdown-list',
    },
  },
  dropdownItems: [{
    text: 'Leeds General Infirmary (D6A2L)',
  }, {
    text: 'Leeds West CCG HQ (03CAR)',
  }, {
    text: 'Leeds Community and Mental Health Unit (BP4)',
  }, {
    text: 'Leeds Community Dental Services (V14366)',
  }],
};
ButtonMenu.parameters = {
  docs: {
    description: {
      story: 'An example static button menu dropdown.',
    },
    source: {
      code: `${sourceCode}\n${ButtonMenu(ButtonMenu.args)}`,
    },
  },
};

export const SearchFilterMenu = Template.bind({});
SearchFilterMenu.storyName = 'Search Filter Menu';
SearchFilterMenu.args = {
  id: 'searchFilter1',
  demoType: 'filter-search',
  classes: 'nhsd-o-dropdown--full-width',
};
SearchFilterMenu.parameters = {
  docs: {
    description: {
      story: 'An example static button menu dropdown.',
    },
    source: {
      code: `${sourceCode}\n${SearchFilterMenu(SearchFilterMenu.args)}`,
    },
  },
};

export const RightAligned = Template.bind({});
RightAligned.storyName = 'Right aligned';
RightAligned.args = {
  classes: 'nhsd-o-dropdown--right-align',
  id: 'button-menu2',
  ...ButtonMenu.args,
};
RightAligned.parameters = {
  docs: {
    description: {
      story: 'A right aligned variant of the button menu.',
    },
    source: {
      code: `${sourceCode}\n${RightAligned(RightAligned.args)}`,
    },
  },
};
