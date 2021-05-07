// prettify html
import pretty from 'pretty';

// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Publication Chapter Navigation';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}
`;
const sourceCode = `// Sass import \n@use "nhsd/components/molecules/publication-chapter-navigation";

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
const chapterLinks = [
  {
    href: '#',
    label: 'Digital inclusion for health and social care',
  },
  {
    href: '#',
    label: 'What we mean by digital inclusion',
  },
  {
    href: '#',
    label: 'Why digital inclusion matters to health and social care',
    class: 'nhsd-m-publication-chapter-navigation--active',
  },
  {
    href: '#',
    label: 'How we can support digital inclusion',
  },
  {
    href: '#',
    label: 'Designing for inclusion',
  },
  {
    href: '#',
    label: 'Who we can work with',
  },
  {
    href: '#',
    label: 'How digital inclusion transforms lives: case studies',
  },
  {
    href: '#',
    label: 'Links and resources',
  },
];
LabComponent.args = {
  chapterLinks,
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode} ${pretty(LabComponent(LabComponent.args), { ocd: true })} `,
    },
  },
};

export const SplitNavigationComponent = Template.bind({});
SplitNavigationComponent.storyName = 'Split Navigation';
SplitNavigationComponent.args = {
  classes: 'nhsd-m-publication-chapter-navigation--split',
  chapterLinks,
};
SplitNavigationComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode} ${pretty(LabComponent(LabComponent.args), { ocd: true })} `,
    },
  },
};
