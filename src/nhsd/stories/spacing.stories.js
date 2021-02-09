/* global document */

// Load storybook config
import * as sbConfig from '../../../.storybook/storybook-config';

// Load stylesheet file
require('../scss-core/tokens/_spacing.scss');

const storyDescription = `${sbConfig.heading.lab}

Spacing is a core token, which allows the design and development team to use a centrally defined, consistent spacing system in order to apply **margins** and **padding** to other tokens and component.

**Spacing should always be applied to components using this token. Only if the spacing token doesn't provide with an appropriate spacing value, custom spacing should be added.**

### Scale
|Step|PX value|REM value|
|---|---|---|
|0|0px|0rem|
|1|5px|0.277rem|
|2|10px|0.555rem|
|3|15px|0.833rem|
|4|20px|1.111rem|
|5|25px|1.388rem|
|6|30px|1.666rem|
|7|45px|2.5rem|
|8|60px|3.333rem|
|9|75px|4.166rem|
|10|90px|5rem|

### Supported properties

#### Margin
- margin
- margin-top
- margin-right
- margin-bottom
- margin-left

#### Padding
- padding
- padding-top
- padding-right
- padding-bottom
- padding-left

### Token types

**There are 2 ways to use the spacing tokens:**

- Inline override token (to be used in HTML elements directly)
- Internal token (to be used in Sass modules)

#### Inline override tokens

- <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-!t-margin-top-4</span>
- <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-!t-padding-bottom-2</span>

#### Internal tokens

- <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">margin-top: nhsd-spacing.get(4);</span>
- <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">nhsd-spacing.set-responsive("margin-top", 4);</span>
- <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">padding-bottom: nhsd-spacing.get(2);</span>

#### Additional notes

- As a general rule, bottom margin is preferred for consistency.
- All 4 directions for **margin** and **padding** properties are available - steps between 0 and 10 can be used to construct an inline token using the following formula: <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">nhsd-!t-PROPERTY-(DIRECTION-)STEP</span>.
- All **inline override tokens** are responsive - meaning that when the browser hits the mobile breakpoint, the token bumps 1 step down to reduce the space using the spacing scale consistently. For instance, so <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-!t-padding-bottom-2</span> provides 10px (step 2) bottom padding on **tablet** and above, but on **mobile** it provides 5px (step 1).`;
const sourceCode = '// Sass import \n@use "nhsd/scss-core/tokens/spacing";\n\n//HTML';

// Component defaults
export default {
  title: `${sbConfig.title.designSystem} / ${sbConfig.title.tokens} / ${sbConfig.title.spacing}`,
  parameters: {
    docs: {
      description: {
        component: storyDescription,
      },
    },
  },
};

const demoDiv = (spacingText = '<div>', classes = ['nhsd-!t-bg-yellow']) => {
  const div = document.createElement('div');
  div.style.display = 'flex';
  div.style.alignItems = 'center';
  div.style.justifyContent = 'center';
  div.classList.add(...['nhsd-t-body-s', 'nhsd-!t-margin-bottom-0', ...classes]);
  if (spacingText.length) {
    div.classList.add(spacingText);
    div.innerHTML = spacingText;
  }
  div.style.minHeight = '2rem';
  div.style.borderBottom = '4px solid #231f20';
  return div;
};

export const LabComponent = () => {
  const div = document.createElement('div');
  div.style.background = 'rgba(255, 0, 0, 0.7)';

  const el1 = demoDiv('nhsd-!t-margin-left-4', ['nhsd-!t-bg-yellow', 'nhsd-!t-col-black']);
  div.appendChild(el1);
  const el2 = demoDiv('nhsd-!t-padding-10', ['nhsd-!t-bg-blue', 'nhsd-!t-col-white']);
  div.appendChild(el2);
  const el3 = demoDiv('nhsd-!t-margin-top-5', ['nhsd-!t-bg-yellow', 'nhsd-!t-col-black']);
  div.appendChild(el3);

  return div;
};
LabComponent.storyName = 'Lab';
LabComponent.parameters = {
  docs: {
    description: {
      story: `Setting various spacing properties on a mix of <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">\\<div\\></span>s using the responsive, inline padding and margin override tokens.
      `,
    },
    source: {
      code: `${sourceCode}\n${LabComponent().innerHTML}`,
    },
  },
};

