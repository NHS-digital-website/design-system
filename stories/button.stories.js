import * as sbConfig from './storybook.config.js';

import template from  '../src/components/atoms/button/template.njk';
require('../src/components/atoms/button/_index.scss');

export default {
	title: `${sbConfig.title} / ${sbConfig.componentsTitle} / ${sbConfig.atomsTitle} / Button`,
	argTypes: {
    label: { control: 'text', defaultValue: 'About NHS Digital', description: 'Accessible button label' },
    classes: {
      control: {
        type: 'select',
        options: [
          'nhsd-a-button--outline',
          'nhsd-a-button--outline-start',
          'nhsd-a-button--outline-cancel',
          'nhsd-a-button--invert',
        ],
      },
      defaultValue: ' ',
      description: 'Classes are `BEM` modifiers'
    },
    el: {
      control: {
        type: 'select',
        options: [
          'button',
          'a'
        ],
      },
      description: 'Either an &lt;a&gt;, or a &lt;button&gt; can be used to look like a button',
      defaultValue: 'button'
    },
    href: { control: 'text', description: 'When an &lt;a&gt; is used to populate the component, `href` determines the URL the user is taken to when they click the element' },
    target: { control: 'text', description: 'When an &lt;`a`&gt; is used to populate the component, `target` determines the URL passed on by the `href` param\'s target'  },
	}
};

const Template = (params) => {
	return template.render({ params });
};

export const DefaultButton = Template.bind({});
