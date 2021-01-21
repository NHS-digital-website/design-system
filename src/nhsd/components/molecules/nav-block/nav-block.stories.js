// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config.js';

// Load template file
import template from  './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Nav block';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}

- The whole block links

### Components used
- <a href="/docs/design-system-components-atoms-box--lab-component">Box atom</a>
- Box link atom
- <a href="/docs/design-system-components-atoms-button--lab-component">Button atom</a>
- <a href="/docs/design-system-components-atoms-digiblocks--lab-component">Digiblocks atom</a>
- <a href="/docs/design-system-components-atoms-icon--lab-component">Icon atom</a>

### Tokens used
- Spacing
- Colour
- Typography

### Colour themes

The component doesn't support explisic theming classes, but theming can be achieved the contained atoms can be used to create the following satisfactory colour combinations:

- Dark (grey) theme
- Light (grey) theme
- Colourful (yellow) theme

### Typography

- Heading text is clamped at 4 lines.
- The body text is clamped at 5 lines.

### How to create digiblocks

- Use the online [Digiblock Generator](https://nhs-digital-website.github.io/nhsd-digiblock-generator/) tool to create digiblock compositions.
- Use the **Save SVG ** button to download the artwork when happy with the result on the screen.
- Make sure the **Random** colour option is selected when you save the SVG.

### Digiblock positioning

- The component support positioning via the digiblock atom's position modifier classes. As per designs this component should only use BL and TR positions and single digiblock compositions.
- Use inline SVG, or external SVG - see the <a href="/docs/design-system-components-atoms-digiblocks--lab-component">Digiblocks atom</a> for details.`;
const sourceCode = `// Sass import \n@use "nhsd/components/molecules/nav-block";

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

export const LabComponent = Template.bind({});
LabComponent.storyName = sbConfig.title.lab;
LabComponent.args = {
  box: {
    classes: 'nhsd-a-box--bg-light-grey',
  },
  title: `General practice data hub`,
  text: `A collection of interactive dashboards, published under the open data licence, covering general practices in England.`,
  hexIcon: {
    classes: 'nhsd-a-icon--size-xxl',
    id: 'chart',
    nested: true
  },
  button: {
    label: 'Visit the hub',
    el: 'span',
  },
  boxLink: {
    href: '#',
  },
  digiblocks: {
    classes: 'nhsd-a-digiblocks--col-light-grey nhsd-a-digiblocks--pos-bl',
  },
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};

export const DarkGreyTheme = Template.bind({});
DarkGreyTheme.storyName = 'Theme / Dark (grey)';
DarkGreyTheme.args = {
  classes: 'nhsd-m-nav-block--light-text',
  box: {
    classes: 'nhsd-a-box--bg-dark-grey',
  },
  title: `General practice data hub`,
  text: `A collection of interactive dashboards, published under the open data licence, covering general practices in England.`,
  hexIcon: {
    classes: 'nhsd-a-icon--size-xxl',
    id: 'chart',
    nested: true
  },
  button: {
    label: 'Visit the hub',
    el: 'span',
    classes: 'nhsd-a-button--invert'
  },
  boxLink: {
    href: '#',
  },
  digiblocks: {
    classes: 'nhsd-a-digiblocks--col-dark-grey nhsd-a-digiblocks--pos-bl',
  },
};
DarkGreyTheme.parameters = {
  docs: {
    description: {
      story: `
> Use the built-in tokens and atom modifier classes to theme the component.

####Theme colours:
- **Box:** Dark grey background;
- **Heading, body text and icon**: White;
- **Button:** Invert variant;
- **Digiblocks:** Dark grey variant.`
    },
    source: {
      code: `${sourceCode}\n${DarkGreyTheme(DarkGreyTheme.args)}`,
    },
  },
};

export const LightGreyTheme = Template.bind({});
LightGreyTheme.storyName = 'Theme / Light (grey)';
LightGreyTheme.args = {
  box: {
    classes: 'nhsd-a-box--bg-light-grey',
  },
  title: `General practice data hub`,
  text: `A collection of interactive dashboards, published under the open data licence, covering general practices in England.`,
  hexIcon: {
    classes: 'nhsd-a-icon--size-xxl',
    id: 'chart',
    nested: true
  },
  button: {
    label: 'Visit the hub',
    el: 'span',
  },
  boxLink: {
    href: '#',
  },
  digiblocks: {
    classes: 'nhsd-a-digiblocks--col-blue nhsd-a-digiblocks--pos-bl',
  },
};
LightGreyTheme.parameters = {
  docs: {
    description: {
      story: `
> Use the built-in tokens and atom modifier classes to theme the component.

####Theme colours:
- **Box:** Light grey background;
- **Heading and icon**: Black;
- **Body text**: Dark grey;
- **Button:** Default variant;
- **Digiblocks:** Light grey or blue variant.`,
    },
    source: {
      code: `${sourceCode}\n${LightGreyTheme(LightGreyTheme.args)}`,
    },
  },
};

export const ColourfulTheme = Template.bind({});
ColourfulTheme.storyName = 'Theme / Colourful (yellow)';
ColourfulTheme.args = {
  box: {
    classes: 'nhsd-a-box--bg-light-yellow',
  },
  title: `General practice data hub`,
  text: `A collection of interactive dashboards, published under the open data licence, covering general practices in England.`,
  hexIcon: {
    classes: 'nhsd-a-icon--size-xxl',
    id: 'chart',
    nested: true
  },
  button: {
    label: 'Visit the hub',
    el: 'span',
  },
  boxLink: {
    href: '#',
    classes: 'nhsd-a-box-link--focus-orange',
  },
  digiblocks: {
    classes: 'nhsd-a-digiblocks--col-yellow nhsd-a-digiblocks--pos-bl',
  },
};
ColourfulTheme.parameters = {
  docs: {
    description: {
      story: `
> Use the built-in tokens and atom modifier classes to theme the component.

####Theme colours:
- **Box:** Light yellow background;
- **Heading and icon**: Black;
- **Body text**: Dark grey;
- **Button:** Default variant;
- **Digiblocks:** Default (random colours) or yellow variant.`,
    },
    source: {
      code: `${sourceCode}\n${ColourfulTheme(ColourfulTheme.args)}`,
    },
  },
};

export const BottomLeft = Template.bind({});
BottomLeft.storyName = 'Position / BL';
BottomLeft.args = {
  box: {
    classes: 'nhsd-a-box--bg-light-yellow',
  },
  title: `General practice data hub`,
  text: `A collection of interactive dashboards, published under the open data licence, covering general practices in England.`,
  hexIcon: {
    classes: 'nhsd-a-icon--size-xxl',
    id: 'chart',
    nested: true
  },
  button: {
    label: 'Visit the hub',
    el: 'span',
  },
  boxLink: {
    href: '#',
    classes: 'nhsd-a-box-link--focus-orange',
  },
  digiblocks: {
    classes: 'nhsd-a-digiblocks--pos-bl',
  },
};
BottomLeft.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${BottomLeft(BottomLeft.args)}`,
    },
  },
};

export const BottomRight = Template.bind({});
BottomRight.storyName = 'Position / BR';
BottomRight.args = {
  box: {
    classes: 'nhsd-a-box--bg-light-yellow',
  },
  title: `General practice data hub`,
  text: `A collection of interactive dashboards, published under the open data licence, covering general practices in England.`,
  hexIcon: {
    classes: 'nhsd-a-icon--size-xxl',
    id: 'chart',
    nested: true
  },
  button: {
    label: 'Visit the hub',
    el: 'span',
  },
  boxLink: {
    href: '#',
    classes: 'nhsd-a-box-link--focus-orange',
  },
  digiblocks: {
    classes: 'nhsd-a-digiblocks--pos-br',
  },
};
BottomRight.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${BottomRight(BottomRight.args)}`,
    },
  },
};

