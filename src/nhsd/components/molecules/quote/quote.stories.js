// Load icons
import nhsdIcon from '@/helpers/icons/inline-icon';

// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';

const componentName = 'Quote';
const storyDescription = `Quotes allow text to stand out from other content on a web page.

${sbConfig.heading.basicRules}

The 'meta' information (person, role & organisation) is optional and this component will work successfully with or without it.

### Components used
- <a href="/docs/design-system-components-atoms-box--lab-component">Box atom</a>
- <a href="/docs/design-system-components-atoms-icon--lab-component">Icon atom</a>

### Tokens used
- Colour
- Typography
`;
const sourceCode = `// Sass import \n@use "nhsd/components/molecules/quote";

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
  argTypes: {
    quote: { control: 'text', defaultValue: 'This is my quote', description: 'Descriptive quote that is used to highlight important or noticeable text' },
    person: { control: 'text', description: 'The person\'s name' },
    role: { control: 'text', description: 'The person\'s role' },
    organisation: { control: 'text', description: 'The person\'s organisation' },
  },
};

// Component template
const Template = (args) => template.render({ params: { ...args } });

export const LabComponent = Template.bind({});
LabComponent.storyName = sbConfig.title.lab;
LabComponent.args = {
  icon: {
    svgSource: nhsdIcon('quote_open'),
    classes: 'nhsd-a-icon--size-xl nhsd-a-icon--col-blue',
  },
  quote: 'This is an example quote. You can also include internal (pages on the NHS Digital website) or external links within a quote.',
  person: 'Example person',
  role: 'Example role',
  organisation: 'Example organisation',
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};

export const Story1 = Template.bind({});
Story1.storyName = 'Quote block / Default';
Story1.args = {
  icon: {
    svgSource: nhsdIcon('quote_open'),
    classes: 'nhsd-a-icon--size-xl nhsd-a-icon--col-blue',
  },
  quote: 'This is an example quote. You can also include internal (pages on the NHS Digital website) or external links within a quote.',
  person: 'Example person',
  role: 'Example role',
  organisation: 'Example organisation',
};
Story1.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${Story1(Story1.args)}`,
    },
  },
};

export const Story2 = Template.bind({});
Story2.storyName = 'Quote block / without meta info';
Story2.args = {
  icon: {
    svgSource: nhsdIcon('quote_open'),
    classes: 'nhsd-a-icon--size-xl nhsd-a-icon--col-blue',
  },
  quote: 'This is an example quote. You can also include internal (pages on the NHS Digital website) or external links within a quote.',
};
Story2.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${Story2(Story2.args)}`,
    },
  },
};
