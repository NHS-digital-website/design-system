/* global document */

// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Button';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}

### Components used
- <a href="/docs/design-system-components-atoms-icon--lab-component">Icon atom</a>

### Tokens used
- Spacing
- Colour
- Utils
- Typography

### Component variants

1. Label only
2. Label and icon (regular or mirrored)
3. Icon only

### Implementation rules

- Only 1 line of text is allowed for the label.
- The label and the icon is vertically centred.
- The label and icon height is locked at 20px - which is exactly the size of the **small** icon variant.
- The visual order of the label and the icon is determined by their order in the DOM (no need for modifier CSS classes).
- **"Regular"** order is label + icon; **"Mirrored "** order is icon + label.`;
const sourceCode = `// Sass import \n@use "nhsd/components/atoms/button";

// HTML`;

// Component defaults
export default {
  title: `${sbConfig.title.designSystem} / ${sbConfig.title.components} / ${sbConfig.title.atoms} / ${componentName}`,
  parameters: {
    docs: {
      description: {
        component: storyDescription,
      },
    },
  },
	argTypes: {
    label: { control: 'text', description: 'Descriptive button label. The maximum character count is ~25, anything longer will be clipped with ellipsis when `<a>` and `<button>` element is used. `<input>` cannot provide clipping.' },
    disabled: { control: 'boolean', defaultValue: false, description: 'When set, disables the button. Only works for when `<button>` or `<input>` **el** is used.' },
    classes: {
      control: {
        type: 'select',
        options: [
          '-',
          'nhsd-a-button--outline',
          'nhsd-a-button--start',
          'nhsd-a-button--cancel',
          'nhsd-a-button--invert',
        ],
      },
      description: 'Use `BEM` style modifier classnames to switch between button variations',
    },
    el: {
      control: {
        type: 'select',
        options: [
          'button',
          'input',
          'a',
          'span',
        ],
      },
      description: 'Either an `<a>`, a `<button>` or an `<input>` element can be used for the button component.',
      defaultValue: 'button',
    },
    href: { control: 'text', description: 'When an `<a>` **el** is used to populate the component, **href** determines the URL the user is taken to when they click the element.' },
    target: { control: 'text', description: 'When an `<a>` is used to populate the component, **target** determines the URL passed on by the **href** param\'s target.' },
	}
};

// Component template
const Template = (args) => template.render({ params: { ...args } });

// Story 1 - Introduction / Playground
export const LabComponent = Template.bind({});
LabComponent.storyName = sbConfig.title.lab;
LabComponent.args = {
  label: 'Read more about NHS Digital',
};
LabComponent.parameters = {
  docs: {
    source: {
        code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};

export const PrimaryButton = Template.bind({});
PrimaryButton.storyName = 'Primary button';
PrimaryButton.args = {
  label: 'Take primary action',
};
PrimaryButton.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${PrimaryButton(PrimaryButton.args)}`,
    },
  },
};

export const SecondaryButton = Template.bind({});
SecondaryButton.storyName = 'Secondary button';
SecondaryButton.args = {
  classes: 'nhsd-a-button--outline',
  label: 'Take secondary action',
};
SecondaryButton.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${SecondaryButton(SecondaryButton.args)}`,
    },
  },
};

export const TertiaryButton = Template.bind({});
TertiaryButton.storyName = 'Tertiary button';
TertiaryButton.args = {
  classes: 'nhsd-a-button--invert',
  label: 'Take tertiary action',
};
TertiaryButton.parameters = {
  backgrounds: {
    default: 'dim',
  },
  docs: {
    description: {
      story: 'The **tertiary button** should be used on dark backgrounds. (Use the **Canvas** for preview.)',
    },
    source: {
      code: `${sourceCode}\n${TertiaryButton(TertiaryButton.args)}`,
    },
  },
};

export const StartButton = Template.bind({});
StartButton.storyName = 'Start button';
StartButton.args = {
  classes: 'nhsd-a-button--start',
  label: 'Start',
};
StartButton.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${StartButton(StartButton.args)}`,
    },
  },
};

export const CancelButton = Template.bind({});
CancelButton.storyName = 'Cancel button';
CancelButton.args = {
  classes: 'nhsd-a-button--cancel',
  label: 'Cancel',
};
CancelButton.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${CancelButton(CancelButton.args)}`,
    },
  },
};

