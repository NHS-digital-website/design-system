// prettify html
import pretty from 'pretty';

// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Chapter Navigation';
const storyDescription = `${sbConfig.heading.lab}
${sbConfig.heading.basicRules}`;
const sourceCode = `// Sass import \n@use "nhsd/components/organisms/chapter-navigation";
// HTML\n`;

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
};

// Component template
const Template = (args) => template.render({ params: { ...args } });

export const LabComponent = Template.bind({});
LabComponent.storyName = sbConfig.title.lab;
LabComponent.args = {
  previousChapter: {
    href: '#',
    chapterName: 'Previous Chapter',
    chapterDescription: 'Digital inclusion for health and social care',
    icon: {
      id: 'arrow_left',
      classes: 'nhsd-a-icon--size-xs',
    },
    direction: 'left',
  },
  currentChapter: {
    link: {
      href: '#',
      label: 'View all',
    },
    text: 'What we mean by digital inclusion',
  },
  nextChapter: {
    link: {
      href: '#',
    },
    chapterName: 'Next Chapter',
    chapterDescription: 'What it means in health and social care',
    icon: {
      classes: 'nhsd-a-icon--size-xs',
    },
    direction: 'right',
  },
  box: {
    classes: 'nhsd-a-box--bg-light-grey',
  },
  horizontalLine: {
    classes: 'nhsd-a-horizontal-rule--size-xxs',
  },
};

LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode} ${pretty(LabComponent(LabComponent.args), { ocd: true })} `,
    },
  },
};

export const FooterVariant = Template.bind({});
FooterVariant.storyName = 'Footer variant';
FooterVariant.args = {
  classes: 'nhsd-o-chapter-navigation--footer',
  previousChapter: {
    href: '#',
    chapterName: 'Previous Chapter',
    chapterDescription: 'Digital inclusion for health and social care',
    icon: {
      id: 'arrow_left',
      classes: 'nhsd-a-icon--size-xs',
    },
    direction: 'left',
  },
  nextChapter: {
    link: {
      href: '#',
    },
    chapterName: 'Next Chapter',
    chapterDescription: 'What it means in health and social care',
    icon: {
      classes: 'nhsd-a-icon--size-xs',
    },
    direction: 'right',
  },
  box: {
    classes: '',
  },
};

FooterVariant.parameters = {
  docs: {
    source: {
      code: `${sourceCode} ${pretty(FooterVariant(FooterVariant.args), { ocd: true })} `,
    },
  },
};