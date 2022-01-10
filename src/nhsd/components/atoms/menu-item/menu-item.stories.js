// Load icons
import nhsdIcon from '@/helpers/icons/inline-icon';

// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';

const componentName = 'Menu item';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}

### Components used
- <a href="/docs/design-system-components-atoms-icon--lab-component">Icon atom</a>

### Tokens used
- Colours
- Fonts
- Spacing
- Transition
- Typography
- Utils

### Developer notes

- The **Menu item** atom is used by the <a href="/docs/design-system-components-molecules-menu-bar--lab-component">Menu bar molecule</a>, which is used by the <a href="/story/design-system-components-organisms-global-header--lab">Global Header organism</a>.
- The **Menu item** is only responsive when used in the menu bar molecule.`;
const sourceCode = '// Sass import \n@use "nhsd/components/atoms/menu-item";\n\n// HTML';

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
	argTypes: {
    label: {
      control: 'text', defaultValue: 'About NHS Digital', description: 'Clear, easy to understand text that explains where the user is taken when they click the link.', mandatory: true,
    },
    href: { control: 'text', description: '**href** determines the URL the user is taken to when they click the element.', required: true },
    external: { control: 'boolean', description: 'Determines whether the URL should open in a new tab. If **external** is set to true, screen readers read out "*...(opens in a new tab)*" after the link title.', defaultValue: false },
	},
};

// Component template
const Template = (args) => template.render({ params: { ...args }, nhsdIcon });

export const LabComponent = Template.bind({});
LabComponent.args = {
  label: 'Hello world',
};
LabComponent.storyName = sbConfig.title.lab;
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode} ${LabComponent(LabComponent.args)} `,
    },
  },
};

export const Story1 = Template.bind({});
Story1.args = {
  label: 'External link',
  href: 'https://valtech.com',
  external: true,
};
Story1.storyName = 'External link';
Story1.parameters = {
  docs: {
    source: {
      code: `${sourceCode} ${Story1(Story1.args)} `,
    },
  },
};

export const Story2 = Template.bind({});
Story2.args = {
  label: 'I\'m so active, baby',
  classes: 'js-active',
};
Story2.storyName = 'Activated menu item';
Story2.parameters = {
  docs: {
    source: {
      code: `${sourceCode} ${Story2(Story2.args)} `,
    },
  },
};