export const TopLeft = Template.bind({});
TopLeft.storyName = 'Position / TL';
TopLeft.args = {
  box: {
    classes: 'nhsd-a-box--bg-light-yellow',
  },
  title: `General practice data hub`,
  text: `A collection of interactive dashboards, published under the open data licence, covering general practices in England.`,
  hexIcon: {
    classes: 'nhsd-a-icon--size-xxl',
    id: 'chart',
    nested: true
  },
  button: {
    label: 'Visit the hub',
    el: 'span',
  },
  boxLink: {
    href: '#',
    classes: 'nhsd-a-box-link--focus-orange',
  },
  digiblocks: {
    classes: 'nhsd-a-digiblocks--pos-tl',
  },
};
TopLeft.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${TopLeft(TopLeft.args)}`,
    },
  },
};

export const TopRight = Template.bind({});
TopRight.storyName = 'Position / TR';
TopRight.args = {
  box: {
    classes: 'nhsd-a-box--bg-light-yellow',
  },
  title: `General practice data hub`,
  text: `A collection of interactive dashboards, published under the open data licence, covering general practices in England.`,
  hexIcon: {
    classes: 'nhsd-a-icon--size-xxl',
    id: 'chart',
    nested: true
  },
  button: {
    label: 'Visit the hub',
    el: 'span',
  },
  boxLink: {
    href: '#',
    classes: 'nhsd-a-box-link--focus-orange',
  },
  digiblocks: {
    classes: 'nhsd-a-digiblocks--pos-tr',
  },
};
TopRight.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${TopRight(TopRight.args)}`,
    },
  },
};

export const ExternalLink = Template.bind({});
ExternalLink.storyName = 'External link';
ExternalLink.args = {
  classes: 'nhsd-m-nav-block--light-text',
  box: {
    classes: 'nhsd-a-box--bg-dark-grey',
  },
  title: `General practice data hub`,
  text: `A collection of interactive dashboards, published under the open data licence, covering general practices in England.`,
  hexIcon: {
    classes: 'nhsd-a-icon--size-xxl',
    id: 'chart',
    nested: true
  },
  button: {
    label: 'Visit the hub',
    el: 'span',
    classes: 'nhsd-a-button--invert'
  },
  boxLink: {
    href: '#',
    target: '_blank',
  },
  digiblocks: {
    classes: 'nhsd-a-digiblocks--col-dark-grey nhsd-a-digiblocks--pos-bl',
  },
};
ExternalLink.parameters = {
  docs: {
    description: {
      story: `When external link is used, the component uses an id on the title element to populate an informative \`aria-label\` attribute for screen reader users, and the link should use \`rel="external"\`.`,
    },
    source: {
      code: `${sourceCode}\n${ExternalLink(ExternalLink.args)}`,
    },
  },
};
