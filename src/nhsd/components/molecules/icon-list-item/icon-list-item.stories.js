// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Icon list item';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}

- External link atom <a href="/docs/design-system-components-atoms-link--external-link">rules</a> apply for external links!
- The link can be internal or external - same rule applies as for default links (external link is announced to screen readers)
- the <a href="/docs/design-system-components-atoms-icon--external-link">icons</a> seperate dependant on the icon list item being a link or not.`;
const sourceCode = `// Sass import \n@use "nhsd/components/molecules/icon-list-item";

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
  IconLink: true,
  link: {
    href: '#',
    label: 'Simplifying patient communication with the NHS App',
  },
  title: 'Icon list item without link',
  text: 'The text above is a link',
  icon: {
    id: 'link',
    classes: 'nhsd-a-icon--size-xl nhsd-a-icon--col-blue',
  },
  arrowIcon: {
    classes: 'nhsd-a-arrow nhsd-a-icon--size-s nhsd-a-icon--col-black',
    id: 'arrow_right',
  },
};

LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};

export const ComponentVarient1 = Template.bind({});
ComponentVarient1.storyName = 'Icon list item with link';
ComponentVarient1.args = {
  IconLink: true,
  link: {
    href: '#',
    label: 'Simplifying patient communication with the NHS App',
  },
  text: 'The text above is a link',
  icon: {
    id: 'link',
    classes: 'nhsd-a-icon--size-xl nhsd-a-icon--col-blue',
  },
  arrowIcon: {
    classes: 'nhsd-a-arrow nhsd-a-icon--size-s nhsd-a-icon--col-black',
    id: 'arrow_right',
  },
};

ComponentVarient1.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ComponentVarient1(ComponentVarient1.args)}`,
    },
  },
};

export const ComponentVarient2 = Template.bind({});
ComponentVarient2.storyName = 'Icon list item without link';
ComponentVarient2.args = {
  IconLink: false,
  title: 'Icon list item without link',
  text: 'The text above isnt a link',
  icon: {
    id: 'i_circled',
    classes: 'nhsd-a-icon--size-xl nhsd-a-icon--col-blue',
  },
  arrowIcon: {
    classes: 'nhsd-a-arrow nhsd-a-icon--size-s nhsd-a-icon--col-black',
    id: 'arrow_right',
  },
};

ComponentVarient2.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ComponentVarient2(ComponentVarient2.args)}`,
    },
  },
};
