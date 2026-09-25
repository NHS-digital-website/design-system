// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';

const componentName = 'Tab';
const storyDescription = `It is important to note that the tab atom works off the typographic settings it inherits from their parent elements. This is to make sure that the tab text matches the surrounding text content's styling, and for this reason links don'\t set any font and text related styles themselves. ${sbConfig.heading.lab}`;
const sourceCode = '// Sass import \n@use "nhsd/components/atoms/tab";\n\n// HTML';

const contrastBackdrop = (colour) => (Story, context) => {
  const bleed = context.viewMode === 'docs'
    ? `box-shadow: 0 0 0 32px ${colour}; margin-top: -22px; margin-bottom: -22px;`
    : '';
  const padding = context.viewMode === 'docs' ? '22px 22px 22px 0' : '22px';
  return `<div style="background-color: ${colour}; padding: ${padding}; box-sizing: border-box; ${bleed}">${Story()}</div>`;
};

// Component defaults
export default {
  title: "Design System / Components / Atoms / Tab",
  parameters: {
    docs: {
      description: {
        component: storyDescription,
      },
    },
  },
	argTypes: {
    label: {
      control: 'text', defaultValue: 'About NHS Digital', description: 'Clear, easy to understand text that explains where the user is taken when they click the link.', mandatory: true,
    },
    href: { control: 'text', description: '**href** determines the URL the user is taken to when they click the element.', required: true },
	},
};

// Component template
const Template = (args) => template.render({ params: { ...args } });

export const LabComponent = Template.bind({});
LabComponent.args = {
  label: 'Click to read more',
};
LabComponent.storyName = sbConfig.title.lab;
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode} ${LabComponent(LabComponent.args)} `,
    },
  },
};

export const WhiteTab = Template.bind({});
WhiteTab.args = {
  label: 'Click to read more',
  classes: 'nhsd-a-tab--col-white',
};
WhiteTab.storyName = 'White tab';
WhiteTab.parameters = {
  backgrounds: {
    default: 'dim',
  },
  docs: {
    description: {
      story: 'The **white tab** should be used on dark backgrounds. (Use the **Canvas** for preview.)',
    },
    source: {
      code: `${sourceCode} ${WhiteTab(WhiteTab.args)} `,
    },
  },
};
WhiteTab.globals = { backgrounds: { value: '#425563' } };
WhiteTab.decorators = [contrastBackdrop('#425563')];

export const DarkGreyTab = Template.bind({});
DarkGreyTab.args = {
  label: 'Click to read more',
  classes: 'nhsd-a-tab--col-dark-grey',
};
DarkGreyTab.storyName = 'Dark grey tab';
DarkGreyTab.parameters = {
  docs: {
    description: {
      story: 'The **dark grey tab** should be used on light backgrounds. (Use the **Canvas** for preview.).',
    },
    source: {
      code: `${sourceCode} ${DarkGreyTab(DarkGreyTab.args)} `,
    },
  },
};

export const BlackTab = Template.bind({});
BlackTab.args = {
  label: 'Click to read more',
  classes: 'nhsd-a-tab--col-black',
};
BlackTab.storyName = 'Black tab';
BlackTab.parameters = {
  backgrounds: {
    default: 'bright',
  },
  docs: {
    description: {
      story: 'The **black tab** should be used on light backgrounds. (Use the **Canvas** for preview.)',
    },
    source: {
      code: `${sourceCode} ${BlackTab(BlackTab.args)} `,
    },
  },
};
BlackTab.globals = { backgrounds: { value: '#fae100' } };
BlackTab.decorators = [contrastBackdrop('#fae100')];
