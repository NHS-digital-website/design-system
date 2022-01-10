// Load icons
import nhsdIcon from '@/helpers/icons/inline-icon';

// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';

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
  iconType: 'bullet',
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
  iconType: 'check',
  icon: {
    svgSource: nhsdIcon('check'),
  },
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
  iconType: 'cross',
  icon: {
    svgSource: nhsdIcon('x'),
  },
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
  iconType: 'custom',
  icon: {
    svgSource: nhsdIcon('custom'),
  },
  list: [
    'One',
    'Two',
    'Three',
  ],
  heading: 'Custom Icon',
  customIcon: {
    svgSource: nhsdIcon('arrow_up'),
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

export const NoHeading = Template.bind({});
NoHeading.storyName = sbConfig.title.CustomIcon;
NoHeading.args = {
  iconType: 'check',
  icon: {
    svgSource: nhsdIcon('check'),
  },
  list: [
    'One',
    'Two',
    'Three',
  ],
};
NoHeading.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${NoHeading(NoHeading.args)}`,
    },
  },
};
