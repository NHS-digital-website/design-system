// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Checklist';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}

### Components used
- <a href="/docs/design-system-components-atoms-icon--lab-component">Icon</a>
- <a href="/docs/design-system-components-atoms-box--lab-component">Box</a>

### Tokens used
- Spacing
- Colours
- Typography

### Developer notes

- The **Checklist** molecule makes use of the <a href="/docs/design-system-components-atoms-icon--lab-component">Icon</a> and <a href="/docs/design-system-components-atoms-box--lab-component">Box</a> atoms to display a check or a cross
- A custom icon can be used by passing the key of an icon into the customIcon parameter with an optional icon class override
- In order for a custom icon to be displayed, the 'custom' option needs to be selected from the 'icon' parameter dropdown`;

const sourceCode = `// Sass import \n@use "nhsd/components/molecules/checklist";

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
    icon: {
      control: {
        type: 'select',
        options: [
          'bullet',
          'check',
          'cross',
          'custom',
        ],
      },
      defaultValue: 'bullet',
    },
  },
};

// Component template
const Template = (args) => template.render({ params: { ...args } });

export const LabComponent = Template.bind({});
LabComponent.storyName = sbConfig.title.lab;
LabComponent.args = {
  list: [
    'One',
    'Two',
    'Three',
  ],
  heading: 'Bullet List',
  customIcon: {
    id: 'arrow_up',
    classes: '',
  },
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};

export const TickList = Template.bind({});
TickList.storyName = sbConfig.title.TickList;
TickList.args = {
  icon: 'check',
  list: [
    'One',
    'Two',
    'Three',
  ],
  heading: 'Tick List',
};
TickList.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${TickList(TickList.args)}`,
    },
  },
};

export const CrossList = Template.bind({});
CrossList.storyName = sbConfig.title.CrossList;
CrossList.args = {
  icon: 'cross',
  list: [
    'One',
    'Two',
    'Three',
  ],
  heading: 'Cross List',
};
CrossList.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${CrossList(CrossList.args)}`,
    },
  },
};

export const CustomIcon = Template.bind({});
CustomIcon.storyName = sbConfig.title.CustomIcon;
CustomIcon.args = {
  icon: 'custom',
  list: [
    'One',
    'Two',
    'Three',
  ],
  heading: 'Custom Icon',
  customIcon: {
    id: 'arrow_up',
    classes: '',
  },
};
CustomIcon.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${CustomIcon(CustomIcon.args)}`,
    },
  },
};
