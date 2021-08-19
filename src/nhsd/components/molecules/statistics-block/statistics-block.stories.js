import pretty from 'pretty';

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
const Template = (args) => pretty(template.render({ params: { ...args } }), { ocd: true });

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
  subtitle: {
    label: 'NHS login accounts',
  },
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
  subtitle: {
    label: 'NHS login accounts',
  },
};
NoText.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${NoText(NoText.args)}`,
    },
  },
};

export const MutedBlueBackground = Template.bind({});
MutedBlueBackground.storyName = sbConfig.title.MutedBlueBackground;
MutedBlueBackground.args = {
  box: {
    classes: 'nhsd-!t-bg-grad-blue',
  },
  heading: {
    label: '1,000,000',
    xOutOfX: false,
  },
  subtitle: {
    label: 'NHS login accounts',
  },
  text: 'We\'re helping more people than ever save time and access services quickly through a single NHS login.',
};
MutedBlueBackground.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${MutedBlueBackground(MutedBlueBackground.args)}`,
    },
  },
};

export const MutedYellowBackground = Template.bind({});
MutedYellowBackground.storyName = sbConfig.title.MutedYellowBackground;
MutedYellowBackground.args = {
  box: {
    classes: 'nhsd-!t-bg-grad-yellow',
  },
  heading: {
    label: '1,000,000',
    xOutOfX: false,
  },
  subtitle: {
    label: 'NHS login accounts',
  },
  text: 'We\'re helping more people than ever save time and access services quickly through a single NHS login.',
};
MutedYellowBackground.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${MutedYellowBackground(MutedYellowBackground.args)}`,
    },
  },
};

export const DarkBlueBackground = Template.bind({});
DarkBlueBackground.storyName = sbConfig.title.DarkBlueBackground;
DarkBlueBackground.args = {
  box: {
    classes: 'nhsd-!t-bg-dark-blue nhsd-!t-col-white',
  },
  heading: {
    label: '1,000,000',
    xOutOfX: false,
    classes: 'nhsd-!t-col-white',
  },
  subtitle: {
    label: 'NHS login accounts',
    classes: 'nhsd-!t-col-white',
  },
  text: 'We\'re helping more people than ever save time and access services quickly through a single NHS login.',
};
DarkBlueBackground.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${DarkBlueBackground(DarkBlueBackground.args)}`,
    },
  },
};

export const YellowBackground = Template.bind({});
YellowBackground.storyName = sbConfig.title.YellowBackground;
YellowBackground.args = {
  box: {
    classes: 'nhsd-!t-bg-yellow',
  },
  heading: {
    label: '1,000,000',
    xOutOfX: false,
  },
  subtitle: {
    label: 'NHS login accounts',
  },
  text: 'We\'re helping more people than ever save time and access services quickly through a single NHS login.',
};
YellowBackground.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${YellowBackground(YellowBackground.args)}`,
    },
  },
};

export const BlackBackground = Template.bind({});
BlackBackground.storyName = sbConfig.title.BlackBackground;
BlackBackground.args = {
  box: {
    classes: 'nhsd-!t-bg-black nhsd-!t-col-white',
  },
  heading: {
    label: '1,000,000',
    xOutOfX: false,
    classes: 'nhsd-!t-col-white',
  },
  subtitle: {
    label: 'NHS login accounts',
    classes: 'nhsd-!t-col-white',
  },
  text: 'We\'re helping more people than ever save time and access services quickly through a single NHS login.',
};
BlackBackground.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${BlackBackground(BlackBackground.args)}`,
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
  subtitle: {
    label: 'NHS login accounts',
  },
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
  subtitle: {
    label: 'Pound sign prefix',
  },
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
  subtitle: {
    label: 'Pound sign prefix / million suffix',
  },
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
  subtitle: {
    label: 'Upward trend / x suffix',
  },
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
  subtitle: {
    label: 'Pound sign prefix / downward trend',
  },
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
  subtitle: {
    label: 'Downward trend prefix / downward trend suffix',
  },
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
  subtitle: {
    label: 'Upward trend prefix with pound sign label / upward trend suffix with million label',
  },
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
XOutOfX.storyName = 'X Out Of X';
XOutOfX.args = {
  box: {
    classes: 'nhsd-!t-bg-grad-yellow',
  },
  heading: {
    label: '3',
    xOutOfX: true,
    label2: '5',
  },
  subtitle: {
    label: 'X out of X template',
  },
};
XOutOfX.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${XOutOfX(XOutOfX.args)}`,
    },
  },
};

export const AnimateStat = Template.bind({});
AnimateStat.storyName = 'Animate Statistic';
AnimateStat.args = {
  ...LabComponent.args,
  animate: true,
};
AnimateStat.parameters = {
  docs: {
    description: {
      story: `Numerical values in statistic blocks can be animated by value the value in an element with \`data-animate-statistic\`.
      Duration of the animation can be adjusted by providing a value for the \`data-animate-statistic\` attribute in milliseconds.
      Eg, \`data-animate-statistic="5000"\` for a 5 second animation.`,
    },
    source: {
      code: `${sourceCode}\n${AnimateStat(AnimateStat.args)}`,
    },
  },
};