export const LinkButton = Template.bind({});
LinkButton.storyName = 'Primary button / <a>';
LinkButton.args = {
  label: 'Link to the Storybook documentation',
  el: 'a',
  href: 'https://www.learnstorybook.com/design-systems-for-developers/react/en/distribute/',
  target: '_blank',
};
LinkButton.parameters = {
  docs: {
    description: {
      story: 'An `<a>` element can be used to create the button component. A valid link button should have a **href** attribute, and when the URL links to an external link, the **target**  attribute should be set to **_blank**, and the screen reader announcement should be made using the hidden label, and \`rel="external"\` should be added to the anchor tag.',
    },
    source: {
      code: `${sourceCode}\n${LinkButton(LinkButton.args)}`,
    },
  },
};

export const InputButton = Template.bind({});
InputButton.storyName = 'Secondary button / <input>';
InputButton.args = {
  label: 'Submit form',
  el: 'input',
  classes: 'nhsd-a-button--outline',
};
InputButton.parameters = {
  docs: {
    description: {
      story: 'An `<input>` element can be used to create the button component - this is particularly helpful when the user needs to **submit a form**.',
    },
    source: {
      code: `${sourceCode}\n${InputButton(InputButton.args)}`,
    },
  },
};

export const SpanButton = Template.bind({});
SpanButton.storyName = 'Primary button / <span>';
SpanButton.args = {
  label: 'It\'s all about the looks',
  el: 'span',
  classes: 'nhsd-a-button',
};
SpanButton.parameters = {
  docs: {
    description: {
      story: 'A `<span>` element can be used to create the button component - one that looks like a button, but in fact doesn\'t work like one. This can be useful when the button is wrapped inside an `<a> tag`.',
    },
    source: {
      code: `${sourceCode}\n${SpanButton(SpanButton.args)}`,
    },
  },
};

export const DisabledButton = Template.bind({});
DisabledButton.storyName = 'Primary button / Disabled <input>';
DisabledButton.args = {
  label: 'You can\'t click me',
  el: 'input',
  disabled: true,
};
DisabledButton.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${DisabledButton(DisabledButton.args)}`,
    },
  },
};

export const DisabledSpanButton = Template.bind({});
DisabledSpanButton.storyName = 'Primary button / Disabled <span>';
DisabledSpanButton.args = {
  label: 'It\'s all about the looks',
  el: 'span',
  disabled: true,
};
DisabledSpanButton.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${DisabledSpanButton(DisabledSpanButton.args)}`,
    },
  },
};

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.storyName = 'Primary button / With icon';
ButtonWithIcon.args = {
  classes: 'nhsd-a-button--circle',
  el: 'button',
  aria: {
    label: 'Search',
  },
  icon: {
    id: 'search',
    classes: 'nhsd-a-icon--size-s',
  },
};
ButtonWithIcon.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ButtonWithIcon(ButtonWithIcon.args)}`,
    },
  },
};

export const ButtonWithIconAndLabel = Template.bind({});
ButtonWithIconAndLabel.storyName = 'Primary button / With icon and label';
ButtonWithIconAndLabel.args = {
  label: 'Menu',
  el: 'button',
  icon: {
    id: 'burger',
    classes: 'nhsd-a-icon--size-s',
  },
};
ButtonWithIconAndLabel.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ButtonWithIconAndLabel(ButtonWithIconAndLabel.args)}`,
    },
  },
};

export const ButtonMirrored = Template.bind({});
ButtonMirrored.storyName = 'Primary button / With icon and label - mirrored';
ButtonMirrored.args = {
  label: 'Statistics',
  el: 'button',
  mirrored: true,
  icon: {
    id: 'chart',
    classes: 'nhsd-a-icon--size-s',
  },
};
ButtonMirrored.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ButtonMirrored(ButtonMirrored.args)}`,
    },
  },
};

export const MixedButtons = () => {
  const div = document.createElement('div');
  div.innerHTML = `${ButtonMirrored(ButtonMirrored.args)}
${PrimaryButton(PrimaryButton.args)}
${ButtonWithIcon(ButtonWithIcon.args)}
${ButtonWithIconAndLabel(ButtonWithIconAndLabel.args)}
  `;
  return div;
};
MixedButtons.storyName = 'Primary button / Variations';
MixedButtons.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${MixedButtons(MixedButtons.args).innerHTML}`,
    },
  },
};

export const SecondaryButtonWithIconAndLabel = Template.bind({});
SecondaryButtonWithIconAndLabel.storyName = 'Secondary button / With icon and label';
SecondaryButtonWithIconAndLabel.args = {
  classes: 'nhsd-a-button--outline',
  label: 'Secondary button',
  el: 'button',
  icon: {
    id: 'search',
    classes: 'nhsd-a-icon--size-s',
  },
};
SecondaryButtonWithIconAndLabel.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${SecondaryButtonWithIconAndLabel(SecondaryButtonWithIconAndLabel.args)}`,
    },
  },
};

export const SecondaryButtonWithIcon = Template.bind({});
SecondaryButtonWithIcon.storyName = 'Secondary button / With icon';
SecondaryButtonWithIcon.args = {
  classes: 'nhsd-a-button--outline nhsd-a-button--circle',
  el: 'button',
  aria: {
    label: 'Search',
  },
  icon: {
    id: 'search',
    classes: 'nhsd-a-icon--size-s',
  },
};
SecondaryButtonWithIcon.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${SecondaryButtonWithIcon(SecondaryButtonWithIcon.args)}`,
    },
  },
};

