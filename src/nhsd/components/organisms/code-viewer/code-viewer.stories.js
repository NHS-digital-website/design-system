import pretty from 'pretty';

// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';

// Import button component
import { PrimaryButton } from '../../atoms/button/button.stories';

// Load stylesheet file
require('./_index.scss');

const componentName = 'Code viewer';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}

The code viewer component uses Prism.js for syntax highlighting. For more info about language support please refer to the official documentation,
https://prismjs.com/#supported-languages

*Note: Although Nunjucks is not supported its syntax is based on Twig so Twig can be used when Nunjucks syntax highlighting is required*

`;
const sourceCode = `// Sass import \n@use "nhsd/components/organisms/code-viewer";

// HTML`;

// Component defaults
export default {
  title: `${sbConfig.title.designSystem} / ${sbConfig.title.components} / ${sbConfig.title.organisms} / ${componentName}`,
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

export const CodeViewerComponent = Template.bind({});
CodeViewerComponent.storyName = 'Lab';
CodeViewerComponent.args = {
  code: [
    {
      header: 'Example',
      content: PrimaryButton(PrimaryButton.args),
      contentId: 'example-content',
    },
    {
      header: 'HTML',
      content: pretty(PrimaryButton(PrimaryButton.args), { ocd: true }),
      contentId: 'html-content',
      language: 'html',
    },
    {
      header: 'Nunjucks',
      content: `{% from "nhsd/njk/macros/atoms.njk" import nhsd_a_button %}

{{ nhsd_a_button({
  label: 'Take primary action',
}) }}`,
      contentId: 'nunjucks-content',
      language: 'twig',
    },
  ],
  tabs: {
    tabs: [
      {
        label: 'Example',
        contentId: 'example-content',
      },
      {
        label: 'HTML',
        contentId: 'html-content',
      }, {
        label: 'Nunjucks',
        contentId: 'nunjucks-content',
      },
    ],
  },
  exampleLink: {
    label: 'Open this example in a new tab',
    href: 'http://localhost:6007/iframe.html?id=design-system-components-atoms-button--primary-button&viewMode=story',
    newTab: true,
  },
};
CodeViewerComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${pretty(CodeViewerComponent(CodeViewerComponent.args), { ocd: true })}`,
    },
  },
};

export const NoLineNumbers = Template.bind({});
NoLineNumbers.storyName = 'No line numbers';
NoLineNumbers.args = {
  ...CodeViewerComponent.args,
  code: [
    ...CodeViewerComponent.args.code,
  ],
};
NoLineNumbers.args.code[1] = {
  ...NoLineNumbers.args.code[1],
  noLineNumbers: true,
};
NoLineNumbers.parameters = {
  docs: {
    description: {
      story: 'Removing the class "line-numbers" disables line numbers in Prism.js',
    },
    source: {
      code: `${sourceCode}\n${pretty(NoLineNumbers(NoLineNumbers.args), { ocd: true })}`,
    },
  },
};

export const WrapCode = Template.bind({});
WrapCode.storyName = 'Wrap code';
WrapCode.args = {
  ...CodeViewerComponent.args,
  code: [
    ...CodeViewerComponent.args.code,
  ],
};
WrapCode.args.code[1] = {
  ...WrapCode.args.code[1],
  wrap: true,
};
WrapCode.parameters = {
  docs: {
    description: {
      story: 'Applying the `nhsd-o-code-viewer__code--wrap` modifier enables text wrapping',
    },
    source: {
      code: `${sourceCode}\n${pretty(WrapCode(WrapCode.args), { ocd: true })}`,
    },
  },
};

export const NoTabs = Template.bind({});
NoTabs.storyName = 'No tabs or header';
NoTabs.args = {
  ...CodeViewerComponent.args,
  code: CodeViewerComponent.args.code.slice(1, 2),
  tabs: {
    tabs: [],
  },
  noHeader: true,
};
NoTabs.parameters = {
  docs: {
    description: {
      story: 'The header and tabs are optional and can be removed for a simple code viewer',
    },
    source: {
      code: `${sourceCode}\n${pretty(NoTabs(NoTabs.args), { ocd: true })}`,
    },
  },
};
