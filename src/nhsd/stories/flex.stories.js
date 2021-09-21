/* global document */

// Load storybook config
import * as sbConfig from '../../../.storybook/storybook-config';

// Load template file
import template from './flex.template.njk';

const storyDescription = `${sbConfig.heading.lab}
- The **Flex** token uses **Flexbox** to provide a flexible method for arranging components
- **Flex** can be used in conjunction with the **Grid System** to support more advanced layout requirements`;
const sourceCode = '// Sass import \n@use "nhsd/scss-core/tokens/flex";\n\n//HTML';

// Component defaults
export default {
  title: `${sbConfig.title.designSystem} / ${sbConfig.title.tokens} / ${sbConfig.title.flex}`,
  parameters: {
    docs: {
      description: {
        component: storyDescription,
      },
    },
  },
  argTypes: {
    debug: { control: 'boolean', defaultValue: true, description: 'When set styles `flex` for visual debugging' },
    justifyContent: {
      name: 'justify-content',
      control: {
        type: 'select',
        options: [
          'nhsd-t-flex--justify-content-start',
          'nhsd-t-flex--justify-content-end',
          'nhsd-t-flex--justify-content-centre',
          'nhsd-t-flex--justify-content-between',
          'nhsd-t-flex--justify-content-around',
          'nhsd-t-flex--justify-content-evenly',
        ],
      },
      defaultValue: 'nhsd-t-flex--justify-content-start',
      description: 'Sets the `justify-content` value for modifying the alignment of flex items on the main axis',
    },
    alignItems: {
      name: 'align-items',
      control: {
        type: 'select',
        options: [
          'nhsd-t-flex--align-items-start',
          'nhsd-t-flex--align-items-end',
          'nhsd-t-flex--align-items-centre',
          'nhsd-t-flex--align-items-baseline',
          'nhsd-t-flex--align-items-stretch',
        ],
      },
      defaultValue: 'nhsd-t-flex--align-items-start',
      description: 'Sets the `align-items` value for modifying the alignment of flex items on the cross axis',
    },
    column: { control: 'boolean', defaultValue: false, description: 'Applies `nhsd-t-flex--column` for column arrangements' },
    reverse: { control: 'boolean', defaultValue: false, description: 'Applies `nhsd-t-flex--reverse` to reverse arrangement' },
    item1: {
      control: 'text', defaultValue: '', description: 'Classes for item 1.',
    },
    item2: {
      control: 'text', defaultValue: 'nhsd-t-flex-item--grow', description: 'Classes for item 2',
    },
    item3: {
      control: 'text', defaultValue: '', description: 'Classes for item 2',
    },
  },
};

// Template
const Template = (args) => template.render({ params: { ...args } });

export const LabComponent = Template.bind({});
LabComponent.storyName = sbConfig.title.lab;
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};

export const JustifyContentComponent = () => {
  const div = document.createElement('div');
  div.innerHTML = `<div class="nhsd-t-flex nhsd-t-flex--justify-content-end nhsd-t-flex--debug">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`;
  return div;
};
JustifyContentComponent.storyName = 'Justify content example';
JustifyContentComponent.parameters = {
  docs: {
    description: {
      story: `${sbConfig.heading.details}:
- Flexbox's \`justify-content\` property can be used to align flexbox items along the main axis.
- **Class names:**
  - <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-t-flex--justify-content-start</span>
  - <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-t-flex--justify-content-end</span>
  - <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-t-flex--justify-content-centre</span>
  - <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-t-flex--justify-content-between</span>
  - <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-t-flex--justify-content-around</span>
  - <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-t-flex--justify-content-evenly</span>`,
    },
    source: {
      code: `${sourceCode}\n${JustifyContentComponent().innerHTML}`,
    },
  },
};

export const AlignComponent = () => {
  const div = document.createElement('div');
  div.innerHTML = `<div class="nhsd-t-flex nhsd-t-flex--align-items-centre nhsd-t-flex--debug">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`;
  return div;
};
AlignComponent.storyName = 'Align items example';
AlignComponent.parameters = {
  docs: {
    description: {
      story: `${sbConfig.heading.details}:
- Flexbox's \`align-items\` property can be used to align flexbox items along the cross axis.
- **Class names:**
  - <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-t-flex--align-items-start</span>
  - <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-t-flex--align-items-end</span>
  - <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-t-flex--align-items-centre</span>
  - <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-t-flex--align-items-baseline</span>
  - <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-t-flex--align-items-strech</span>`,
    },
    source: {
      code: `${sourceCode}\n${AlignComponent().innerHTML}`,
    },
  },
};

export const ColumnComponent = () => {
  const div = document.createElement('div');
  div.innerHTML = `<div class="nhsd-t-flex nhsd-t-flex--column nhsd-t-flex--debug">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`;
  return div;
};
ColumnComponent.storyName = 'Column example';
ColumnComponent.parameters = {
  docs: {
    description: {
      story: `${sbConfig.heading.details}:
- The \`nhsd-t-flex--column\` modifier can be used to align flexbox items from top to bottom.`,
    },
    source: {
      code: `${sourceCode}\n${AlignComponent().innerHTML}`,
    },
  },
};

export const ReverseComponent = () => {
  const div = document.createElement('div');
  div.innerHTML = `<div class="nhsd-t-flex nhsd-t-flex--reverse nhsd-t-flex--debug">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`;
  return div;
};
ReverseComponent.storyName = 'Reverse example';
ReverseComponent.parameters = {
  docs: {
    description: {
      story: `${sbConfig.heading.details}:
- The \`nhsd-t-flex--reverse\` modifier can be used to reverse the alignment of flexbox items.`,
    },
    source: {
      code: `${sourceCode}\n${ReverseComponent().innerHTML}`,
    },
  },
};

export const ItemGrowComponent = () => {
  const div = document.createElement('div');
  div.innerHTML = `<div class="nhsd-t-flex nhsd-t-flex--debug">
  <div>Item 1</div>
  <div>Item 2</div>
  <div class="nhsd-t-flex-item nhsd-t-flex-item--grow">Item 3</div>
</div>`;
  return div;
};
ItemGrowComponent.storyName = 'Item grow example';
ItemGrowComponent.parameters = {
  docs: {
    description: {
      story: `${sbConfig.heading.details}:
- \`nhsd-t-flex-item--grow\` can be applied to flex box items to grow their widths to fill the flexbox container`,
    },
    source: {
      code: `${sourceCode}\n${ItemGrowComponent().innerHTML}`,
    },
  },
};

export const ResponsiveComponent = () => {
  const div = document.createElement('div');
  div.innerHTML = `<div class="nhsd-t-flex nhsd-t-flex-m--justify-content-around nhsd-t-flex--debug">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`;
  return div;
};
ResponsiveComponent.storyName = 'Responsive example';
ResponsiveComponent.parameters = {
  docs: {
    description: {
      story: `${sbConfig.heading.details}:
- \`nhsd-t-flex\` and its elements and modifiers supports the following responsive variants. For more information on breakpoints, please see the docs for the \`Grid System\`
- **Class names:**
  - <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-t-flex-xs</span>
  - <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-t-flex-s</span>
  - <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-t-flex-m</span>
  - <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-t-flex-l</span>
  - <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-t-flex-xl</span>`,
    },
    source: {
      code: `${sourceCode}\n${ResponsiveComponent().innerHTML}`,
    },
  },
};