export const TertiaryButtonWithIconAndLabel = Template.bind({});
TertiaryButtonWithIconAndLabel.storyName = 'Tertiary button / With icon and label';
TertiaryButtonWithIconAndLabel.args = {
  classes: 'nhsd-a-button--invert',
  label: 'Tertiary button',
  el: 'button',
  icon: {
    id: 'chart',
    classes: 'nhsd-a-icon--size-s',
  },
};
TertiaryButtonWithIconAndLabel.parameters = {
  backgrounds: {
    default: 'dim',
  },
  docs: {
    source: {
      code: `${sourceCode}\n${TertiaryButtonWithIconAndLabel(TertiaryButtonWithIconAndLabel.args)}`,
    },
  },
};

export const TertiaryButtonWithIcon = Template.bind({});
TertiaryButtonWithIcon.storyName = 'Tertiary button / With icon';
TertiaryButtonWithIcon.args = {
  classes: 'nhsd-a-button--invert nhsd-a-button--circle',
  el: 'button',
  aria: {
    label: 'Search',
  },
  icon: {
    id: 'search',
    classes: 'nhsd-a-icon--size-s',
  },
};
TertiaryButtonWithIcon.parameters = {
  backgrounds: {
    default: 'dim',
  },
  docs: {
    source: {
      code: `${sourceCode}\n${TertiaryButtonWithIcon(TertiaryButtonWithIcon.args)}`,
    },
  },
};

export const DisabledButtonWithIconAndLabel = Template.bind({});
DisabledButtonWithIconAndLabel.storyName = 'Disabled button / With icon and label';
DisabledButtonWithIconAndLabel.args = {
  label: 'You can\'t click me',
  el: 'button',
  icon: {
    id: 'chart',
    classes: 'nhsd-a-icon--size-s',
  },
  disabled: true,
};
DisabledButtonWithIconAndLabel.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${DisabledButtonWithIconAndLabel(DisabledButtonWithIconAndLabel.args)}`,
    },
  },
};

export const DisabledButtonWithIcon = Template.bind({});
DisabledButtonWithIcon.storyName = 'Disabled button / With icon';
DisabledButtonWithIcon.args = {
  classes: 'nhsd-a-button--circle',
  el: 'button',
  aria: {
    label: 'Search',
  },
  icon: {
    id: 'search',
    classes: 'nhsd-a-icon--size-s',
  },
  disabled: true,
};
DisabledButtonWithIcon.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${DisabledButtonWithIcon(DisabledButtonWithIcon.args)}`,
    },
  },
};

export const StartButtonWithIconAndLabel = Template.bind({});
StartButtonWithIconAndLabel.storyName = 'Start button / With icon and label';
StartButtonWithIconAndLabel.args = {
  classes: 'nhsd-a-button--start',
  label: 'Start',
  icon: {
    id: 'arrow_right',
    classes: 'nhsd-a-icon--size-s',
  },
};
StartButtonWithIconAndLabel.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${StartButtonWithIconAndLabel(StartButtonWithIconAndLabel.args)}`,
    },
  },
};

export const StartButtonWithIcon = Template.bind({});
StartButtonWithIcon.storyName = 'Start button / With icon';
StartButtonWithIcon.args = {
  classes: 'nhsd-a-button--start nhsd-a-button--circle',
  aria: {
    label: 'Start',
  },
  icon: {
    id: 'arrow_right',
    classes: 'nhsd-a-icon--size-s',
  },
};
StartButtonWithIcon.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${StartButtonWithIcon(StartButtonWithIcon.args)}`,
    },
  },
};

export const CancelButtonWithIconAndLabel = Template.bind({});
CancelButtonWithIconAndLabel.storyName = 'Cancel button / With icon and label';
CancelButtonWithIconAndLabel.args = {
  classes: 'nhsd-a-button--cancel',
  label: 'Cancel',
  icon: {
    id: 'x',
    classes: 'nhsd-a-icon--size-s',
  },
};
CancelButtonWithIconAndLabel.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${CancelButtonWithIconAndLabel(CancelButtonWithIconAndLabel.args)}`,
    },
  },
};

export const CancelButtonWithIcon = Template.bind({});
CancelButtonWithIcon.storyName = 'Cancel button / With icon';
CancelButtonWithIcon.args = {
  classes: 'nhsd-a-button--cancel nhsd-a-button--circle',
  aria: {
    label: 'Cancel',
  },
  icon: {
    id: 'x',
    classes: 'nhsd-a-icon--size-s',
  },
};
CancelButtonWithIcon.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${CancelButtonWithIcon(CancelButtonWithIcon.args)}`,
    },
  },
};

