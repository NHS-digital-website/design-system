// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Menu item';
const storyDescription = `${sbConfig.heading.lab}`;
const sourceCode = `// Sass import \n@use "nhsd/components/atoms/menu-item";\n\n// HTML`;

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
    label: { control: 'text', defaultValue: 'About NHS Digital', description: 'Clear, easy to understand text that explains where the user is taken when they click the link.', mandatory: true },
    href: { control: 'text', description: '**href** determines the URL the user is taken to when they click the element.', required: true },
    external: { control: 'boolean', description: 'Determines whether the URL should open in a new tab. If **external** is set to true, screen readers read out "*...(opens in a new tab)*" after the link title.', defaultValue: false },
	}
};

// Component template
const Template = (args) => {
  return template.render({ params: { ...args } });
};

export const LabComponent = Template.bind({});
LabComponent.args = {
  label: 'Hello world',
};
LabComponent.storyName = sbConfig.title.lab;
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode} ${LabComponent(LabComponent.args)} `,
    },
  },
};

export const Story1 = Template.bind({});
Story1.args = {
  label: 'External link',
  href: 'https://valtech.com',
  external: true,
};
Story1.storyName = `External link`;
Story1.parameters = {
  docs: {
    source: {
      code: `${sourceCode} ${Story1(Story1.args)} `,
    },
  },
};

export const Story2 = Template.bind({});
Story2.args = {
  label: 'I\'m so active, baby',
  classes: 'js-active',
};
Story2.storyName = `Activated menu item`;
Story2.parameters = {
  docs: {
    source: {
      code: `${sourceCode} ${Story2(Story2.args)} `,
    },
  },
};

export const Story3 = Template.bind({});
Story3.args = {
  label: 'Home',
  classes: 'js-mobile',
};
Story3.storyName = `Mobile state`;
Story3.parameters = {
  docs: {
    source: {
      code: `${sourceCode} ${Story3(Story3.args)} `,
    },
  },
};

export const Story4 = Template.bind({});
Story4.args = {
  label: 'Home - active by nature',
  classes: 'js-mobile js-active',
};
Story4.storyName = `Mobile state / Active`;
Story4.parameters = {
  docs: {
    source: {
      code: `${sourceCode} ${Story4(Story4.args)} `,
    },
  },
};
