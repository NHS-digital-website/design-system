// Load storybook config
import * as sbConfig from '../../../../storybook-config.js';

// Load template file
import template from  './template.njk';
// Load stylesheet file
require('./_index.scss');
require('../../../scss-core/base/_utils.scss');

const componentName = 'Text highlight';
const storyDescription = `Text highlight is for highlighting text in paragraphs.`;
const sourceCode = `// Sass import \n@use "nhsd/components/atoms/highlighter";

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
};

// Component template
const Template = (args) => {
  return template.render({ params: {...args} });
};

export const TextHighlight = Template.bind({});

export const TextHighlightDemo1 = () => {
  var p = document.createElement('p');
  p.classList.add('nhsd-body');
  p.innerHTML = `${TextHighlight({
    content: '/hello/...',
    classes: 'nhsd-a-text-highlight--bg-dark-grey nhsd-u-ff-mono nhsd-u-fw-regular'
  })}`;
  return p;
};
TextHighlightDemo1.storyName = 'Introduction';

export const TextHighlightDemo2 = () => {
  return TextHighlight({
    content: '/hello/...',
    classes: 'nhsd-body nhsd-a-text-highlight--bg-dark-grey nhsd-u-ff-mono nhsd-u-fw-regular'
  });
};
TextHighlightDemo2.storyName = 'Code snippet';

export const TextHighlightDemo3 = () => {
  return TextHighlight({
    content: 'must',
    classes: 'nhsd-body nhsd-a-text-highlight--bg-light-green'
  });
};
TextHighlightDemo3.storyName = 'MOSCOW - "must"';

export const TextHighlightDemo4 = () => {
  return TextHighlight({
    content: 'should',
    classes: 'nhsd-body nhsd-a-text-highlight--bg-light-blue'
  });
};
TextHighlightDemo4.storyName = 'MOSCOW - "could"';

export const TextHighlightDemo5 = () => {
  return TextHighlight({
    content: 'could',
    classes: 'nhsd-body nhsd-a-text-highlight--bg-light-grey'
  });
};
TextHighlightDemo5.storyName = 'MOSCOW - "could"';

export const TextHighlightDemo6 = () => {
  return TextHighlight({
    content: 'will not',
    classes: 'nhsd-a-text-highlight--bg-light-red'
  });
};
TextHighlightDemo6.storyName = 'MOSCOW - "will not"';

export const TextHighlightDemoAll = () => {
  var p = document.createElement('p');
  p.classList.add('nhsd-body');
  p.innerHTML = `Continually engineer e-business e-business before error-free e-commerce. Proactively synthesize extensive web-readiness for ${TextHighlightDemo6()} be tolerated. Progressively synthesize technically sound e-services whereas ${TextHighlightDemo3()} bleeding-edge methodologies. Seamlessly repurpose web-enabled ${TextHighlightDemo5()} applications after market-driven convergence. Rapidiously ${TextHighlightDemo4()} hello world.\n\nAssertively leverage ${TextHighlightDemo2()} existing vertical results.`;
  return p;
};
