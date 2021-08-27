/* global document */

// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';

// Load stylesheet file
require('./_index.scss');
// Utils to apply nhsd-u classes in the correct order
require('../../../scss-core/tokens/_utils.scss');

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
        component: storyDescription,
      },
    },
  },
};

// Component template
const Template = (args) => template.render({ params: { ...args } });

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

export const TextHighlightDemo1 = () => TextHighlight({
    content: '/hello/...',
    classes: 'nhsd-a-text-highlight--code',
});
TextHighlightDemo1.storyName = 'Code snippet dark';
TextHighlightDemo1.parameters = {
  docs: {
    source: {
      code: `${sourceCode} ${TextHighlightDemo1()}`,
    },
  },
};

export const TextHighlightDemo2 = () => TextHighlight({
    content: '/hello/...',
    classes: 'nhsd-a-text-highlight--code-light',
  });
TextHighlightDemo2.storyName = 'Code snippet light';
TextHighlightDemo2.parameters = {
  docs: {
    source: {
      code: `${sourceCode} ${TextHighlightDemo2()}`,
    },
  },
};

export const TextHighlightDemo3 = () => TextHighlight({
    content: 'must',
    classes: 'nhsd-a-text-highlight--bg-light-green',
  });
TextHighlightDemo3.storyName = 'Light green background ("must")';
TextHighlightDemo3.parameters = {
  docs: {
    source: {
      code: `${sourceCode} ${TextHighlightDemo3()}`,
    },
  },
};

export const TextHighlightDemo4 = () => TextHighlight({
    content: 'should',
    classes: 'nhsd-a-text-highlight--bg-light-blue',
  });
TextHighlightDemo4.storyName = 'Light blue background ("should")';
TextHighlightDemo4.parameters = {
  docs: {
    source: {
      code: `${sourceCode} ${TextHighlightDemo4()}`,
    },
  },
};

export const TextHighlightDemo5 = () => TextHighlight({
    content: 'could',
    classes: 'nhsd-a-text-highlight--bg-light-grey',
  });
TextHighlightDemo5.storyName = 'Light grey background ("could")';
TextHighlightDemo5.parameters = {
  docs: {
    source: {
      code: `${sourceCode} ${TextHighlightDemo5()}`,
    },
  },
};

export const TextHighlightDemo6 = () => TextHighlight({
    content: 'will not',
    classes: 'nhsd-a-text-highlight--bg-light-red',
  });
TextHighlightDemo6.storyName = 'Light red background ("will not")';
TextHighlightDemo6.parameters = {
  docs: {
    source: {
      code: `${sourceCode} ${TextHighlightDemo6()}`,
    },
  },
};

export const TextHighlightDemoAll = () => {
  const p = document.createElement('p');
  p.classList.add('nhsd-t-body');
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
