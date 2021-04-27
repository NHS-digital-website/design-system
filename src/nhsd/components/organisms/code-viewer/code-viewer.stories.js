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

The code viewer component doesn't include support for syntax highlighting, instead this is left as an implementation detail.
This allows for maximum flexibility as the implementer can select a syntax highlighting solution which best fits with their requirements.`;

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

export const SyntaxHighlightingExample = Template.bind({});
SyntaxHighlightingExample.storyName = 'Syntax Highlighting';
SyntaxHighlightingExample.args = {
  ...CodeViewerComponent.args,
  highlightSyntax: true,
};
SyntaxHighlightingExample.parameters = {
  docs: {
    description: {
      story: 'An example of using PrismJS for syntax highlighting',
    },
    source: {
      code: `${sourceCode}\n${pretty(SyntaxHighlightingExample(SyntaxHighlightingExample.args), { ocd: true })}`,
    },
  },
};
