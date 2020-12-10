// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config.js';

// Load template file
import template from  './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Button nav';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}
- Places any number of buttons inline next to each other.
- The buttons are always centered.`;
const sourceCode = `// Sass import \n@use "nhsd/components/molecules/card";

// HTML`;

// Component defaults
export default {
  title: `${sbConfig.title.designSystem} / ${sbConfig.title.components} / ${sbConfig.title.molecules} / ${componentName}`,
  parameters: {
    docs: {
      description: {
        component: storyDescription
      }
    },
  },
};

// Component template
const Template = (args) => {
  return template.render({ params: {...args} });
};

export const Story1 = Template.bind({});
Story1.storyName = sbConfig.title.lab;
Story1.args = {
  buttons: [
  {
    el: 'a',
    label: 'View more stuff',
    href: '#',
  }, {
    classes: 'nhsd-a-button--outline',
    el: 'a',
    label: 'View more stuff - very long label - very very very very very long',
    href: '#',
  }
]};
Story1.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${Story1(Story1.args)}`,
    },
  },
};

export const Story2 = Template.bind({});
Story2.storyName = '1 button';
Story2.args = {
  buttons: [
  {
    el: 'a',
    label: 'View more stuff',
    href: '#',
  }
]};
Story2.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${Story2(Story2.args)}`,
    },
  },
};

export const Story3 = Template.bind({});
Story3.storyName = `3 buttons`;
Story3.args = {
  buttons: [
  {
    el: 'a',
    label: 'View all cards',
    href: '#',
  }, {
    classes: 'nhsd-a-button--outline',
    el: 'a',
    label: 'View more stuff',
    href: '#',
  }, {
    classes: 'nhsd-a-button--outline',
    el: 'a',
    label: 'View more stuff',
    href: '#',
  }
]};
Story3.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${Story3(Story3.args)}`,
    },
  },
};
