// Load storybook config
import * as sbConfig from '../../../../storybook.config.js';

// Load template file
import template from  './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Button';
const storyDescription = `The button is the single most important call to action tool for users to perform actions.\n\nThe button component can be created using either an **&lt;a&gt;** or a **&lt;button&gt;** element - obviously the type of HTML tag used to create the component determines which attributes can be applied.`;
const sourceCode = `// Sass import \n@use "nhsd/components/atoms/button";

// HTML`;

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
    label: { control: 'text', defaultValue: 'About NHS Digital', description: 'Accessible button label. The maximum character count is ~25, anything longer will be clipped with ellipsis when `<a>` and `<button>` element is used. `<input>` cannot provide clipping.' },
    disabled: { control: 'boolean', defaultValue: false, description: 'When set, disables the button. Only works for when `<button>` or `<input>` **el** is used.' },
    classes: {
      control: {
        type: 'select',
        options: [
          '-',
          'nhsd-a-button--outline',
          'nhsd-a-button--outline-start',
          'nhsd-a-button--outline-cancel',
          'nhsd-a-button--invert',
        ],
      },
      description: 'Use `BEM` style modifier classnames to switch between button variations'
    },
    el: {
      control: {
        type: 'select',
        options: [
          'button',
          'input',
          'a'
        ],
      },
      description: 'Either an `<a>`, a `<button>` or an `<input>` element can be used for the button component.',
      defaultValue: 'button',
    },
    href: { control: 'text', description: 'When an `<a>` **el** is used to populate the component, **href** determines the URL the user is taken to when they click the element.' },
    target: { control: 'text', description: 'When an `<a>` is used to populate the component, **target** determines the URL passed on by the **href** param\'s target.'  },
	}
};

// Component template
const Template = (args) => {
  return template.render({ params: {...args} });
};

// Story 1 - Introduction / Playground
export const Introduction = Template.bind({});
Introduction.storyName = 'Introduction';
Introduction.args = {
  label: 'Read more about NHS Digital',
};
Introduction.parameters = {
  docs: {
    source: {
        code: `${sourceCode} ${Introduction(Introduction.args)}`,
    }
  },
};

export const PrimaryButton = Template.bind({});
PrimaryButton.storyName = 'Primary button';
PrimaryButton.args = {
  classes: 'nhsd-a-button',
  label: 'Take primary action',
};
PrimaryButton.parameters = {
  docs: {
    description: {
      story: 'In most cases **primary button**s are used as the main means of user interaction.',
    },
    source: {
      code: `${sourceCode}${PrimaryButton(PrimaryButton.args)}`,
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
    description: {
      story: 'When a hierarchy is required to signify level of importance among button actions, a **secondary button** can help to signify less important user action.',
    },
    source: {
      code: `${sourceCode}${SecondaryButton(SecondaryButton.args)}`,
    },
  },
};

export const StartButton = Template.bind({});
StartButton.storyName = 'Start button';
StartButton.args = {
  classes: 'nhsd-a-button--outline-start',
  label: 'Start',
};
StartButton.parameters = {
  docs: {
    description: {
      story: 'A **start button** - a version of **secondary button** - should be used when the user action is to take the user on a journey or series of tasks.',
    },
    source: {
      code: `${sourceCode}${StartButton(StartButton.args)}`,
    },
  },
};

export const CancelButton = Template.bind({});
CancelButton.storyName = 'Cancel button';
CancelButton.args = {
  classes: 'nhsd-a-button--outline-cancel',
  label: 'Cancel',
};
CancelButton.parameters = {
  docs: {
    description: {
      story: 'A **cancel button** - also a version of **secondary button** - should be used when the user is given the option to cancel an action - for instance abort submitting a form.',
    },
    source: {
      code: `${sourceCode}${CancelButton(CancelButton.args)}`,
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
      story: 'A **tertiary button** should be used on dark backgrounds. (Use the **Canvas** for preview.)',
    },
    source: {
      code: `${sourceCode}${TertiaryButton(TertiaryButton.args)}`,
    },
  },
};

export const LinkButton = Template.bind({});
LinkButton.storyName = 'Link button';
LinkButton.args = {
  label: 'Link to the Storybook documentation',
  el: 'a',
  href: 'https://www.learnstorybook.com/design-systems-for-developers/react/en/distribute/',
  target: '_blank',
};
LinkButton.parameters = {
  docs: {
    description: {
      story: 'An `<a>` element can be used to create the button component. A valid link button should have a **href** attribute, and when the URL links to an external link, the **target**  attribute should be set to **_blank**.',
    },
    source: {
      code: `${sourceCode}${LinkButton(LinkButton.args)}`,
    },
  },
};

export const InputButton = Template.bind({});
InputButton.storyName = 'Input button';
InputButton.args = {
  label: 'Submit form',
  el: 'input',
  classes: 'nhsd-a-button--outline'
};
InputButton.parameters = {
  docs: {
    description: {
      story: 'An `<input>` element can be used to create the button component - this is particularly helpful when the user needs to **submit a form**.',
    },
    source: {
      code: `${sourceCode}${InputButton(InputButton.args)}`,
    },
  },
};

export const DisabledButton = Template.bind({});
DisabledButton.storyName = 'Disabled button';
DisabledButton.args = {
  label: 'You can\'t click me',
  el: 'input',
  disabled: true,
};
DisabledButton.parameters = {
  docs: {
    description: {
      story: 'When `<button>` and `<input>` elements are used to create the button, it can be disabled to prevent it from reacting to user interaction. \n\nLink buttons using `<a>` element cannot be disabled.',
    },
    source: {
      code: `${sourceCode}${DisabledButton(DisabledButton.args)}`,
    },
  },
};
