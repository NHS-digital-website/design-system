// Load storybook config
import * as sbConfig from '../../../.storybook/storybook-config.js';

// Load stylesheet file
require('../scss-core/tokens/_colours.scss');

const componentName = `Colours`;
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.details}:

- Colour tokens provide easy access to the **NHS Digital colour palette**.
- There are 2 types of colour tokens:
  1. ***Internal tokens*** to be used in Sass - these can be mixins, functions and variables
  2. ***Inline tokens*** to be used in HTML - these are utility (override) classes
- Examples of how the inline tokens work can be found <a href="#inline-override-tokens">below</a>
- The only internal colour token is the \`get\` method, which works like:
  \`nhsd-colours.get("KEY")\` where **KEY** is the colour key - see the colour palette below for colour keys
- The best place to check out the internal tokens is the \`src/nhsd/scss-core/_colours.scss\` file`
  ;
const sourceCode = `// Sass import \n@use "nhsd/scss-core/tokens/colours";\n\n//HTML`;

// Component defaults
export default {
  title: `${sbConfig.title.designSystem} / ${sbConfig.title.tokens} / ${sbConfig.title.colours}`,
  parameters: {
    docs: {
      description: {
        component: storyDescription
      }
    },
  }
};

const ColourCard = (args) => {
  return `<div class="nhsd-t-col-xs-12 nhsd-t-col-s-6 nhsd-t-col-m-4 nhsd-t-col-l-3 nhsd-!t-margin-bottom-7">
  <div class="nhsd-a-box nhsd-!t-margin-bottom-3 nhsd-!t-bg-${args.key} ${args.classes ? args.classes : ''}" style="padding-bottom: 56.25%;"></div>
  <span class="nhsd-t-heading-xs nhsd-!t-margin-bottom-0">${args.name}</span>
  <hr class="nhsd-a-horizontal-rule nhsd-!t-margin-top-1 nhsd-!t-margin-bottom-1" />
  <span class="nhsd-t-body-s nhsd-!t-font-weight-bold">Hex: </span><span class="nhsd-t-body-s nhsd-!t-uppercase">#${args.code}</span>
  <br>
  <span class="nhsd-t-body-s nhsd-!t-font-weight-bold">Key: </span><span class="nhsd-t-body-s">${args.key}</span>
</div>`;
}

