/* global document */

// Load storybook config
import * as sbConfig from '../../../.storybook/storybook-config';

const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.details}:
The SVG token can be used to colourise inline SVGs with NHS Digital brand colours, or a colour of your choosing.
`;
const sourceCode = '// Sass import \n@use "nhsd/scss-core/tokens/svg";\n\n//HTML';

// Component defaults
export default {
  title: `${sbConfig.title.designSystem} / ${sbConfig.title.tokens} / SVG`,
  parameters: {
    docs: {
      description: {
        component: storyDescription,
      },
    },
  },
};

export const DefaultComponent = () => {
  const div = document.createElement('div');
  div.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" focusable="false" viewBox="0 0 16 16" width="200" height="200" class="nhsd-t-svg--fill-blue"><path d="M7,10.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9c2.1,0,3.9,1.7,3.9,3.9C10.9,9.2,9.2,10.9,7,10.9zM13.4,14.8l1.4-1.4l-3-3c0.7-1,1.1-2.1,1.1-3.4c0-3.2-2.6-5.8-5.8-5.8C3.8,1.2,1.2,3.8,1.2,7c0,3.2,2.6,5.8,5.8,5.8c1.3,0,2.4-0.4,3.4-1.1L13.4,14.8z"></path></svg>';
  return div;
};
DefaultComponent.storyName = sbConfig.title.defaultStory;
DefaultComponent.parameters = {
  docs: {
    description: {
      story: `${sbConfig.heading.details}:
- To colourise an inline SVG apply the \`nhsd-t-svg--fill-blue\` class token directy to the SVG or a parent container.`,
    },
    source: {
      code: `${sourceCode}\n${DefaultComponent().innerHTML}`,
    },
  },
};
export const ColouriseComponent = () => {
  const div = document.createElement('div');
  div.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" focusable="false" viewBox="0 0 16 16" width="200" height="200" class="nhsd-t-svg--fill-blue"><path d="M7,10.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9c2.1,0,3.9,1.7,3.9,3.9C10.9,9.2,9.2,10.9,7,10.9zM13.4,14.8l1.4-1.4l-3-3c0.7-1,1.1-2.1,1.1-3.4c0-3.2-2.6-5.8-5.8-5.8C3.8,1.2,1.2,3.8,1.2,7c0,3.2,2.6,5.8,5.8,5.8c1.3,0,2.4-0.4,3.4-1.1L13.4,14.8z"></path></svg>';
  return div;
};
ColouriseComponent.storyName = 'Fill';
ColouriseComponent.parameters = {
  docs: {
    description: {
      story: `${sbConfig.heading.details}:
- To colourise an inline SVG the \`nhsd-t-svg--fill-[nhsd-colour-code]\` class token can be apply directy to the SVG or parent container.
- \`Where [nhsd-colour-code]\` is replaced with an NHSD colour code. Eg, \`nhsd-t-svg--fill-blue\``,
    },
    source: {
      code: `${sourceCode}\n${ColouriseComponent().innerHTML}`,
    },
  },
};

export const HoverComponent = () => {
  const div = document.createElement('div');
  div.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" focusable="false" viewBox="0 0 16 16" width="200" height="200" class="nhsd-t-svg--fill-hover-blue"><path d="M7,10.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9c2.1,0,3.9,1.7,3.9,3.9C10.9,9.2,9.2,10.9,7,10.9zM13.4,14.8l1.4-1.4l-3-3c0.7-1,1.1-2.1,1.1-3.4c0-3.2-2.6-5.8-5.8-5.8C3.8,1.2,1.2,3.8,1.2,7c0,3.2,2.6,5.8,5.8,5.8c1.3,0,2.4-0.4,3.4-1.1L13.4,14.8z"></path></svg>';
  return div;
};
HoverComponent.storyName = 'Interactive Fill';
HoverComponent.parameters = {
  docs: {
    description: {
      story: `${sbConfig.heading.details}:
- SVGs can also be colourise based on keyboard and mouse events such as focus and hover with the tokens:
  - nhsd-t-svg--fill-hover-[nhsd-colour-code]
  - nhsd-t-svg--fill-focus-[nhsd-colour-code]
  - nhsd-t-svg--fill-active-[nhsd-colour-code]
- \`Where [nhsd-colour-code]\` is replaced with an NHSD colour code. Eg, \`nhsd-t-svg--fill-hover-blue\``,
    },
    source: {
      code: `${sourceCode}\n${HoverComponent().innerHTML}`,
    },
  },
};

export const CustomFillComponent = () => {
  const div = document.createElement('div');
  div.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" focusable="false" viewBox="0 0 16 16" width="200" height="200" class="nhsd-t-svg--fill nhsd-t-svg--fill-hover" style="--nhsd-svg-fill: #c00; --nhsd-svg-fill-hover: #0c0;"><path d="M7,10.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9c2.1,0,3.9,1.7,3.9,3.9C10.9,9.2,9.2,10.9,7,10.9zM13.4,14.8l1.4-1.4l-3-3c0.7-1,1.1-2.1,1.1-3.4c0-3.2-2.6-5.8-5.8-5.8C3.8,1.2,1.2,3.8,1.2,7c0,3.2,2.6,5.8,5.8,5.8c1.3,0,2.4-0.4,3.4-1.1L13.4,14.8z"></path></svg>';
  return div;
};
CustomFillComponent.storyName = 'Custom Fill';
CustomFillComponent.parameters = {
  docs: {
    description: {
      story: `${sbConfig.heading.details}:
- A custom fill can be applied with the token \`nhsd-t-svg--fill\` when combined with a custom colour variable, \`style="--nhsd-svg-fill: #c00"\`
- Interactive fills can also be applied with the tokens, \`nhsd-t-svg--fill-hover\`, \`nhsd-t-svg--fill-focus\` & \`nhsd-t-svg--fill-active\` along with a corresponding colour variable, eg, \`style="--nhsd-svg-fill-hover: #0c0"\``,
    },
    source: {
      code: `${sourceCode}\n${CustomFillComponent().innerHTML}`,
    },
  },
};
