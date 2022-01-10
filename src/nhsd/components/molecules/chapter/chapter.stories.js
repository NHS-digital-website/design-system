// prettify html
import pretty from 'pretty';

// Load icons
import nhsdIcon from '@/helpers/icons/inline-icon';

// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';

const componentName = 'Chapter';
const storyDescription = `${sbConfig.heading.lab}
${sbConfig.heading.basicRules}`;
const sourceCode = `// Sass import \n@use "nhsd/components/molecules/chapter";
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
    direction: {
      control: {
        type: 'select',
        options: [
          'right',
          'left',
        ],
      },
    },
  },
};

// Component template
const Template = (args) => template.render({ params: { ...args } });

export const LabComponent = Template.bind({});
LabComponent.storyName = sbConfig.title.lab;
LabComponent.args = {
  classes: '',
  href: '#',
  chapterName: 'Previous Chapter',
  chapterDescription: 'Digital inclusion for health and social care',
  leftIcon: {
    svgSource: nhsdIcon('arrow_left'),
    classes: 'nhsd-a-icon--size-xs',
  },
  rightIcon: {
    svgSource: nhsdIcon('arrow_right'),
    classes: 'nhsd-a-icon--size-xs',
  },
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode} ${pretty(LabComponent(LabComponent.args), { ocd: true })} `,
    },
  },
};
