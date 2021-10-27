// Load icons
import nhsdIcon from '@/helpers/icons/inline-icon';

import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';

// Load stylesheet file
require('./_index.scss');

const componentName = 'Tag List';
const storyDescription = sbConfig.heading.lab;

const sourceCode = `// Sass import \n@use "nhsd/components/molecules/tag-list";

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
  tags: [
    {
      href: '#',
      classes: 'nhsd-a-tag--closable',
      label: '2018',
      icon: {
        svgSource: nhsdIcon('x'),
        classes: 'nhsd-a-icon--size-xxs nhsd-a-icon--col-blue',
      },
    },
    {
      href: '#',
      classes: 'nhsd-a-tag--closable',
      label: '2019',
      icon: {
        svgSource: nhsdIcon('x'),
        classes: 'nhsd-a-icon--size-xxs nhsd-a-icon--col-blue',
      },
    },
    {
      href: '#',
      classes: 'nhsd-a-tag--closable',
      label: '2020',
      icon: {
        svgSource: nhsdIcon('x'),
        classes: 'nhsd-a-icon--size-xxs nhsd-a-icon--col-blue',
      },
    },
    {
      href: '#',
      classes: 'nhsd-a-tag--closable',
      label: '2021',
      icon: {
        svgSource: nhsdIcon('x'),
        classes: 'nhsd-a-icon--size-xxs nhsd-a-icon--col-blue',
      },
    },
  ],
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};
