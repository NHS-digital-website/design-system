// Load icons
import nhsdIcon from '@/helpers/icons/inline-icon';

// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';

const componentName = 'Emphasis box';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}

### Components used
- <a href="/docs/design-system-components-atoms-box--lab-component">Box atom</a>
- <a href="/docs/design-system-components-atoms-button--lab-component">Button atom</a>
- <a href="/docs/design-system-components-atoms-image--lab-component">Image atom</a>
- <a href="/docs/design-system-components-atoms-icon--lab-component">Icon atom</a>
- <a href="/docs/design-system-components-atoms-link--lab-component">Link atom</a>

### Tokens used
- Spacing
- Colour
- Typography

### Types
- Emphasis (default - blue border box)
- Note (grey border box)
- Important (yellow border box)
- Warning (red border box)

The **important**; **note** and **default** emphasis boxes behave the same way - apart from the colour of their bo borders. Use the border modifier class on the <a href="/story/design-system-components-atoms-box--box-variant-5">box atom</a> to change the border colour.

To create a **warning** emphasis box (red text, icon and border), use the \`.nhsd-m-emphasis-box--warning\` modifier class.

> Note: Every variation of this component uses exactly the same contents and building blocks. Add or remove the optional building blocks to customise the content of your box.

### Mandatory content blocks
- Body text

### Optional content blocks
- Title
- Button
- Pictogram
- (Hexagonal) icon

### Modifiers
- **Warning:** \`.nhsd-m-emphasis-box--warning\
- **Centered:** \`.nhsd-m-emphasis-box--centred\`
- **Extra padding:** \`.nhsd-m-emphasis-box--padded\``;
const sourceCode = `// Sass import \n@use "nhsd/components/molecules/emphasis-box";

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
  classes: '',
  box: {
    classes: 'nhsd-a-box--border-blue',
  },
  title: 'Emphasis box',
  text: 'You can use the "emphasis" type emphasis box to draw attention to a particular piece of content. <a href="#" class="nhsd-a-link">The default "emphasis" level</a> should be used for most content you need to draw attention to.',
  hexIcon: {
    classes: 'nhsd-a-icon--size-xxl',
    svgSource: nhsdIcon('chart', true),
  },
  button: {
    label: 'Optional button',
    el: 'a',
    href: '#',
    classes: 'nhsd-!t-margin-top-4 nhsd-!t-margin-bottom-0',
  },
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};

export const EmphasisBox = Template.bind({});
EmphasisBox.storyName = 'Emphasis box / default';
EmphasisBox.args = {
  box: {
    classes: 'nhsd-a-box--border-blue',
  },
  title: 'Emphasis box',
  text: 'You can use the "emphasis" type emphasis box to draw attention to a particular piece of content. <a href="#" class="nhsd-a-link">The default "emphasis" level</a> should be used for most content you need to draw attention to.',
};
EmphasisBox.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${EmphasisBox(EmphasisBox.args)}`,
    },
  },
};

export const EmphasisBoxTextOnly = Template.bind({});
EmphasisBoxTextOnly.storyName = 'Emphasis box / text only';
EmphasisBoxTextOnly.args = {
  box: {
    classes: 'nhsd-a-box--border-blue',
  },
  text: 'You can use the "emphasis" type emphasis box to draw attention to a particular piece of content. <a href="#" class="nhsd-a-link">The default "emphasis" level</a> should be used for most content you need to draw attention to.',
};
EmphasisBoxTextOnly.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${EmphasisBoxTextOnly(EmphasisBoxTextOnly.args)}`,
    },
  },
};

export const EmphasisBoxWithIcon = Template.bind({});
EmphasisBoxWithIcon.storyName = 'Emphasis box / with icon';
EmphasisBoxWithIcon.args = {
  box: {
    classes: 'nhsd-a-box--border-blue',
  },
  title: 'Emphasis box',
  text: 'You can use the "emphasis" type emphasis box to draw attention to a particular piece of content. <a href="#" class="nhsd-a-link">The default "emphasis" level</a> should be used for most content you need to draw attention to.',
  hexIcon: {
    classes: 'nhsd-a-icon--size-xxl',
    svgSource: nhsdIcon('chart', true),
  },
};
EmphasisBoxWithIcon.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${EmphasisBoxWithIcon(EmphasisBoxWithIcon.args)}`,
    },
  },
};

