// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config.js';

// Load template file
import template from  './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Icon link';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}

### Components used
- <a href="/docs/design-system-components-atoms-icon--lab-component">Icon atom</a>

### Implementation notes

- Icon link atom must have a visible label.
- Icon atom can be any size, but works best with **xs**, **s** and **m** variants.`;
const sourceCode = `// Sass import \n@use "nhsd/components/atoms/icon-link";\n\n// HTML`;

// Component defaults
export default {
  title: `${sbConfig.title.designSystem} / ${sbConfig.title.components} / ${sbConfig.title.atoms} / ${componentName}`,
  parameters: {
    docs: {
      description: {
        component: storyDescription
      }
    },
  }
};

// Component template
const Template = (args) => {
  return template.render({ params: {...args} });
};

export const LabComponent = Template.bind({});
LabComponent.args = {
  label: 'Close menu',
  href: '#',
  icon: {
    id: 'x_circled',
    classes: 'nhsd-a-icon--size-m',
  },
};
LabComponent.storyName = sbConfig.title.lab;
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode} ${LabComponent(LabComponent.args)} `,
    },
  },
};

export const DefaultComponent = Template.bind({});
DefaultComponent.args = {
  label: 'Close menu',
  href: '#',
  icon: {
    id: 'x_circled',
    classes: 'nhsd-a-icon--size-m',
  },
};
DefaultComponent.storyName = 'Default';
DefaultComponent.parameters = {
  docs: {
    description: {
      story: `- Label on the left
- Icon on the right`,
    },
    source: {
      code: `${sourceCode} ${DefaultComponent(DefaultComponent.args)} `,
    },
  },
};

export const MirroredComponent = Template.bind({});
MirroredComponent.args = {
  mirrored: true,
  label: 'Back',
  href: '#',
  icon: {
    id: 'arrow_left',
    classes: 'nhsd-a-icon--size-s',
  },
};
MirroredComponent.storyName = 'Mirrored';
MirroredComponent.parameters = {
  docs: {
    description: {
      story: `- Icon on the left
- Label on the right`,
    },
    source: {
      code: `${sourceCode} ${MirroredComponent(MirroredComponent.args)} `,
    },
  },
};

export const ExternalLink = Template.bind({});
ExternalLink.args = {
  label: 'Visit NHS.UK',
  href: '#',
  external: true,
  icon: {
    id: 'arrow_right',
    classes: 'nhsd-a-icon--size-s',
  },
};
ExternalLink.storyName = 'External link';
ExternalLink.parameters = {
  docs: {
    description: {
      story: `External link informs the user's screen reader to announce that the link is going to open in a new tab`,
    },
    source: {
      code: `${sourceCode} ${ExternalLink(ExternalLink.args)} `,
    },
  },
};
