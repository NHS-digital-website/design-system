// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config.js';

// Load template file
import template from  './template.njk';
// Load stylesheet file
require('./_index.scss');
// Utils to apply nhsd-u classes in the correct order
require('../../../scss-core/base/_utils.scss');

const componentName = 'Text highlight';
const storyDescription = `${sbConfig.heading.lab}`;
const sourceCode = `// Sass import \n@use "nhsd/components/atoms/text-highlight";

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
    argTypes: {}
  },
};

// Component template
const Template = (args) => {
  return template.render({ params: {...args} });
};

const TextHighlight = Template.bind({});

export const LabComponent = Template.bind({});
LabComponent.storyName = sbConfig.title.lab;
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode} ${LabComponent()}`,
    },
  },
};

export const TextHighlightDemo1 = () => {
  return TextHighlight({
    content: '/hello/...',
    classes: 'nhsd-a-text-highlight--bg-dark-grey nhsd-u-ff-mono nhsd-u-fw-regular'
  });
};
TextHighlightDemo1.storyName = 'Code snippet';
TextHighlightDemo1.parameters = {
  docs: {
    source: {
      code: `${sourceCode} ${TextHighlightDemo1()}`,
    },
  },
};

export const TextHighlightDemo2 = () => {
  return TextHighlight({
    content: 'must',
    classes: 'nhsd-a-text-highlight--bg-light-green'
  });
};
TextHighlightDemo2.storyName = 'Light green background ("must")';
TextHighlightDemo2.parameters = {
  docs: {
    source: {
      code: `${sourceCode} ${TextHighlightDemo2()}`,
    },
  },
};

export const TextHighlightDemo3 = () => {
  return TextHighlight({
    content: 'should',
    classes: 'nhsd-a-text-highlight--bg-light-blue'
  });
};
TextHighlightDemo3.storyName = 'Light blue background ("should")';
TextHighlightDemo3.parameters = {
  docs: {
    source: {
      code: `${sourceCode} ${TextHighlightDemo3()}`,
    },
  },
};

export const TextHighlightDemo4 = () => {
  return TextHighlight({
    content: 'could',
    classes: 'nhsd-a-text-highlight--bg-light-grey'
  });
};
TextHighlightDemo4.storyName = 'Light grey background ("could")';
TextHighlightDemo4.parameters = {
  docs: {
    source: {
      code: `${sourceCode} ${TextHighlightDemo4()}`,
    },
  },
};

export const TextHighlightDemo5 = () => {
  return TextHighlight({
    content: 'will not',
    classes: 'nhsd-a-text-highlight--bg-light-red'
  });
};
TextHighlightDemo5.storyName = 'Light red background ("will not")';
TextHighlightDemo5.parameters = {
  docs: {
    source: {
      code: `${sourceCode} ${TextHighlightDemo5()}`,
    },
  },
};

export const TextHighlightDemoAll = () => {
  const p = document.createElement('p');
  p.classList.add('nhsd-body');
  p.innerHTML = `Continually engineer e-business e-business before error-free e-commerce. Proactively synthesize extensive web-readiness for ${TextHighlightDemo5()} be tolerated. Progressively synthesize technically sound e-services whereas ${TextHighlightDemo2()} bleeding-edge methodologies. Seamlessly repurpose web-enabled ${TextHighlightDemo4()} applications after market-driven convergence. Rapidiously ${TextHighlightDemo3()} hello world. Assertively leverage ${TextHighlightDemo1()} existing vertical results.`;
  return p;
};
TextHighlightDemoAll.storyName = 'Multiple highlights';
TextHighlightDemoAll.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${TextHighlightDemoAll().outerHTML}`,
    },
  },
};
