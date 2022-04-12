// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';

const componentName = 'Steps';
const storyDescription = `${sbConfig.heading.default}

The steps component can be used to link to content across multiple pages when the content should be consumed in a specificified order (steps).

Step keys are generated automatically by the CSS. Where required substeps can be added to step content by addin an \`ol\` element with the class, \`nhsd-o-steps__substeps\`.
`;
const sourceCode = `// Sass import \n@use "nhsd/components/organisms/steps";

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

export const DefaultComponent = Template.bind({});
DefaultComponent.storyName = 'Default';
DefaultComponent.args = {
  steps: [{
    title: 'This is the title for step one',
    desc: 'Supporting text for step',
  }, {
    title: 'This is the title for step two',
    desc: 'Supporting text for step',
    substeps: [{
      title: 'Link to substep',
    }, {
      title: 'Link to substep',
    }, {
      title: 'Link to substep',
    }],
  }, {
    title: 'This is the title for step three',
    desc: 'Supporting text for step',
  }],
};
DefaultComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${DefaultComponent(DefaultComponent.args)}`,
    },
  },
};
