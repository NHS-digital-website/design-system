// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config.js';

// Load template file
import template from  '../../organisms/nav-block-list/template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Nav block list';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}

> Use **Canvas view** for previewing the component!

### Components used
- <a href="/docs/design-system-components-molecules-nav-block--lab-component">Nav block molecule</a>
- <a href="/docs/design-system-components-molecules-button-nav--lab-component">Button nav molecule</a>

### Tokens used
- Grid
- Typography

### Arrangements

- 3D/2T/1M (always centred)
- 2D/2T/1M (always centred)
- This organism can optionally use heading token and button nav molecule
- This organism can be nested in a grid`;

const sourceCode = `// Sass import \n@use "nhsd/components/organisms/nav-block-list";

// HTML`;

// Component defaults
export default {
  title: `${sbConfig.title.designSystem} / ${sbConfig.title.components} / ${sbConfig.title.organisms} / ${componentName}`,
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

export const TwoInARow = Template.bind({});
TwoInARow.storyName = 'Lab 2D/2T/1M';
TwoInARow.args = {
  desktopColumns: 2,
  blocks: [
    {
      classes: 'nhsd-m-nav-block--light-text',
      box: {
        classes: 'nhsd-a-box--bg-dark-grey',
      },
      title: 'Search data and publications',
      text: 'We collect, process and publish data and information gathered from across the health and social care system in England.',
      hexIcon: {
        classes: 'nhsd-a-icon--size-xxl',
        id: 'search',
        nested: true
      },
      button: {
        label: 'Start your search',
        el: 'span',
        classes: 'nhsd-a-button--invert'
      },
      boxLink: {
        href: '#',
      },
      digiblocks: {
        classes: 'nhsd-a-digiblocks--col-dark-grey nhsd-a-digiblocks--pos-bl',
      },
    }, {
      box: {
        classes: 'nhsd-a-box--bg-light-grey',
      },
      title: 'General practice data hub',
      text: 'A collection of interactive dashboards, published under the open data licence, covering general practices in England.',
      hexIcon: {
        classes: 'nhsd-a-icon--size-xxl',
        id: 'chart',
        nested: true
      },
      button: {
        label: 'Start your search',
        el: 'span',
      },
      boxLink: {
        href: '#',
      },
      digiblocks: {
        classes: 'nhsd-a-digiblocks--col-light-grey nhsd-a-digiblocks--pos-bl',
      },
    }
  ],
};
TwoInARow.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${TwoInARow(TwoInARow.args)}`,
    },
  },
};

export const TwoInARowNested = () => {
  const div = document.createElement('div');
  div.innerHTML = `<div class="nhsd-t-grid nhsd-!t-no-gutters">
<div class="nhsd-t-row">
  <div class="nhsd-t-col-12">
    <!-- Nav block list organism sits in a nested grid -->
    ${TwoInARow({
      ...TwoInARow.args,
      grid: {
        classes: 'nhsd-t-grid--full-width',
      },
    })}
  </div>
</div>
</div>`;
  return div;
}
TwoInARowNested.storyName = '2D/2T/1M / Nested grid';
TwoInARowNested.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${TwoInARow({
        ...TwoInARow.args,
        grid: {
          classes: 'nhsd-t-grid--full-width',
        },
      })}.innerHTML}`,
    },
  },
};

export const ThreeInARow = Template.bind({});
ThreeInARow.storyName = '3D/2T/1M';
ThreeInARow.args = {
  desktopColumns: 3,
  blocks: [
    {
      classes: 'nhsd-m-nav-block--light-text',
      box: {
        classes: 'nhsd-a-box--bg-dark-grey',
      },
      title: 'Search data and publications',
      text: 'We collect, process and publish data and information gathered from across the health and social care system in England.',
      hexIcon: {
        classes: 'nhsd-a-icon--size-xxl',
        id: 'search',
        nested: true
      },
      button: {
        label: 'Start your search',
        el: 'span',
        classes: 'nhsd-a-button--invert'
      },
      boxLink: {
        href: '#',
      },
      digiblocks: {
        classes: 'nhsd-a-digiblocks--col-dark-grey nhsd-a-digiblocks--pos-bl',
      },
    }, {
      box: {
        classes: 'nhsd-a-box--bg-light-grey',
      },
      title: 'General practice data hub',
      text: 'A collection of interactive dashboards, published under the open data licence, covering general practices in England.',
      hexIcon: {
        classes: 'nhsd-a-icon--size-xxl',
        id: 'chart',
        nested: true
      },
      button: {
        label: 'Start your search',
        el: 'span',
      },
      boxLink: {
        href: '#',
      },
      digiblocks: {
        classes: 'nhsd-a-digiblocks--col-light-grey nhsd-a-digiblocks--pos-bl',
      },
    },
    {
      box: {
        classes: 'nhsd-a-box--bg-light-yellow',
      },
      title: 'Search data and publications',
      text: 'We collect, process and publish data and information gathered from across the health and social care system in England.',
      hexIcon: {
        classes: 'nhsd-a-icon--size-xxl',
        id: 'search',
        nested: true
      },
      button: {
        label: 'Start your search',
        el: 'span',
      },
      boxLink: {
        href: '#',
      },
      digiblocks: {
        classes: 'nhsd-a-digiblocks--col-yellow nhsd-a-digiblocks--pos-bl',
      },
    }
  ],
};
ThreeInARow.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ThreeInARow(ThreeInARow.args)}`,
    },
  },
};

export const TitleAndButtonNav = Template.bind({});
TitleAndButtonNav.storyName = '2D/2T/1M / Title and button nav';
TitleAndButtonNav.args = {
  desktopColumns: 2,
  title: 'Data & Information',
  blocks: [
    {
      classes: 'nhsd-m-nav-block--light-text',
      box: {
        classes: 'nhsd-a-box--bg-dark-grey',
      },
      title: 'Search data and publications',
      text: 'We collect, process and publish data and information gathered from across the health and social care system in England.',
      hexIcon: {
        classes: 'nhsd-a-icon--size-xxl',
        id: 'search',
        nested: true
      },
      button: {
        label: 'Start your search',
        el: 'span',
        classes: 'nhsd-a-button--invert'
      },
      boxLink: {
        href: '#',
      },
      digiblocks: {
        classes: 'nhsd-a-digiblocks--col-dark-grey nhsd-a-digiblocks--pos-bl',
      },
    }, {
      box: {
        classes: 'nhsd-a-box--bg-light-grey',
      },
      title: 'General practice data hub',
      text: 'A collection of interactive dashboards, published under the open data licence, covering general practices in England.',
      hexIcon: {
        classes: 'nhsd-a-icon--size-xxl',
        id: 'chart',
        nested: true
      },
      button: {
        label: 'Start your search',
        el: 'span',
      },
      boxLink: {
        href: '#',
      },
      digiblocks: {
        classes: 'nhsd-a-digiblocks--col-light-grey nhsd-a-digiblocks--pos-bl',
      },
    }
  ],
  buttonNav: {
    buttons: [
      {
        el: 'a',
        label: 'View all news',
        href: '#',
      }, {
        classes: 'nhsd-a-button--outline',
        el: 'a',
        label: 'View all events',
        href: '#',
      },
    ],
  },
};
TitleAndButtonNav.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${TitleAndButtonNav(TitleAndButtonNav.args)}`,
    },
  },
};
