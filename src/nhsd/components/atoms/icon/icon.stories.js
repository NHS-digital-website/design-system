// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config.js';

// Load template file
import template from  './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Icon';
const storyDescription = `${sbConfig.heading.lab}
### Designer notes
- Currently the sizing of the icons are semi-randomly made up - although it seems to work pretty well for now. We need to define a solid scaling system based on known requirements to best support the design system.
- The icon scaling might cover most cases, but most probably won't be able to fit every use case - in certain cases the implementing molecule can define a more appropriate size based on its requirements. An example to this is the <a href="/docs/design-system-components-molecules-card--lab-component">Card molecule</a>.
- **The icon nesting relies on consistent SVG outputs - there is a well defined workflow in place, which is:**
  - Icons have to be placed on a 16x16px artboard in Illustrator, shapes and paths cleaned up (no ids, no classes, no transforms, only pure shape code) as much as possible.
  - Icon is always dead in the horizontal and vertical centre of the artboard
  - Fills > strokes
  - Black colour only
  - When exporting the icon as an SVG, only use the SVG markup inside the <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">&lt;svg&gt;&lt;/svg&gt;</span> element
  - Create macros using well identifyable IDs for every icon. In the UI toolkit there are many helper methods to generate consistent, accessible, clean and nested SVG icons with ease. Check out the icon atom's <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">template.njk</span> file!
  - The icon has to proportionally be scaled compared to the other icons
- Even though the icons are sitting inside a square box, non-square icons (such as a burger menu) can be used with this system - and they can even be nested inside the hexagonal border.

### Available sizes
|Size|Class name|Square size|
|---|---|---|
|**XXS**|<span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-a-icon--size-xxs</span>|12px|
|**XS**|<span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-a-icon--size-xs</span>|16px|
|**S**|<span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-a-icon--size-s</span>|20px|
|**M**|<span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-a-icon--size-m</span>|24px|
|**L**|<span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-a-icon--size-l</span>|48px|
|**XL**|<span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-a-icon--size-xl</span>|128px|
|**XXL**|<span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-a-icon--size-xxl</span>|256px|

### Supported colours
|Colour name|Colour|Class name|
|---|---|---|
|**White**|<span class="nhsd-!t-bg-white nhsd-!t-border-black">&nbsp;&nbsp;&nbsp;&nbsp;</span>|<span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-a-icon--col-white</span>|
|**Dark grey**|<span class="nhsd-!t-bg-dark-grey nhsd-!t-border-black">&nbsp;&nbsp;&nbsp;&nbsp;</span>|<span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-a-icon--col-dark-grey</span>|
|**Black**|<span class="nhsd-!t-bg-black nhsd-!t-border-black">&nbsp;&nbsp;&nbsp;&nbsp;</span>|<span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-a-icon--col-black</span>|
|**Yellow**|<span class="nhsd-!t-bg-yellow nhsd-!t-border-black">&nbsp;&nbsp;&nbsp;&nbsp;</span>|<span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-a-icon--col-yellow</span>|

### Using external images

The icon atom support external images (either SVG or PNG) - with or without nesting. The caveat of using external images is that we cannot colour them from CSS.`;
const sourceCode = `// Sass import \n@use "nhsd/components/atoms/icon";\n\n// HTML`;

// Component defaults
export default {
  title: `${sbConfig.title.designSystem} / ${sbConfig.title.components} / ${sbConfig.title.atoms} / ${componentName}`,
  parameters: {
    docs: {
      description: {
        component: storyDescription
      }
    },
  },
  argTypes: {
    nested: { control: 'boolean', defaultValue: false, description: 'Whether or not to nest the icon inside the **hexagonal shape**.' },
    id: {
      control: {
        type: 'select',
        options: [
          'arrow_right',
          'burger',
          'chart',
          'search',
          'x',
          'burger',
          'youtube',
          'twitter',
          'linkedin',
          'facebook',
        ],
      },
      description: 'Each icon has a unique identifier. Use it to change the visual appearance of the icon.'
    },
    classes: { control: 'text', defaultValue: '.nhsd-a-icon--size-xl', description: 'Use **BEM style** modifier classes to control the size of the icon.' },
  },
};

// Component template
const Template = (args) => {
  return template.render({ params: {...args} });
};

export const LabComponent = Template.bind({});
LabComponent.args = {
  nested: true,
  classes: 'nhsd-a-icon--size-xxl',
  id: 'chart',
};
LabComponent.storyName = sbConfig.title.lab;
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)} `,
    },
  },
};

export const ComponentVariant1 = Template.bind({});
ComponentVariant1.args = {
  classes: 'nhsd-a-icon--size-m',
  id: 'arrow_right',
};
ComponentVariant1.storyName = 'Medium sized "right arrow" icon';
ComponentVariant1.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ComponentVariant1(ComponentVariant1.args)} `,
    },
  },
};

export const ComponentVariant2 = Template.bind({});
ComponentVariant2.args = {
  classes: 'nhsd-a-icon--size-xl',
  id: 'arrow_right',
  nested: true,
};
ComponentVariant2.storyName = 'XL sized "right arrow" icon - in a hexagonal nest';
ComponentVariant2.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ComponentVariant2(ComponentVariant2.args)} `,
    },
  },
};

export const ComponentVariant3 = Template.bind({});
ComponentVariant3.args = {
  classes: 'nhsd-a-icon--size-s nhsd-a-icon--col-white',
  id: 'chart',
};
ComponentVariant3.storyName = 'Small sized "chart" icon in white';
ComponentVariant3.parameters = {
  backgrounds: {
    default: 'blue',
  },
  docs: {
    source: {
      code: `${sourceCode}\n${ComponentVariant3(ComponentVariant3.args)} `,
    },
  },
};

export const ComponentVariant4 = Template.bind({});
ComponentVariant4.args = {
  classes: 'nhsd-a-icon--size-l nhsd-a-icon--col-yellow',
  id: 'search',
  nested: true,
};
ComponentVariant4.storyName = 'Large sized "search" icon in yellow - in a hexagonal nest';
ComponentVariant4.parameters = {
  backgrounds: {
    default: 'dark',
  },
  docs: {
    source: {
      code: `${sourceCode}\n${ComponentVariant4(ComponentVariant4.args)} `,
    },
  },
};

export const DarkGreyColour = Template.bind({});
DarkGreyColour.args = {
  classes: 'nhsd-a-icon--size-l nhsd-a-icon--col-dark-grey',
  id: 'arrow_right',
  nested: true,
};
DarkGreyColour.storyName = 'Large size, nested "right arrow" icon in dark grey';
DarkGreyColour.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${DarkGreyColour(DarkGreyColour.args)} `,
    },
  },
};

export const ExternalImage = Template.bind({});
ExternalImage.args = {
  classes: 'nhsd-a-icon--size-xxl',
  source: 'https://digital.nhs.uk/svg-magic/binaries/content/gallery/website/icons/universal/compass.svg?colour=005eb8',
};
ExternalImage.storyName = 'External image source';
ExternalImage.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ExternalImage(ExternalImage.args)} `,
    },
  },
};

export const ExternalImageNested = Template.bind({});
ExternalImageNested.args = {
  classes: 'nhsd-a-icon--size-xl',
  source: 'https://digital.nhs.uk/svg-magic/binaries/content/gallery/website/icons/clinical/genes.svg',
  nested: true,
};
ExternalImageNested.storyName = 'External image source / nested';
ExternalImageNested.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ExternalImageNested(ExternalImageNested.args)} `,
    },
  },
};
