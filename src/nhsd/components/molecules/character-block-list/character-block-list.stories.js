// Load icons
import nhsdIcon from '@/helpers/icons/inline-icon';

// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';

const componentName = 'Character block list';
const storyDescription = `${sbConfig.heading.lab}

### Components used
- <a href="/docs/design-system-components-atoms-character-block--lab-component">Character block</a>`;
const sourceCode = `// Sass import \n@use "nhsd/components/molecules/character-block-list";

// HTML`;

const chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const disabledChars = ['F', 'Q', 'V', 'X', 'Y'];
const activeChar = 'C';

const charList = chars.map((char) => ({
  label: char,
  disabled: disabledChars.includes(char),
  active: char === activeChar,
  href: '/',
}));

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
  argTypes: {
    title: {
      control: 'text',
      defaultValue: 'Search A-Z',
      description: 'Title of character block list',
    },
    charList: {
      control: 'object',
      defaultValue: [],
      description: 'JSON array containing character block parameters',
    },
  },
};

// Component template
const Template = (args) => template.render({ params: { ...args } });

export const LabComponent = Template.bind({});
LabComponent.storyName = 'Character block list';
LabComponent.args = {
  title: 'Search A-Z',
  charList,
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};

const numberChars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const activeNo = '2';

const numberCharsList = numberChars.map((char) => ({
  label: char,
  active: char === activeNo,
  href: '/',
}));

export const wideNumberListComponent = Template.bind({});
wideNumberListComponent.storyName = 'Number list';
wideNumberListComponent.args = {
  title: '',
  charList: [
    {
      label: '',
      icon: {
        svgSource: nhsdIcon('arrow_left'),
        classes: 'nhsd-a-icon--size-s',
      },
      href: '/',
      ariaLabel: 'Back',
    },
    ...numberCharsList,
    {
      label: '',
      icon: {
        svgSource: nhsdIcon('arrow_right'),
        classes: 'nhsd-a-icon--size-s',
      },
      href: '/',
      ariaLabel: 'Next',
    },
  ],
};
wideNumberListComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${wideNumberListComponent(wideNumberListComponent.args)}`,
    },
  },
};