export const EmphasisBoxWithButton = Template.bind({});
EmphasisBoxWithButton.storyName = 'Emphasis box / with button';
EmphasisBoxWithButton.args = {
  box: {
    classes: 'nhsd-a-box--border-blue',
  },
  title: 'Emphasis box with optional button',
  text: 'You can use the "emphasis" type emphasis box to draw attention to a particular piece of content. <a href="#" class="nhsd-a-link">The default "emphasis" level</a> should be used for most content you need to draw attention to.',
  button: {
    label: 'Optional button',
    el: 'a',
    href: '#',
    classes: 'nhsd-!t-margin-top-4 nhsd-!t-margin-bottom-0',
  },
};
EmphasisBoxWithButton.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${EmphasisBoxWithButton(EmphasisBoxWithButton.args)}`,
    },
  },
};

export const EmphasisBoxWithIconAndButton = Template.bind({});
EmphasisBoxWithIconAndButton.storyName = 'Emphasis box / with icon and button';
EmphasisBoxWithIconAndButton.args = {
  box: {
    classes: 'nhsd-a-box--border-blue',
  },
  title: 'Emphasis box with optional icon and optional button',
  text: 'You can use the "emphasis" type emphasis box to draw attention to a particular piece of content. <a href="#" class="nhsd-a-link">The default "emphasis" level</a> should be used for most content you need to draw attention to.',
  hexIcon: {
    classes: 'nhsd-a-icon--size-xxl',
    svgSource: nhsdIcon('chart', true),
  },
  button: {
    label: 'Optional button',
    el: 'a',
    href: '#',
    classes: 'nhsd-!t-margin-top-4 nhsd-!t-margin-bottom-0',
  },
};
EmphasisBoxWithIconAndButton.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${EmphasisBoxWithIconAndButton(EmphasisBoxWithIconAndButton.args)}`,
    },
  },
};

export const EmphasisBoxWithImage = Template.bind({});
EmphasisBoxWithImage.storyName = 'Emphasis box / with image';
EmphasisBoxWithImage.args = {
  box: {
    classes: 'nhsd-a-box--border-blue',
  },
  title: 'Emphasis box with large icon',
  text: 'You can use the "emphasis" type emphasis box to draw attention to a particular piece of content. <a href="#" class="nhsd-a-link">The default "emphasis" level</a> should be used for most content you need to draw attention to.',
  image: {
    sourceSet: [{
      url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
    }],
    alt: 'Abstract lights',
  },
};
EmphasisBoxWithImage.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${EmphasisBoxWithImage(EmphasisBoxWithImage.args)}`,
    },
  },
};

export const EmphasisBoxWithIconAndButtonAndImage = Template.bind({});
EmphasisBoxWithIconAndButtonAndImage.storyName = 'Emphasis box / with icon and button and image';
EmphasisBoxWithIconAndButtonAndImage.args = {
  box: {
    classes: 'nhsd-a-box--border-blue',
  },
  title: 'Emphasis box with optional icon, button and image',
  text: 'You can use the "emphasis" type emphasis box to draw attention to a particular piece of content. <a href="#" class="nhsd-a-link">The default "emphasis" level</a> should be used for most content you need to draw attention to.',
  hexIcon: {
    classes: 'nhsd-a-icon--size-xxl',
    svgSource: nhsdIcon('chart', true),
  },
  button: {
    label: 'Optional button',
    el: 'a',
    href: '#',
    classes: 'nhsd-!t-margin-top-4 nhsd-!t-margin-bottom-0',
  },
  image: {
    sourceSet: [{
      url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
    }],
    alt: 'Abstract lights',
  },
};
EmphasisBoxWithIconAndButtonAndImage.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${EmphasisBoxWithIconAndButtonAndImage(EmphasisBoxWithIconAndButtonAndImage.args)}`,
    },
  },
};

export const EmphasisBoxWithIconAndButtonCentred = Template.bind({});
EmphasisBoxWithIconAndButtonCentred.storyName = 'Emphasis box / centred';
EmphasisBoxWithIconAndButtonCentred.args = {
  classes: 'nhsd-m-emphasis-box--centred',
  box: {
    classes: 'nhsd-a-box--border-blue',
  },
  title: 'Emphasis box with optional icon and optional button',
  text: 'You can use the "emphasis" type emphasis box to draw attention to a particular piece of content. <a href="#" class="nhsd-a-link">The default "emphasis" level</a> should be used for most content you need to draw attention to.',
  hexIcon: {
    classes: 'nhsd-a-icon--size-xxl',
    svgSource: nhsdIcon('chart', true),
  },
  button: {
    label: 'Optional button',
    el: 'a',
    href: '#',
    classes: 'nhsd-!t-margin-top-4 nhsd-!t-margin-bottom-0',
  },
};
EmphasisBoxWithIconAndButtonCentred.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${EmphasisBoxWithIconAndButtonCentred(EmphasisBoxWithIconAndButtonCentred.args)}`,
    },
  },
};

export const EmphasisBoxWithIconAndButtonWide = Template.bind({});
EmphasisBoxWithIconAndButtonWide.storyName = 'Emphasis box / padded';
EmphasisBoxWithIconAndButtonWide.args = {
  classes: 'nhsd-m-emphasis-box--padded',
  box: {
    classes: 'nhsd-a-box--border-blue',
  },
  title: 'Emphasis box with optional icon and optional button, wide (with extra padding)',
  text: 'You can use the "emphasis" type emphasis box to draw attention to a particular piece of content. <a href="#" class="nhsd-a-link">The default "emphasis" level</a> should be used for most content you need to draw attention to.',
  hexIcon: {
    classes: 'nhsd-a-icon--size-xxl',
    svgSource: nhsdIcon('chart', true),
  },
  button: {
    label: 'Optional button',
    el: 'a',
    href: '#',
    classes: 'nhsd-!t-margin-top-4 nhsd-!t-margin-bottom-0',
  },
};
EmphasisBoxWithIconAndButtonWide.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${EmphasisBoxWithIconAndButtonWide(EmphasisBoxWithIconAndButtonWide.args)}`,
    },
  },
};

