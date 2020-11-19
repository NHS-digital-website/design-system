// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config.js';

// Load template file
import template from  './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Icon';
const storyDescription = `${sbConfig.heading.lab}
### Available sizes
|Size|Class name|Square size|
|---|---|---|
|**XXS**|.nhsd-a-icon--size-xxs|12px|
|**XS**|.nhsd-a-icon--size-xs|16px|
|**S**|.nhsd-a-icon--size-s|20px|
|**M**|.nhsd-a-icon--size-m|24px|
|**L**|.nhsd-a-icon--size-l|48px|
|**XL**|.nhsd-a-icon--size-xl|128px|
|**XXL**|.nhsd-a-icon--size-xxl|256px|

### Supported colours
|Colour name|Colour|Class name|
|---|---|---|
|**White**|<span class="nhsd-u-bg-white nhsd-u-border-black">&nbsp;&nbsp;&nbsp;&nbsp;</span>|.nhsd-a-icon--c-white|
|**Black**|<span class="nhsd-u-bg-black nhsd-u-border-black">&nbsp;&nbsp;&nbsp;&nbsp;</span>|.nhsd-a-icon--c-black|
|**Yellow**|<span class="nhsd-u-bg-yellow nhsd-u-border-black">&nbsp;&nbsp;&nbsp;&nbsp;</span>|.nhsd-a-icon--c-yellow|`;
const sourceCode = `// Sass import \n@use "nhsd/components/atoms/icon";\n\n// HTML`;

// Component defaults
export default {
  title: `${sbConfig.title.designSystem} / ${sbConfig.title.components} / ${sbConfig.title.atoms} / ${componentName}`,
  parameters: {
    docs: {
      description: {
        component: storyDescription
      }
    },
  },
  argTypes: {
    nested: { control: 'boolean', defaultValue: false, description: 'Whether or not to nest the icon inside the **hexagonal shape**.' },
    id: {
      control: {
        type: 'select',
        options: [
          'arrow_right',
          'burger',
          'chart',
          'search',
          'x',
          'burger'
        ],
      },
      description: 'Each icon has a unique identifier. Use it to change the visual appearance of the icon.'
    },
    classes: { control: 'text', defaultValue: '.nhsd-a-icon--size-xl', description: 'Use **BEM style** modifier classes to control the size of the icon.' },
  },
};

// Component template
const Template = (args) => {
  return template.render({ params: {...args} });
};

export const LabComponent = Template.bind({});
LabComponent.args = {
  nested: true,
  classes: 'nhsd-a-icon--size-xxl',
  id: 'chart',
};
LabComponent.storyName = sbConfig.title.lab;
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)} `,
    },
  },
};
