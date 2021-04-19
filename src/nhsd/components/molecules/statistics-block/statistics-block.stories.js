// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Statistics Block';
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

- Uses the <a href="/docs/design-system-components-atoms-icon--lab-component">Icon</a> and <a href="/docs/design-system-components-atoms-box--lab-component">Box</a> atoms, alongside the typography token
- Currently supports any available <a href="/docs/design-system-components-atoms-box--lab-component">Box</a> colour, but examples used indicated desired usage
- Figures and data does not currently animate, but there are plans to include JS to animate the data
- When using a prefix or suffix, icons and text labels can be used simultaneously and interchangeably
- Multiple Statistic Blocks can be displayed in a grid using the <a href="/docs/design-system-components-organism-statistics-block-list--lab-component">Statistic Block List</a> organism`;

const sourceCode = `// Sass import \n@use "nhsd/components/molecules/statistics-block";

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
  box: {
    classes: 'nhsd-!t-bg-grad-grey',
  },
  heading: {
    label: '1,000,000',
    xOutOfX: false,
  },
  subtitle: 'NHS login accounts',
  text: 'We\'re helping more people than ever save time and access services quickly through a single NHS login.',
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};

export const NoText = Template.bind({});
NoText.storyName = sbConfig.title.NoText;
NoText.args = {
  box: {
    classes: 'nhsd-!t-bg-grad-grey',
  },
  heading: {
    label: '1,000,000',
    xOutOfX: false,
  },
  subtitle: 'NHS login accounts',
};
NoText.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${NoText(NoText.args)}`,
    },
  },
};

export const BlueBackground = Template.bind({});
BlueBackground.storyName = sbConfig.title.BlueBackground;
BlueBackground.args = {
  box: {
    classes: 'nhsd-!t-bg-grad-blue',
  },
  heading: {
    label: '1,000,000',
    xOutOfX: false,
  },
  subtitle: 'NHS login accounts',
  text: 'We\'re helping more people than ever save time and access services quickly through a single NHS login.',
};
BlueBackground.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${BlueBackground(BlueBackground.args)}`,
    },
  },
};

export const YellowBackground = Template.bind({});
YellowBackground.storyName = sbConfig.title.YellowBackground;
YellowBackground.args = {
  box: {
    classes: 'nhsd-!t-bg-grad-yellow',
  },
  heading: {
    label: '1,000,000',
    xOutOfX: false,
  },
  subtitle: 'NHS login accounts',
  text: 'We\'re helping more people than ever save time and access services quickly through a single NHS login.',
};
YellowBackground.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${YellowBackground(YellowBackground.args)}`,
    },
  },
};

export const TextSuffix = Template.bind({});
TextSuffix.storyName = sbConfig.title.TextSuffix;
TextSuffix.args = {
  box: {
    classes: 'nhsd-!t-bg-grad-grey',
  },
  heading: {
    label: '111',
    xOutOfX: false,
  },
  subtitle: 'Sure in NHS app use',
  text: 'We\'re now supporting twice as many patients through access to digital healthcare advice and services',
  suffix: {
    label: '%',
  },
};
TextSuffix.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${TextSuffix(TextSuffix.args)}`,
    },
  },
};

export const TextPrefix = Template.bind({});
TextPrefix.storyName = sbConfig.title.TextPrefix;
TextPrefix.args = {
  box: {
    classes: 'nhsd-!t-bg-grad-yellow',
  },
  heading: {
    label: '52,000,000',
    xOutOfX: false,
  },
  subtitle: 'Pound sign prefix',
  prefix: {
    label: '£',
  },
};
TextPrefix.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${TextPrefix(TextPrefix.args)}`,
    },
  },
};

export const TextPrefixAndSuffix = Template.bind({});
TextPrefixAndSuffix.storyName = sbConfig.title.TextPrefixAndSuffix;
TextPrefixAndSuffix.args = {
  box: {
    classes: 'nhsd-!t-bg-grad-blue',
  },
  heading: {
    label: '52',
    xOutOfX: false,
  },
  subtitle: 'Pound sign prefix / million suffix',
  prefix: {
    label: '£',
  },
  suffix: {
    label: 'm',
  },
};
TextPrefixAndSuffix.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${TextPrefixAndSuffix(TextPrefixAndSuffix.args)}`,
    },
  },
};