export const EmphasisBoxWithIconAndButtonWideCentred = Template.bind({});
EmphasisBoxWithIconAndButtonWideCentred.storyName = 'Emphasis box / padded and centred';
EmphasisBoxWithIconAndButtonWideCentred.args = {
  classes: 'nhsd-m-emphasis-box--padded nhsd-m-emphasis-box--centred',
  box: {
    classes: 'nhsd-a-box--border-blue',
  },
  title: 'Emphasis box with optional icon and optional button, centred and wide (with extra padding)',
  text: 'You can use the "emphasis" type emphasis box to draw attention to a particular piece of content. <a href="#" class="nhsd-a-link">The default "emphasis" level</a> should be used for most content you need to draw attention to.',
  hexIcon: {
    classes: 'nhsd-a-icon--size-xxl',
    svgSource: nhsdIcon('chart', true),
  },
  button: {
    label: 'Optional button',
    el: 'a',
    href: '#',
    classes: 'nhsd-!t-margin-top-4 nhsd-!t-margin-bottom-0',
  },
};
EmphasisBoxWithIconAndButtonWideCentred.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${EmphasisBoxWithIconAndButtonWideCentred(EmphasisBoxWithIconAndButtonWideCentred.args)}`,
    },
  },
};

export const NoteBox = Template.bind({});
NoteBox.storyName = 'Notes box';
NoteBox.args = {
  box: {
    classes: 'nhsd-a-box--border-grey',
  },
  title: 'Notes box',
  text: 'You can use the "note" type emphasis box to distinguish some text, but which isn\'t as important.',
  hexIcon: {
    classes: 'nhsd-a-icon--size-xxl',
    svgSource: nhsdIcon('chart', true),
  },
  button: {
    label: 'Optional button',
    el: 'a',
    href: '#',
    classes: 'nhsd-!t-margin-top-4 nhsd-!t-margin-bottom-0',
  },
};
NoteBox.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${NoteBox(NoteBox.args)}`,
    },
  },
};

export const ImportantBox = Template.bind({});
ImportantBox.storyName = 'Important box';
ImportantBox.args = {
  box: {
    classes: 'nhsd-a-box--border-yellow',
  },
  title: 'Important box',
  text: 'You can use the "important" type emphasis box to draw attention to particularly important content which you don\'t want users to miss.',
  hexIcon: {
    classes: 'nhsd-a-icon--size-xxl',
    svgSource: nhsdIcon('chart', true),
  },
  button: {
    label: 'Optional button',
    el: 'a',
    href: '#',
    classes: 'nhsd-!t-margin-top-4 nhsd-!t-margin-bottom-0',
  },
};
ImportantBox.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ImportantBox(ImportantBox.args)}`,
    },
  },
};

export const WarningBox = Template.bind({});
WarningBox.storyName = 'Warning box';
WarningBox.args = {
  classes: 'nhsd-m-emphasis-box--warning',
  box: {
    classes: 'nhsd-a-box--border-red',
  },
  title: 'Warning box',
  text: 'You can use the "warning" type emphasis box for critical updates. This will usually be short-term, as it is a high impact design.',
  hexIcon: {
    classes: 'nhsd-a-icon--size-xxl',
    svgSource: nhsdIcon('chart', true),
  },
  button: {
    label: 'Optional button',
    el: 'a',
    href: '#',
    classes: 'nhsd-!t-margin-top-4 nhsd-!t-margin-bottom-0',
  },
};
WarningBox.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${WarningBox(WarningBox.args)}`,
    },
  },
};

export const WideEmphasisBox = Template.bind({});
WideEmphasisBox.storyName = 'Wide Emphasis box';
WideEmphasisBox.args = {
  classes: 'nhsd-m-emphasis-box--wide',
  box: {
    classes: 'nhsd-a-box--border-blue',
  },
  title: 'Emphasis box with optional icon and optional button',
  text: 'You can use the "emphasis" type emphasis box to draw attention to a particular piece of content. <a href="#" class="nhsd-a-link">The default "emphasis" level</a> should be used for most content you need to draw attention to.',
  hexIcon: {
    classes: 'nhsd-a-icon--size-xxl',
    svgSource: nhsdIcon('chart', true),
  },
  button: {
    label: 'Optional button',
    el: 'a',
    href: '#',
    classes: 'nhsd-!t-margin-top-4 nhsd-!t-margin-bottom-0',
  },
};
WideEmphasisBox.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${WideEmphasisBox(WideEmphasisBox.args)}`,
    },
  },
};