export const Margin = () => {
  const div = document.createElement('div');
  div.style.background = 'rgba(255, 0, 0, 0.7)';

  for (let i = 0; i <= 10; i += 1) {
    const el = demoDiv(`nhsd-!t-margin-${i}`, ['nhsd-!t-bg-yellow', 'nhsd-!t-col-black']);
    div.appendChild(el);
  }

  return div;
};
Margin.storyName = 'Margin';
Margin.parameters = {
  docs: {
    description: {
      story: `Setting the margin on a <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">\\<div\\></span> using the responsive, inline margin override tokens.
      `,
    },
    source: {
      code: `${sourceCode}\n${Margin().innerHTML}`,
    },
  },
};

export const MarginTop = () => {
  const div = document.createElement('div');
  div.style.background = 'rgba(255, 0, 0, 0.7)';

  for (let i = 0; i <= 10; i += 1) {
    const el = demoDiv(`nhsd-!t-margin-top-${i}`, ['nhsd-!t-bg-yellow', 'nhsd-!t-col-black']);
    div.appendChild(el);
  }

  return div;
};
MarginTop.storyName = 'Margin / Top';
MarginTop.parameters = {
  docs: {
    description: {
      story: `Setting the top margin on a <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">\\<div\\></span> using the responsive, inline margin override tokens.
      `,
    },
    source: {
      code: `${sourceCode}\n${MarginTop().innerHTML}`,
    },
  },
};

export const MarginLeft = () => {
  const div = document.createElement('div');
  div.style.background = 'rgba(255, 0, 0, 0.7)';

  for (let i = 0; i <= 10; i += 1) {
    const el = demoDiv(`nhsd-!t-margin-left-${i}`, ['nhsd-!t-bg-yellow', 'nhsd-!t-col-black']);
    div.appendChild(el);
  }

  return div;
};
MarginLeft.storyName = 'Margin / Left';
MarginLeft.parameters = {
  docs: {
    description: {
      story: `Setting the left margin on a <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">\\<div\\></span> using the responsive, inline margin override tokens.
      `,
    },
    source: {
      code: `${sourceCode}\n${MarginLeft().innerHTML}`,
    },
  },
};

export const Padding = () => {
  const div = document.createElement('div');

  for (let i = 0; i <= 10; i += 1) {
    const el = demoDiv(`nhsd-!t-padding-${i}`, ['nhsd-!t-bg-blue', 'nhsd-!t-col-white']);
    div.appendChild(el);
  }

  return div;
};
Padding.storyName = 'Padding';
Padding.parameters = {
  docs: {
    description: {
      story: `Setting the padding on a <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">\\<div\\></span> using the responsive, inline padding override tokens.
      `,
    },
    source: {
      code: `${sourceCode}\n${Padding().innerHTML}`,
    },
  },
};

export const PaddingTop = () => {
  const div = document.createElement('div');

  for (let i = 0; i <= 10; i += 1) {
    const el = demoDiv(`nhsd-!t-padding-top-${i}`, ['nhsd-!t-bg-blue', 'nhsd-!t-col-white']);
    div.appendChild(el);
  }

  return div;
};
PaddingTop.storyName = 'Padding / Top';
PaddingTop.parameters = {
  docs: {
    description: {
      story: `Setting the top padding on a <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">\\<div\\></span> using the responsive, inline padding override tokens.
      `,
    },
    source: {
      code: `${sourceCode}\n${PaddingTop().innerHTML}`,
    },
  },
};

export const PaddingLeft = () => {
  const div = document.createElement('div');

  for (let i = 0; i <= 10; i += 1) {
    const el = demoDiv(`nhsd-!t-padding-left-${i}`, ['nhsd-!t-bg-blue', 'nhsd-!t-col-white']);
    div.appendChild(el);
  }

  return div;
};
PaddingLeft.storyName = 'Padding / Left';
PaddingLeft.parameters = {
  docs: {
    description: {
      story: `Setting the left padding on a <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">\\<div\\></span> using the responsive, inline padding override tokens.
      `,
    },
    source: {
      code: `${sourceCode}\n${PaddingLeft().innerHTML}`,
    },
  },
};