export const IconPrefix = Template.bind({});
IconPrefix.storyName = sbConfig.title.IconPrefix;
IconPrefix.args = {
  box: {
    classes: 'nhsd-!t-bg-grad-grey',
  },
  heading: {
    label: '52',
    xOutOfX: false,
  },
  subtitle: 'Upward trend / x suffix',
  prefix: {
    icon: {
      id: 'arrow_up',
      classes: 'nhsd-a-icon--size-m',
      nested: false,
    },
  },
  suffix: {
    label: 'x',
  },
};
IconPrefix.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${IconPrefix(IconPrefix.args)}`,
    },
  },
};

export const IconSuffix = Template.bind({});
IconSuffix.storyName = sbConfig.title.IconSuffix;
IconSuffix.args = {
  box: {
    classes: 'nhsd-!t-bg-grad-yellow',
  },
  heading: {
    label: '52',
    xOutOfX: false,
  },
  subtitle: 'Pound sign prefix / downward trend',
  suffix: {
    icon: {
      id: 'arrow_up',
      classes: 'nhsd-a-icon--size-m',
      nested: false,
    },
  },
  prefix: {
    label: '£',
  },
};
IconSuffix.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${IconSuffix(IconSuffix.args)}`,
    },
  },
};

export const IconPrefixAndSuffix = Template.bind({});
IconPrefixAndSuffix.storyName = sbConfig.title.IconPrefixAndSuffix;
IconPrefixAndSuffix.args = {
  box: {
    classes: 'nhsd-!t-bg-grad-blue',
  },
  heading: {
    label: '52',
    xOutOfX: false,
  },
  subtitle: 'Downward trend prefix / downward trend suffix',
  prefix: {
    icon: {
      id: 'arrow_down',
      classes: 'nhsd-a-icon--size-m',
      nested: false,
    },
  },
  suffix: {
    icon: {
      id: 'arrow_down',
      classes: 'nhsd-a-icon--size-m',
      nested: false,
    },
  },
};
IconPrefixAndSuffix.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${IconPrefixAndSuffix(IconPrefixAndSuffix.args)}`,
    },
  },
};

export const IconPrefixAndSuffixWithLabel = Template.bind({});
IconPrefixAndSuffixWithLabel.storyName = sbConfig.title.IconPrefixAndSuffixWithLabel;
IconPrefixAndSuffixWithLabel.args = {
  box: {
    classes: 'nhsd-!t-bg-grad-grey',
  },
  heading: {
    label: '52',
    xOutOfX: false,
  },
  subtitle: 'Upward trend prefix with pound sign label / upward trend suffix with million label',
  prefix: {
    label: '£',
    icon: {
      id: 'arrow_up',
      classes: 'nhsd-a-icon--size-m',
      nested: false,
    },
  },
  suffix: {
    label: 'm',
    icon: {
      id: 'arrow_up',
      classes: 'nhsd-a-icon--size-m',
      nested: false,
    },
  },
};
IconPrefixAndSuffixWithLabel.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${IconPrefixAndSuffixWithLabel(IconPrefixAndSuffixWithLabel.args)}`,
    },
  },
};

export const XOutOfX = Template.bind({});
XOutOfX.storyName = sbConfig.title.XOutOfX;
XOutOfX.args = {
  box: {
    classes: 'nhsd-!t-bg-grad-yellow',
  },
  heading: {
    label: '3',
    xOutOfX: true,
    label2: '5',
  },
  subtitle: 'X out of X template',
};
XOutOfX.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${XOutOfX(XOutOfX.args)}`,
    },
  },
};
