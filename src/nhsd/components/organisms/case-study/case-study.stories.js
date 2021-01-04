// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config.js';

// Load template file
import template from  './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Case study';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}

- Use **Canvas view** for previewing the component!
- **Variants:**
  - Regular (fit within the 12 column grid)
  - Wide (100% wide, no gutters)
- The width and line clamping of the content box in this component is controlled by the grid token.
- Picture, title and text are mandatory, otherwise the component will look broken.`;
const sourceCode = `// Sass import \n@use "nhsd/components/organisms/case-study";

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

export const LabComponent = Template.bind({});
LabComponent.storyName = 'Lab';
LabComponent.args = {
  label: 'Case Study',
  title: 'NHS Digital Academy',
  text: 'NHS Digital graduate scheme recruit Alicia Bailey is working in our Digital Delivery Centre on the systems that allow members of the public to set preferences about the use of their data for research and planning. NHS Digital graduate scheme recruit Alicia Bailey is working in our Digital Delivery Centre on the systems that allow members of the public to set preferences about the use of their data for research and planning. NHS Digital graduate scheme recruit Alicia Bailey is working in our Digital Delivery Centre on the systems that allow members of the public to set preferences about the use of their data for research and planning. NHS Digital graduate scheme recruit Alicia Bailey is working in our Digital Delivery Centre on the systems that allow members of the public to set preferences about the use of their data for research and planning.',
  button: {
    el: 'a',
    label: 'NHS Digital careers',
    classes: 'nhsd-!t-margin-bottom-0',
  },
  image: {
    sourceSet: [{
      'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
    }],
    alt: 'Abstract lights',
  },

};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};

export const DefaultComponent = Template.bind({});
DefaultComponent.args = LabComponent.args;
DefaultComponent.storyName = 'Default (card on left)';
DefaultComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${DefaultComponent(LabComponent.args)}`,
    },
  },
};

export const MirroredComponent = Template.bind({});
MirroredComponent.storyName = 'Mirrored (card on right)';
MirroredComponent.args = {
  classes: 'nhsd-o-case-study--mirrored',
  label: 'Case Study',
  title: 'NHS Digital Academy',
  text: 'NHS Digital graduate scheme recruit Alicia Bailey is working in our Digital Delivery Centre on the systems that allow members of the public to set preferences about the use of their data for research and planning. NHS Digital graduate scheme recruit Alicia Bailey is working in our Digital Delivery Centre on the systems that allow members of the public to set preferences about the use of their data for research and planning. NHS Digital graduate scheme recruit Alicia Bailey is working in our Digital Delivery Centre on the systems that allow members of the public to set preferences about the use of their data for research and planning. NHS Digital graduate scheme recruit Alicia Bailey is working in our Digital Delivery Centre on the systems that allow members of the public to set preferences about the use of their data for research and planning.',
  button: {
    el: 'a',
    label: 'NHS Digital careers',
    classes: 'nhsd-!t-margin-bottom-0',
  },
  image: {
    sourceSet: [{
      'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
    }],
    alt: 'Abstract lights',
  },

};
MirroredComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${MirroredComponent(MirroredComponent.args)}`,
    },
  },
};

export const WideComponent = Template.bind({});
WideComponent.storyName = 'Wide (Unrestricted width)';
WideComponent.args = {
  wide: true,
  label: 'Case Study',
  title: 'NHS Digital Academy',
  text: 'NHS Digital graduate scheme recruit Alicia Bailey is working in our Digital Delivery Centre on the systems that allow members of the public to set preferences about the use of their data for research and planning. NHS Digital graduate scheme recruit Alicia Bailey is working in our Digital Delivery Centre on the systems that allow members of the public to set preferences about the use of their data for research and planning. NHS Digital graduate scheme recruit Alicia Bailey is working in our Digital Delivery Centre on the systems that allow members of the public to set preferences about the use of their data for research and planning. NHS Digital graduate scheme recruit Alicia Bailey is working in our Digital Delivery Centre on the systems that allow members of the public to set preferences about the use of their data for research and planning.',
  button: {
    el: 'a',
    label: 'NHS Digital careers',
    classes: 'nhsd-!t-margin-bottom-0',
  },
  image: {
    sourceSet: [{
      'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
    }],
    alt: 'Abstract lights',
  },

};
WideComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${WideComponent(WideComponent.args)}`,
    },
  },
};

export const WideMirroredComponent = Template.bind({});
WideMirroredComponent.storyName = 'Wide and mirrored';
WideMirroredComponent.args = {
  wide: true,
  classes: 'nhsd-o-case-study--mirrored',
  label: 'Case Study',
  title: 'NHS Digital Academy',
  text: 'NHS Digital graduate scheme recruit Alicia Bailey is working in our Digital Delivery Centre on the systems that allow members of the public to set preferences about the use of their data for research and planning. NHS Digital graduate scheme recruit Alicia Bailey is working in our Digital Delivery Centre on the systems that allow members of the public to set preferences about the use of their data for research and planning. NHS Digital graduate scheme recruit Alicia Bailey is working in our Digital Delivery Centre on the systems that allow members of the public to set preferences about the use of their data for research and planning. NHS Digital graduate scheme recruit Alicia Bailey is working in our Digital Delivery Centre on the systems that allow members of the public to set preferences about the use of their data for research and planning.',
  button: {
    el: 'a',
    label: 'NHS Digital careers',
    classes: 'nhsd-!t-margin-bottom-0',
  },
  image: {
    sourceSet: [{
      'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
    }],
    alt: 'Abstract lights',
  },

};
WideMirroredComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${WideMirroredComponent(WideMirroredComponent.args)}`,
    },
  },
};
