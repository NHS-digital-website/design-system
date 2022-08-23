// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';

import fibreImage from '../../../assets/images/fibre.jpg';

const componentName = 'Case study';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}

- Use **Canvas view** for previewing the component!
- **Variants:**
  - Regular (fit within the 12 column grid)
  - Wide (100% wide, no gutters)
  - With or without the label
- Picture, title and text are mandatory, otherwise the component will look broken.
- The width and line clamping of the content box in this component is controlled by the grid token.
- Depending on the width variant, and if the component has a label or not - the heading and body text clamping changes to best use the space available for the content: The heading is clamped to 2 lines, the body text always tries to fill the available space. This solution works to a satisctory degree with the **regular** variant, but the **wide** variant (due to it's fluid behaviour) will always have space underneath the body text.

### Line clamping rules - regular width variant

Heading is always clamped to max. 2 lines.

|Device type|Shorthand|Variant|Body text (max. lines)|
|---|---|---|---|---|
|Mobile|**XS**|With label|5|
|Mobile|**XS**|Without label|5|
|Tablet|**S**|With label|2|
|Tablet|**S**|Without label|3|
|Desktop|**M**|With label|2|
|Desktop|**M**|Without label|3|
|Wide|**L**|With label|7|
|Wide|**L**|Without label|9|
|Extra Wide|**XL**|With label|11|
|Extra Wide|**XL**|Without label|12|

### Line clamping rules - wide variant

Heading is always clamped to max. 2 lines.

|Device type|Shorthand|Variant|Heading (max. lines)|Body text (max. lines)|
|---|---|---|---|---|
|Mobile|**XS**|With label|5|
|Mobile|**XS**|Without label|5|
|Tablet|**S**|With label|4|
|Tablet|**S**|Without label|5|
|Desktop|**M**|With label|7|
|Desktop|**M**|Without label|8|
|Wide|**L**|With label|9|
|Wide|**L**|Without label|10|
|Extra Wide|**XL**|With label|13|
|Extra Wide|**XL**|Without label|14|`;
const sourceCode = `// Sass import \n@use "nhsd/components/organisms/case-study";

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
LabComponent.storyName = 'Lab';
LabComponent.args = {
  label: 'Case Study',
  title: 'NHS Digital Academy (COVID-19 Response) - and a few more lines of title',
  text: 'NHS Digital graduate scheme recruit Alicia Bailey is working in our Digital Delivery Centre on the systems that allow members of the public to set preferences about the use of their data for research and planning. NHS Digital graduate scheme recruit Alicia Bailey is working in our Digital Delivery Centre on the systems that allow members of the public to set preferences about the use of their data for research and planning. NHS Digital graduate scheme recruit Alicia Bailey is working in our Digital Delivery Centre on the systems that allow members of the public to set preferences about the use of their data for research and planning. NHS Digital graduate scheme recruit Alicia Bailey is working in our Digital Delivery Centre on the systems that allow members of the public to set preferences about the use of their data for research and planning.',
  button: {
    el: 'a',
    label: 'NHS Digital careers',
    classes: 'nhsd-!t-margin-top-2 nhsd-!t-margin-bottom-0',
  },
  image: {
    src: fibreImage,
    ratio: 'nhsd-t-ratio-16x9',
    alt: 'Abstract lights',
    classes: 'nhsd-t-round',
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
  title: 'NHS Digital Academy (COVID-19 Response) - and a few more lines of title',
  text: 'NHS Digital graduate scheme recruit Alicia Bailey is working in our Digital Delivery Centre on the systems that allow members of the public to set preferences about the use of their data for research and planning. NHS Digital graduate scheme recruit Alicia Bailey is working in our Digital Delivery Centre on the systems that allow members of the public to set preferences about the use of their data for research and planning. NHS Digital graduate scheme recruit Alicia Bailey is working in our Digital Delivery Centre on the systems that allow members of the public to set preferences about the use of their data for research and planning. NHS Digital graduate scheme recruit Alicia Bailey is working in our Digital Delivery Centre on the systems that allow members of the public to set preferences about the use of their data for research and planning.',
  button: {
    el: 'a',
    label: 'NHS Digital careers',
    classes: 'nhsd-!t-margin-top-2 nhsd-!t-margin-bottom-0',
  },
  image: {
    src: fibreImage,
    ratio: 'nhsd-t-ratio-16x9',
    alt: 'Abstract lights',
    classes: 'nhsd-t-round',
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
  title: 'NHS Digital Academy (COVID-19 Response) - and a few more lines of title',
  text: 'NHS Digital graduate scheme recruit Alicia Bailey is working in our Digital Delivery Centre on the systems that allow members of the public to set preferences about the use of their data for research and planning. NHS Digital graduate scheme recruit Alicia Bailey is working in our Digital Delivery Centre on the systems that allow members of the public to set preferences about the use of their data for research and planning. NHS Digital graduate scheme recruit Alicia Bailey is working in our Digital Delivery Centre on the systems that allow members of the public to set preferences about the use of their data for research and planning. NHS Digital graduate scheme recruit Alicia Bailey is working in our Digital Delivery Centre on the systems that allow members of the public to set preferences about the use of their data for research and planning.',
  button: {
    el: 'a',
    label: 'NHS Digital careers',
    classes: 'nhsd-!t-margin-top-2 nhsd-!t-margin-bottom-0',
  },
  image: {
    src: fibreImage,
    ratio: 'nhsd-t-ratio-16x9',
    alt: 'Abstract lights',
    classes: 'nhsd-t-round',
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
  title: 'NHS Digital Academy (COVID-19 Response) - and a few more lines of title',
  text: 'NHS Digital graduate scheme recruit Alicia Bailey is working in our Digital Delivery Centre on the systems that allow members of the public to set preferences about the use of their data for research and planning. NHS Digital graduate scheme recruit Alicia Bailey is working in our Digital Delivery Centre on the systems that allow members of the public to set preferences about the use of their data for research and planning. NHS Digital graduate scheme recruit Alicia Bailey is working in our Digital Delivery Centre on the systems that allow members of the public to set preferences about the use of their data for research and planning. NHS Digital graduate scheme recruit Alicia Bailey is working in our Digital Delivery Centre on the systems that allow members of the public to set preferences about the use of their data for research and planning.',
  button: {
    el: 'a',
    label: 'NHS Digital careers',
    classes: 'nhsd-!t-margin-top-2 nhsd-!t-margin-bottom-0',
  },
  image: {
    src: fibreImage,
    ratio: 'nhsd-t-ratio-16x9',
    alt: 'Abstract lights',
    classes: 'nhsd-t-round',
  },
};
WideMirroredComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${WideMirroredComponent(WideMirroredComponent.args)}`,
    },
  },
};
