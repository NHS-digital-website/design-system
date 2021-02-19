// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Character Block';
const storyDescription = `${sbConfig.heading.lab}

### Components used
- <a href="/docs/design-system-components-atoms-icon--lab-component">Icon atom</a>`;
const sourceCode = '// Sass import \n@use "nhsd/components/atoms/character-block";\n\n// HTML';

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
      control: 'text', defaultValue: 'A', description: 'Character displayed inside the character block atom', mandatory: true,
    },
    icon: {
      control: 'object',
      defaultValue: {},
      description: 'JSON object containing icon parameters',
    },
    // iconPosition: {
    //   control: {
    //     type: 'select',
    //     options: [
    //       'left',
    //       'right',
    //     ],
    //   },
    //   defaultValue: 'left',
    //   description: 'When used with a label sets position of icon in character block',
    // },
    href: {
      control: 'text', defaultValue: '/', description: 'href for an `<a>` character block. If a href isn\'t required a `<span>` should be used.',
    },
    large: { control: 'boolean', defaultValue: false, description: 'When set styles with `BEM` modifier, `nhsd-a-character-block--large`' },
    disabled: { control: 'boolean', defaultValue: false, description: 'When set styles with `BEM` modifier, `nhsd-a-character-block--disabled`' },
    active: { control: 'boolean', defaultValue: false, description: 'When set styles with `BEM` modifier, `nhsd-a-character-block--active`' },
  },
};

// Component template
const Template = (args) => template.render({ params: { ...args } });

// Story 1 - Introduction / Playground
export const LabComponent = Template.bind({});
LabComponent.storyName = sbConfig.title.lab;
LabComponent.args = {
  label: 'A',
  href: '/',
  icon: {},
};
LabComponent.parameters = {
  docs: {
    source: {
        code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};

// Story 1 - Link
export const LinkComponent = Template.bind({});
LinkComponent.storyName = 'Default (navigable)';
LinkComponent.args = {
  label: 'A',
  href: '/',
};
LinkComponent.parameters = {
  docs: {
    source: {
        code: `${sourceCode}\n${LinkComponent(LinkComponent.args)}`,
    },
  },
};

// Story 2 - Active link
export const ActiveLinkComponent = Template.bind({});
ActiveLinkComponent.storyName = 'Active link';
ActiveLinkComponent.args = {
  label: 'A',
  href: '/',
  active: true,
};
ActiveLinkComponent.parameters = {
  docs: {
    source: {
        code: `${sourceCode}\n${ActiveLinkComponent(ActiveLinkComponent.args)}`,
    },
  },
};

// Story 3 - Disabled
export const DisabledComponent = Template.bind({});
DisabledComponent.storyName = 'Disabled';
DisabledComponent.args = {
  label: 'A',
  disabled: true,
};
DisabledComponent.parameters = {
  docs: {
    source: {
        code: `${sourceCode}\n${DisabledComponent(DisabledComponent.args)}`,
    },
  },
};

// Story 4 - Icon character block
export const IconComponent = Template.bind({});
IconComponent.storyName = 'Icon character block';
IconComponent.args = {
  label: '',
  href: '/',
  icon: {
    id: 'arrow_left',
    classes: 'nhsd-a-icon--size-s',
  },
  iconPosition: 'left',
  ariaLabel: 'Back',
};
IconComponent.parameters = {
  docs: {
    source: {
        code: `${sourceCode}\n${IconComponent(IconComponent.args)}`,
    },
  },
};

// Story 4 - Large character block
export const LargeComponent = Template.bind({});
LargeComponent.storyName = 'Large character block';
LargeComponent.args = {
  label: 'A',
  large: true,
};
LargeComponent.parameters = {
  docs: {
    source: {
        code: `${sourceCode}\n${LargeComponent(LargeComponent.args)}`,
    },
  },
};
