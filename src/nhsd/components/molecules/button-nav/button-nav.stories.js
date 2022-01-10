// Load icons
import nhsdIcon from '@/helpers/icons/inline-icon';

// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';

const componentName = 'Button nav';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}
- Places any number of buttons inline next to each other.
- The buttons are always centered.

### Components used
- <a href="/docs/design-system-components-atoms-button--lab-component">Button atom</a>

### Tokens used
- Spacing
- Utils`;
const sourceCode = `// Sass import \n@use "nhsd/components/molecules/button-nav";

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

export const Story1 = Template.bind({});
Story1.storyName = sbConfig.title.lab;
Story1.args = {
  buttons: [{
    el: 'a',
    label: 'View more stuff',
    href: '#',
  }, {
    classes: 'nhsd-a-button--outline',
    el: 'a',
    label: 'View more stuff - very long label - very very very very very long',
    href: '#',
  }],
};
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
  buttons: [{
    el: 'a',
    label: 'View more stuff',
    href: '#',
  }],
};
Story2.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${Story2(Story2.args)}`,
    },
  },
};

export const Story3 = Template.bind({});
Story3.storyName = '3 buttons';
Story3.args = {
  buttons: [{
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
  }],
};
Story3.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${Story3(Story3.args)}`,
    },
  },
};

export const Story4 = Template.bind({});
Story4.storyName = 'Button bar / Condensed / Non-responsive';
Story4.args = {
  classes: 'nhsd-m-button-nav--condensed nhsd-m-button-nav--non-responsive',
  buttons: [{
    el: 'a',
    href: '#',
    aria: {
      label: 'Search',
    },
    classes: 'nhsd-a-button--circle',
    icon: {
      svgSource: nhsdIcon('search'),
      classes: 'nhsd-a-icon--size-s',
    },
  }, {
    el: 'button',
    label: 'Menu',
    icon: {
      svgSource: nhsdIcon('burger'),
      classes: 'nhsd-a-icon--size-s',
    },
  }],
};
Story4.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${Story4(Story4.args)}`,
    },
  },
};

export const Story5 = Template.bind({});
Story5.storyName = '2 buttons / Left aligned, condensed';
Story5.args = {
  classes: 'nhsd-m-button-nav--condensed nhsd-!t-text-align-left',
  buttons: [{
    el: 'a',
    label: 'Button one',
    href: '#',
  }, {
    classes: 'nhsd-a-button--outline',
    el: 'a',
    label: 'Button two',
    href: '#',
  }],
};
Story5.parameters = {
  docs: {
    description: {
      story: 'Use the <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-!t-text-align-left</span> override token to left align the buttons on breakpoints above XS.',
    },
    source: {
      code: `${sourceCode}\n${Story5(Story5.args)}`,
    },
  },
};

export const Story6 = Template.bind({});
Story6.storyName = '2 buttons / Right aligned, condensed';
Story6.args = {
  classes: 'nhsd-m-button-nav--condensed nhsd-!t-text-align-right',
  buttons: [{
    el: 'a',
    label: 'Button one',
    href: '#',
  }, {
    classes: 'nhsd-a-button--outline',
    el: 'a',
    label: 'Button two',
    href: '#',
  }],
};
Story6.parameters = {
  docs: {
    description: {
      story: 'Use the <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-!t-text-align-right</span> override token to right align the buttons on breakpoints above XS.',
    },
    source: {
      code: `${sourceCode}\n${Story6(Story6.args)}`,
    },
  },
};