export const ColourPalette = () => {
  const div = document.createElement('div');
  div.innerHTML = `<div class="nhsd-t-grid">
  <div class="nhsd-t-row">
    <div class="nhsd-t-col">
      <h2 class="nhsd-t-heading-xl nhsd-!t-margin-bottom-6">Primary colour palette</h2>
    </div>
  </div>
  <div class="nhsd-t-row">
    ${ColourCard({
      name: 'Dark blue',
      key: 'dark-blue',
      code: '003087',
    })}
    ${ColourCard({
      name: 'Accessible blue',
      key: 'accessible-blue',
      code: '004da8',
    })}
    ${ColourCard({
      name: 'Blue',
      key: 'blue',
      code: '005bbb',
    })}
    ${ColourCard({
      name: 'Bright blue',
      key: 'bright-blue',
      code: '0072ce',
    })}

    ${ColourCard({
      name: 'Bright blue 20 tint',
      key: 'bright-blue-20-tint',
      code: 'cce3f5',
    })}
    ${ColourCard({
      name: 'Bright blue 10 tint',
      key: 'bright-blue-10-tint',
      code: 'e5f0fa',
    })}
    ${ColourCard({
      name: 'Yellow',
      key: 'yellow',
      code: 'fae100',
    })}
    ${ColourCard({
      name: 'Yellow 20 tint',
      key: 'yellow-20-tint',
      code: 'fef9cc',
    })}
    ${ColourCard({
      name: 'Yellow 10 tint',
      key: 'yellow-10-tint',
      code: 'fefce5',
    })}
    ${ColourCard({
      name: 'Black',
      key: 'black',
      code: '231f20',
    })}
    ${ColourCard({
      name: 'Dark grey',
      key: 'dark-grey',
      code: '3f525f',
    })}
    ${ColourCard({
      name: 'Mid grey',
      key: 'mid-grey',
      code: '768692',
    })}
    ${ColourCard({
      name: 'Pale grey',
      key: 'pale-grey',
      code: 'e8edee',
    })}
    ${ColourCard({
      name: 'Pale grey 80 tint',
      key: 'pale-grey-80-tint',
      code: 'edf1f1',
    })}
    ${ColourCard({
      name: 'Pale grey 40 tint',
      key: 'pale-grey-40-tint',
      code: 'f6f8f8',
    })}
    ${ColourCard({
      name: 'Pink',
      key: 'pink',
      code: 'ae2573',
    })}
    ${ColourCard({
      name: 'Accessible red',
      key: 'accessible-red',
      code: 'b30f0f',
    })}
    ${ColourCard({
      name: 'Red',
      key: 'red',
      code: 'da291c',
    })}
    ${ColourCard({
      name: 'Orange',
      key: 'orange',
      code: 'fa9200',
    })}
    ${ColourCard({
      name: 'Warm yellow',
      key: 'warm-yellow',
      code: 'ffb81c',
    })}
    ${ColourCard({
      name: 'Dark green',
      key: 'dark-green',
      code: '006646',
    })}
    ${ColourCard({
      name: 'Green',
      key: 'green',
      code: '009639',
    })}
    ${ColourCard({
      name: 'Light green',
      key: 'light-green',
      code: '78be20',
    })}
    ${ColourCard({
      name: 'Light blue',
      key: 'light-blue',
      code: '41b6e6',
    })}
    ${ColourCard({
      name: 'White',
      key: 'white',
      code: 'ffffff',
      classes: 'nhsd-!t-border-pale-grey',
    })}
  </div>
  <hr class="nhsd-a-horizontal-rule" />
  <div class="nhsd-t-row">
    <div class="nhsd-t-col">
      <h2 class="nhsd-t-heading-xl nhsd-!t-margin-bottom-6">Secondary colour palette</h2>
    </div>
  </div>
  <div class="nhsd-t-row">
    ${ColourCard({
      name: 'Green 20 tint',
      key: 'green-20-tint',
      code: 'ccead7',
    })}
    ${ColourCard({
      name: 'Mid grey 20 tint',
      key: 'mid-grey-20-tint',
      code: 'd5dade',
    })}
    ${ColourCard({
      name: 'Mid red 20 tint',
      key: 'mid-red-20-tint',
      code: 'f8d4d2',
    })}
    ${ColourCard({
      name: 'Mid red 10 tint',
      key: 'mid-red-10-tint',
      code: 'ffebeb',
    })}
  </div>
</div>`;
  return div;
};
ColourPalette.storyName = `${sbConfig.title.lab}`;
ColourPalette.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ColourPalette().innerHTML}`,
    },
  },
};

export const ColourOverrides = () => {
  return `<div class="nhsd-a-box nhsd-!t-bg-yellow-10-tint nhsd-!t-border-black">
  <span class="nhsd-t-heading-l nhsd-!t-colour-red">Override tokens in action</span>
  <p class="nhsd-t-body nhsd-!t-border-blue">This box is using the following colour override tokens:</p>
  <ul class="nhsd-t-list nhsd-t-list--bullet">
    <li><span class="nhsd-a-text-highlight nhsd-a-text-highlight--bg-dark-grey nhsd-!t-font-family-mono nhsd-!t-font-weight-regular">.nhsd-!t-bg-yellow-10-tint</span></li>
    <li><span class="nhsd-a-text-highlight nhsd-a-text-highlight--bg-dark-grey nhsd-!t-font-family-mono nhsd-!t-font-weight-regular">.nhsd-!t-border-black</span></li>
    <li><span class="nhsd-a-text-highlight nhsd-a-text-highlight--bg-dark-grey nhsd-!t-font-family-mono nhsd-!t-font-weight-regular">.nhsd-!t-colour-red</span></li>
    <li><span class="nhsd-a-text-highlight nhsd-a-text-highlight--bg-dark-grey nhsd-!t-font-family-mono nhsd-!t-font-weight-regular">.nhsd-!t-border-blue</span></li>
  </ul>
</div>`;
};
ColourOverrides.storyName = `Inline override tokens`;
ColourOverrides.parameters = {
  docs: {
    description: {
      story: `- Using the colour override tokens certain colour attributes can be set inline on any HTML element.
- **Currently the following attributes are supported:**
  - **Colour:** Sets the colour
  - **Background:** Sets the background colour
  - **Border:** Sets a 1px solid border using the appropriate colour
- **Class names:**
  - The token class names follow the naming convention of the other tokens. The name pattern is the following:
  - \`.nhsd-!t-colour-KEY\`, \`.nhsd-!t-bg-KEY\`, \`.nhsd-!t-border-KEY\`, where KEY is the colour key (see primary and secondary colours above)
  `,
    },
    source: {
      code: `${sourceCode}\n${ColourOverrides()}`,
    },
  },
};

