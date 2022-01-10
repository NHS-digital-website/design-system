/* global document */

// Load storybook config
import * as sbConfig from '../../../.storybook/storybook-config';

const storyDescription = `${sbConfig.heading.lab}

Width is a core token, which allows the width of any element to be set.

Typically these token classes would be used in table headings or other small areas that require a fixed width.

### Scale
|Width Size|PX value|
|---|---|
|s|90px|
|m|180px|
|l|270px|

#### Token width classes

- <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-t-width-s</span>
- <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-t-width-m</span>
- <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-t-width-l</span>`;
const sourceCode = '// Sass import \n@use "nhsd/scss-core/tokens/width";\n\n//HTML';

// Component defaults
export default {
  title: `${sbConfig.title.designSystem} / ${sbConfig.title.tokens} / ${sbConfig.title.width}`,
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

  const el1 = demoDiv('nhsd-t-width-s', ['nhsd-!t-bg-yellow', 'nhsd-!t-col-black']);
  div.appendChild(el1);
  const el2 = demoDiv('nhsd-t-width-m', ['nhsd-!t-bg-blue', 'nhsd-!t-col-white']);
  div.appendChild(el2);
  const el3 = demoDiv('nhsd-t-width-l', ['nhsd-!t-bg-yellow', 'nhsd-!t-col-black']);
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

export const widthSmall = () => {
  const div = document.createElement('div');

  const el = demoDiv('nhsd-t-width-s', ['nhsd-!t-bg-yellow', 'nhsd-!t-col-black']);
  div.appendChild(el);

  return div;
};
widthSmall.storyName = 'Width Small';
widthSmall.parameters = {
  docs: {
    description: {
      story: `Setting the width as a small size (90px) on an element.
      `,
    },
    source: {
      code: `${sourceCode}\n${widthSmall().innerHTML}`,
    },
  },
};

export const widthMedium = () => {
  const div = document.createElement('div');

  const el = demoDiv('nhsd-t-width-m', ['nhsd-!t-bg-yellow', 'nhsd-!t-col-black']);
  div.appendChild(el);

  return div;
};
widthMedium.storyName = 'Width Medium';
widthMedium.parameters = {
  docs: {
    description: {
      story: `Setting the width as a medium size (180px) on an element.
      `,
    },
    source: {
      code: `${sourceCode}\n${widthMedium().innerHTML}`,
    },
  },
};

export const widthLarge = () => {
  const div = document.createElement('div');

  const el = demoDiv('nhsd-t-width-l', ['nhsd-!t-bg-yellow', 'nhsd-!t-col-black']);
  div.appendChild(el);

  return div;
};
widthLarge.storyName = 'Width Large';
widthLarge.parameters = {
  docs: {
    description: {
      story: `Setting the width as a large size (270px) on an element.
      `,
    },
    source: {
      code: `${sourceCode}\n${widthLarge().innerHTML}`,
    },
  },
};
