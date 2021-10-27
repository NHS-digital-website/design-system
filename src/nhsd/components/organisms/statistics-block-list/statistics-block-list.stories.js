
// Load icons
import nhsdIcon from '@/helpers/icons/inline-icon';

// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Statistics Block List';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}

### Components used
- <a href="/docs/design-system-components-molecules-statistics-block--lab-component">Statistics Block</a>

### Tokens used
- Spacing
- Grid

### Developer notes

- Each will match height with the tallest block on the same row
- Best used on a 2 column grid
- To be populated with the <a href="/docs/design-system-components-molecules-statistics-block--lab-component">Statistics Block</a> molecule
- For a single statistics block, use the <a href="/docs/design-system-components-molecules-statistics-block--lab-component">Statistics Block</a> molecule`;

const sourceCode = `// Sass import \n@use "nhsd/components/organisms/statistics-block-list";

// HTML`;

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
  desktopColumns: 2,
  statisticBlocks: [
    {
      box: {
        classes: 'nhsd-!t-bg-grad-yellow',
      },
      heading: {
        label: '111',
        xOutOfX: false,
      },
      subtitle: 'Sure in NHS app use',
      text: 'We\'re now supporting twice as many patients through access to digital healthcare advice and services.',
      suffix: {
        label: '%',
      },
    },
    {
      box: {
        classes: 'nhsd-!t-bg-grad-yellow',
      },
      heading: {
        label: '1,000,000',
        xOutOfX: false,
      },
      subtitle: 'NHS login accounts',
      text: 'We\'re helping more people than ever save time and access services quickly through a single NHS login.',
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

export const MixedColours = Template.bind({});
MixedColours.storyName = sbConfig.title.MixedColours;
MixedColours.args = {
  desktopColumns: 2,
  statisticBlocks: [
    {
      box: {
        classes: 'nhsd-!t-bg-grad-grey',
      },
      heading: {
        label: '111',
        xOutOfX: false,
      },
      subtitle: 'Sure in NHS app use',
      text: 'We\'re now supporting twice as many patients through access to digital healthcare advice and services.',
      suffix: {
        label: '%',
      },
    },
    {
      box: {
        classes: 'nhsd-!t-bg-grad-blue',
      },
      heading: {
        label: '1,000,000',
        xOutOfX: false,
      },
      subtitle: 'NHS login accounts',
      text: 'We\'re helping more people than ever save time and access services quickly through a single NHS login.',
    },
  ],
};
MixedColours.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${MixedColours(MixedColours.args)}`,
    },
  },
};

export const VariedContentHeight = Template.bind({});
VariedContentHeight.storyName = sbConfig.title.VariedContentHeight;
VariedContentHeight.args = {
  desktopColumns: 2,
  statisticBlocks: [
    {
      box: {
        classes: 'nhsd-!t-bg-grad-blue',
      },
      heading: {
        label: '111',
        xOutOfX: false,
      },
      subtitle: 'Sure in NHS app use',
      text: 'We\'re now supporting twice as many patients through access to digital healthcare advice and services.',
      suffix: {
        label: '%',
      },
    },
    {
      box: {
        classes: 'nhsd-!t-bg-grad-blue',
      },
      heading: {
        label: '1,000,000',
        xOutOfX: false,
      },
      subtitle: 'NHS login accounts',
    },
  ],
};
VariedContentHeight.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${VariedContentHeight(VariedContentHeight.args)}`,
    },
  },
};

export const SuffixPrefixOptions = Template.bind({});
SuffixPrefixOptions.storyName = 'Suffix / Prefix options';
SuffixPrefixOptions.args = {
  desktopColumns: 2,
  statisticBlocks: [
    {
      box: {
        classes: 'nhsd-!t-bg-grad-grey',
      },
      heading: {
        label: '50',
        xOutOfX: false,
      },
      subtitle: 'Upward trend / x suffix',
      suffix: {
        label: 'x',
      },
      prefix: {
        icon: {
          svgSource: nhsdIcon('arrow_up'),
          classes: 'nhsd-a-icon--size-m',
        },
      },
    },
    {
      box: {
        classes: 'nhsd-!t-bg-grad-yellow',
      },
      heading: {
        label: '50',
        xOutOfX: false,
      },
      subtitle: 'Downward trend / % suffix',
      suffix: {
        label: '%',
      },
      prefix: {
        icon: {
          svgSource: nhsdIcon('arrow_down'),
          classes: 'nhsd-a-icon--size-m',
        },
      },
    },
    {
      box: {
        classes: 'nhsd-!t-bg-grad-yellow',
      },
      heading: {
        label: '50',
        xOutOfX: false,
      },
      subtitle: 'Pound sign prefix / million suffix',
      suffix: {
        label: 'm',
      },
      prefix: {
        label: '£',
      },
    },
    {
      box: {
        classes: 'nhsd-!t-bg-grad-blue',
      },
      heading: {
        label: '3',
        xOutOfX: true,
        label2: '5',
      },
      subtitle: 'x out of x template',
    },
  ],
};
SuffixPrefixOptions.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${SuffixPrefixOptions(SuffixPrefixOptions.args)}`,
    },
  },
};