export const ResponsiveButton = Template.bind({});
ResponsiveButton.storyName = 'Responsive / Label only';
ResponsiveButton.args = {
  classes: 'nhsd-a-button--responsive',
  label: 'Responsive button',
};
ResponsiveButton.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ResponsiveButton(ResponsiveButton.args)}`,
    },
  },
};

export const ResponsiveButtonWithIconAndLabel = Template.bind({});
ResponsiveButtonWithIconAndLabel.storyName = 'Responsive / Icon and label';
ResponsiveButtonWithIconAndLabel.args = {
  classes: 'nhsd-a-button--responsive',
  label: 'Responsive button',
  icon: {
    id: 'arrow_right',
    classes: 'nhsd-a-icon--size-s',
  },
};
ResponsiveButtonWithIconAndLabel.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ResponsiveButtonWithIconAndLabel(ResponsiveButtonWithIconAndLabel.args)}`,
    },
  },
};

export const ResponsiveButtonWithIcon = Template.bind({});
ResponsiveButtonWithIcon.storyName = 'Responsive / Icon only';
ResponsiveButtonWithIcon.args = {
  classes: 'nhsd-a-button--responsive nhsd-a-button--circle',
  aria: {
    label: 'This is a meaningful but hidden label',
  },
  icon: {
    id: 'arrow_right',
    classes: 'nhsd-a-icon--size-s',
  },
};
ResponsiveButtonWithIcon.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ResponsiveButtonWithIcon(ResponsiveButtonWithIcon.args)}`,
    },
  },
};

export const ResponsiveButtonWithIconAndLabelAndExternalLink = Template.bind({});
ResponsiveButtonWithIconAndLabelAndExternalLink.storyName = 'Responsive / Icon and label / External link';
ResponsiveButtonWithIconAndLabelAndExternalLink.args = {
  classes: 'nhsd-a-button--responsive',
  label: 'Responsive button',
  el: 'a',
  link: '#',
  target: '_blank',
  icon: {
    id: 'arrow_right',
    classes: 'nhsd-a-icon--size-s',
  },
};
ResponsiveButtonWithIconAndLabelAndExternalLink.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ResponsiveButtonWithIconAndLabelAndExternalLink(ResponsiveButtonWithIconAndLabelAndExternalLink.args)}`,
    },
  },
};

export const ResponsiveButtonWithLabelAndExternalLink = Template.bind({});
ResponsiveButtonWithLabelAndExternalLink.storyName = 'Responsive / Label only / External link';
ResponsiveButtonWithLabelAndExternalLink.args = {
  classes: 'nhsd-a-button--responsive',
  label: 'Responsive button',
  el: 'a',
  link: '#',
  target: '_blank',
};
ResponsiveButtonWithLabelAndExternalLink.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ResponsiveButtonWithLabelAndExternalLink(ResponsiveButtonWithLabelAndExternalLink.args)}`,
    },
  },
};

export const ResponsiveButtonWithIconAndExternalLink = Template.bind({});
ResponsiveButtonWithIconAndExternalLink.storyName = 'Responsive / Icon only / External link';
ResponsiveButtonWithIconAndExternalLink.args = {
  classes: 'nhsd-a-button--responsive nhsd-a-button--circle',
  aria: {
    label: 'Responsive button',
  },
  el: 'a',
  link: '#',
  target: '_blank',
  icon: {
    id: 'arrow_right',
    classes: 'nhsd-a-icon--size-s',
  },
};
ResponsiveButtonWithIconAndExternalLink.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ResponsiveButtonWithIconAndExternalLink(ResponsiveButtonWithIconAndExternalLink.args)}`,
    },
  },
};

export const TransparentButton = Template.bind({});
TransparentButton.storyName = 'Transparent button';
TransparentButton.args = {
  classes: 'nhsd-a-button--circle-condensed nhsd-a-button--transparent',
  el: 'button',
  type: 'submit',
  aria: {
    label: 'Perform search',
  },
  icon: {
    id: 'search',
    classes: 'nhsd-a-icon--size-s',
  },
};
TransparentButton.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${TransparentButton(TransparentButton.args)}`,
    },
  },
};
