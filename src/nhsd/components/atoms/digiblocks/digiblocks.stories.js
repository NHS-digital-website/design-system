// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Digiblocks';
const storyDescription = `${sbConfig.heading.lab}
### How to create digiblocks

- Use the online [Digiblock Generator](https://nhs-digital-website.github.io/nhsd-digiblock-generator/) tool to create digiblock compositions.
- Use the **Save SVG ** button to download the artwork when happy with the result on the screen.
- Make sure the **Random** colour option is selected when you save the SVG.

### How the digiblocks atom works

- The digiblocks atom only acts as a container for pre-generated digiblocks artwork. Digiblock compositions can be generated using the online [Digiblock Generator](https://nhs-digital-website.github.io/nhsd-digiblock-generator/) tool.
- This atom provides a set of default **positioning** and **colour** classes, and a set of default digiblock compositions, so out of the box this component can be used with relatively high flexibility but minimal effort.
- The digiblock composition works both with both **inline and external SVGs**. The Digiblock atom can re-colour the SVGs using the colour modifier classes (see below). When used with an external image, the colouring has to be done in the image itself.

### Position variants

- Position variants help placing the digiblocks into a certain position inside a container. This makes sense when the digiblocks are used as a background element inside another molecule or organism - such as the <a href="/docs/design-system-components-molecules-nav-block--lab-component">Nav Block molecule</a>.
- The component only offers the default position classes as a guideline, and if they don't fit the purpose on the implementation end, customised ovverides should be applied.
- The following position classes are supported by default:

|Position|Shorthand|Modifier class|
|---|---|---|
|Top left|**TL**|<span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-a-digiblocks--pos-tl</span>|
|Top right|**TR**|<span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-a-digiblocks--pos-tr</span>|
|Bottom left|**BL**|<span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-a-digiblocks--pos-bl</span>|
|Bottom right|**BR**|<span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-a-digiblocks--pos-br</span>|
|Centre left|**CL**|<span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-a-digiblocks--pos-cl</span>|
|Centre right|**CR**|<span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-a-digiblocks--pos-cr</span>|

- It is important to note that each position works best with digiblock compositions that were generated with the correct arrangement and position in mind. The component allows to position an image with a composition visually optimised for TR arrangement to be positioned CL or TL, but the visual effect might not be optimal. **For best result digiblocks should be generated with the expected position and visual composition in mind.**
- See examples of [positioning classes in action](TBA) below.

### Colour variants

- The Digiblocks atom can override the colours of the composition, if inline SVG is used.
- The UI toolkit cannot provide **Random colour** option using pure CSS, so it is important that the **Random colour** option is selected [Digiblock Generator](https://nhs-digital-website.github.io/nhsd-digiblock-generator/) tool when saving SVGs.
- The following colour (themes) can be used with modifier classes:

|Colour name|Modifier class|Example|
|---|---|---|
|Black|<span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-a-digiblocks--col-black</span>|<div class="nhsd-a-digiblocks nhsd-a-digiblocks--mini nhsd-a-digiblocks--col-black"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><g><g transform="translate(65, 59)"><polygon points="0,20.5 35.5,0 71,20.5 35.5,41" fill="#F5D507"></polygon><polygon points="35.5,82 71,61.4 71,20.5 35.5,41" fill="#F2CB0C"></polygon><polygon points="0,20.5 0,61.4 35.5,82 35.5,41" fill="#EEC000"></polygon></g></g></svg></div>|
|Yellow|<span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-a-digiblocks--col-yellow</span>|<div class="nhsd-a-digiblocks nhsd-a-digiblocks--mini nhsd-a-digiblocks--col-yellow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><g><g transform="translate(65, 59)"><polygon points="0,20.5 35.5,0 71,20.5 35.5,41" fill="#F5D507"></polygon><polygon points="35.5,82 71,61.4 71,20.5 35.5,41" fill="#F2CB0C"></polygon><polygon points="0,20.5 0,61.4 35.5,82 35.5,41" fill="#EEC000"></polygon></g></g></svg></div>|
|Blue|<span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-a-digiblocks--col-blue</span>|<div class="nhsd-a-digiblocks nhsd-a-digiblocks--mini nhsd-a-digiblocks--col-blue"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><g><g transform="translate(65, 59)"><polygon points="0,20.5 35.5,0 71,20.5 35.5,41" fill="#F5D507"></polygon><polygon points="35.5,82 71,61.4 71,20.5 35.5,41" fill="#F2CB0C"></polygon><polygon points="0,20.5 0,61.4 35.5,82 35.5,41" fill="#EEC000"></polygon></g></g></svg></div>|
|Dark blue|<span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-a-digiblocks--col-dark-blue</span>|<div class="nhsd-a-digiblocks nhsd-a-digiblocks--mini nhsd-a-digiblocks--col-dark-blue"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><g><g transform="translate(65, 59)"><polygon points="0,20.5 35.5,0 71,20.5 35.5,41" fill="#F5D507"></polygon><polygon points="35.5,82 71,61.4 71,20.5 35.5,41" fill="#F2CB0C"></polygon><polygon points="0,20.5 0,61.4 35.5,82 35.5,41" fill="#EEC000"></polygon></g></g></svg></div>|
|Light blue|<span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-a-digiblocks--col-light-blue</span>|<div class="nhsd-a-digiblocks nhsd-a-digiblocks--mini nhsd-a-digiblocks--col-light-blue"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><g><g transform="translate(65, 59)"><polygon points="0,20.5 35.5,0 71,20.5 35.5,41" fill="#F5D507"></polygon><polygon points="35.5,82 71,61.4 71,20.5 35.5,41" fill="#F2CB0C"></polygon><polygon points="0,20.5 0,61.4 35.5,82 35.5,41" fill="#EEC000"></polygon></g></g></svg></div>|
|Grey|<span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-a-digiblocks--col-grey</span>|<div class="nhsd-a-digiblocks nhsd-a-digiblocks--mini nhsd-a-digiblocks--col-grey"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><g><g transform="translate(65, 59)"><polygon points="0,20.5 35.5,0 71,20.5 35.5,41" fill="#F5D507"></polygon><polygon points="35.5,82 71,61.4 71,20.5 35.5,41" fill="#F2CB0C"></polygon><polygon points="0,20.5 0,61.4 35.5,82 35.5,41" fill="#EEC000"></polygon></g></g></svg></div>|
|Dark grey|<span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-a-digiblocks--col-dark-grey</span>|<div class="nhsd-a-digiblocks nhsd-a-digiblocks--mini nhsd-a-digiblocks--col-dark-grey"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><g><g transform="translate(65, 59)"><polygon points="0,20.5 35.5,0 71,20.5 35.5,41" fill="#F5D507"></polygon><polygon points="35.5,82 71,61.4 71,20.5 35.5,41" fill="#F2CB0C"></polygon><polygon points="0,20.5 0,61.4 35.5,82 35.5,41" fill="#EEC000"></polygon></g></g></svg></div>|
|Light grey|<span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-a-digiblocks--col-light-grey</span>|<div class="nhsd-a-digiblocks nhsd-a-digiblocks--mini nhsd-a-digiblocks--col-light-grey"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><g><g transform="translate(65, 59)"><polygon points="0,20.5 35.5,0 71,20.5 35.5,41" fill="#F5D507"></polygon><polygon points="35.5,82 71,61.4 71,20.5 35.5,41" fill="#F2CB0C"></polygon><polygon points="0,20.5 0,61.4 35.5,82 35.5,41" fill="#EEC000"></polygon></g></g></svg></div>|
|White|<span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-a-digiblocks--col-white</span>|<div class="nhsd-a-digiblocks nhsd-a-digiblocks--mini nhsd-a-digiblocks--col-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><g><g transform="translate(65, 59)"><polygon points="0,20.5 35.5,0 71,20.5 35.5,41" fill="#F5D507"></polygon><polygon points="35.5,82 71,61.4 71,20.5 35.5,41" fill="#F2CB0C"></polygon><polygon points="0,20.5 0,61.4 35.5,82 35.5,41" fill="#EEC000"></polygon></g></g></svg></div>|

### Developer notes
- The digiblock compositions are only decorative, therefore the appropriate HTML attributes should be used to hide the image from screen readers (\`aria-hidden="false"\` and \`focusable="false"\`).
- The stories below all use the same default, inline visual composition - except where "external" source is used (which is marked accordingly).`;
const sourceCode = `// Sass import \n@use "nhsd/components/atoms/digiblocks";

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
  return template.render({ params: { ...args } });
};

const Rule = Template.bind({});

export const LabComponent = Template.bind({});
LabComponent.storyName = sbConfig.title.lab;
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};


// Colour stories
export const ColourBlack = Template.bind({});
ColourBlack.storyName = `Colours / Black`;
ColourBlack.args = {
  classes: 'nhsd-a-digiblocks--col-black',
};
ColourBlack.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ColourBlack(ColourBlack.args)}`,
    },
  },
};

export const ColourYellow = Template.bind({});
ColourYellow.storyName = `Colours / Yellow`;
ColourYellow.args = {
  classes: 'nhsd-a-digiblocks--col-yellow',
};
ColourYellow.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ColourYellow(ColourYellow.args)}`,
    },
  },
};

export const ColourDarkBlue = Template.bind({});
ColourDarkBlue.storyName = `Colours / Dark blue`;
ColourDarkBlue.args = {
  classes: 'nhsd-a-digiblocks--col-dark-blue',
};
ColourDarkBlue.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ColourDarkBlue(ColourDarkBlue.args)}`,
    },
  },
};

export const ColourBlue = Template.bind({});
ColourBlue.storyName = `Colours / Blue`;
ColourBlue.args = {
  classes: 'nhsd-a-digiblocks--col-blue',
};
ColourBlue.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ColourBlue(ColourBlue.args)}`,
    },
  },
};

export const ColourLightBlue = Template.bind({});
ColourLightBlue.storyName = `Colours / Light blue`;
ColourLightBlue.args = {
  classes: 'nhsd-a-digiblocks--col-light-blue',
};
ColourLightBlue.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ColourLightBlue(ColourLightBlue.args)}`,
    },
  },
};

export const ColourDarkGrey = Template.bind({});
ColourDarkGrey.storyName = `Colours / Dark grey`;
ColourDarkGrey.args = {
  classes: 'nhsd-a-digiblocks--col-dark-grey',
};
ColourDarkGrey.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ColourDarkGrey(ColourDarkGrey.args)}`,
    },
  },
};

export const ColourGrey = Template.bind({});
ColourGrey.storyName = `Colours / Grey`;
ColourGrey.args = {
  classes: 'nhsd-a-digiblocks--col-grey',
};
ColourGrey.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ColourGrey(ColourGrey.args)}`,
    },
  },
};

export const ColourLightGrey = Template.bind({});
ColourLightGrey.storyName = `Colours / Light grey`;
ColourLightGrey.args = {
  classes: 'nhsd-a-digiblocks--col-light-grey',
};
ColourLightGrey.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ColourLightGrey(ColourLightGrey.args)}`,
    },
  },
};

export const ColourWhite = Template.bind({});
ColourWhite.storyName = `Colours / White`;
ColourWhite.args = {
  classes: 'nhsd-a-digiblocks--col-white',
};
ColourWhite.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ColourWhite(ColourWhite.args)}`,
    },
  },
};

// Position stories
const createContainer = (contents = '') => {
  const container = document.createElement('div');
  container.style.position = 'relative';
  container.style.overflow = 'hidden';
  container.style.border = '1px dotted red';
  container.style.background = '#fefce5';
  container.style.height = '300px';
  container.innerHTML = contents;
  return container;
}

export const PositionTopLeft = () => {
  const div = createContainer(LabComponent({
    classes: 'nhsd-a-digiblocks--col-yellow nhsd-a-digiblocks--pos-tl',
  }));
  return div;
};
PositionTopLeft.storyName = `Position / TL`;
PositionTopLeft.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent({
        classes: 'nhsd-a-digiblocks--col-yellow nhsd-a-digiblocks--pos-tl',
      })}`,
    },
  },
};

export const PositionTopRight = () => {
  const div = createContainer(LabComponent({
    classes: 'nhsd-a-digiblocks--col-yellow nhsd-a-digiblocks--pos-tr',
  }));
  return div;
};
PositionTopRight.storyName = `Position / TR`;
PositionTopRight.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent({
        classes: 'nhsd-a-digiblocks--col-yellow nhsd-a-digiblocks--pos-tr',
      })}`,
    },
  },
};

export const PositionBottomLeft = () => {
  const div = createContainer(LabComponent({
    classes: 'nhsd-a-digiblocks--col-yellow nhsd-a-digiblocks--pos-bl',
  }));
  return div;
};
PositionBottomLeft.storyName = `Position / BL`;
PositionBottomLeft.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent({
        classes: 'nhsd-a-digiblocks--col-yellow nhsd-a-digiblocks--pos-bl',
      })}`,
    },
  },
};

export const PositionBottomRight = () => {
  const div = createContainer(LabComponent({
    classes: 'nhsd-a-digiblocks--col-yellow nhsd-a-digiblocks--pos-br',
  }));
  return div;
};
PositionBottomRight.storyName = `Position / BR`;
PositionBottomRight.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent({
        classes: 'nhsd-a-digiblocks--col-yellow nhsd-a-digiblocks--pos-br',
      })}`,
    },
  },
};

export const DoubleDown = () => {
  const div = createContainer(`${LabComponent({
    classes: 'nhsd-a-digiblocks--pos-br nhsd-a-digiblocks--col-dark-grey',
  })} ${LabComponent({
    classes: 'nhsd-a-digiblocks--pos-tl nhsd-a-digiblocks--col-dark-grey',
  })}`);
  return div;
};
DoubleDown.storyName = `Multiple instances`;
DoubleDown.parameters = {
  docs: {
    description: {
      story: `It is possible to add multiple digiblock atoms to a single container. The position modifier classes can help with the arrangement of the digiblock compositions.`,
    },
    source: {
      code: `${sourceCode}\n${LabComponent({
        classes: 'nhsd-a-digiblocks--pos-br nhsd-a-digiblocks--col-dark-grey',
      })} ${LabComponent({
        classes: 'nhsd-a-digiblocks--pos-tl nhsd-a-digiblocks--col-dark-grey',
      })}`,
    },
  },
};

export const DoubleDownCentred = () => {
  const div = createContainer(`${LabComponent({
    classes: 'nhsd-a-digiblocks--pos-cl',
    source: 'https://nhs-digital-website.github.io/nhsd-digiblock-generator/assets/images/db-comp-3.svg',
  })} ${LabComponent({
    classes: 'nhsd-a-digiblocks--pos-cr',
    source: 'https://nhs-digital-website.github.io/nhsd-digiblock-generator/assets/images/db-comp-2.svg',
  })}`);
  return div;
};
DoubleDownCentred.storyName = `Multiple instances - centred`;
DoubleDownCentred.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent({
        classes: 'nhsd-a-digiblocks--pos-cl',
        source: 'https://nhs-digital-website.github.io/nhsd-digiblock-generator/assets/images/db-comp-3.svg',
      })} ${LabComponent({
        classes: 'nhsd-a-digiblocks--pos-cr',
        source: 'https://nhs-digital-website.github.io/nhsd-digiblock-generator/assets/images/db-comp-2.svg',
      })}`,
    },
  },
};


export const ExternalSource = () => {
  const div = createContainer(`${LabComponent({
    classes: 'nhsd-a-digiblocks--pos-tr',
    source: 'https://nhs-digital-website.github.io/nhsd-digiblock-generator/assets/images/db-comp-2.svg',
  })} ${LabComponent({
    classes: 'nhsd-a-digiblocks--pos-bl',
    source: 'https://nhs-digital-website.github.io/nhsd-digiblock-generator/assets/images/db-comp-1.svg',
  })}`);
  return div;
};
ExternalSource.storyName = `External source`;
ExternalSource.parameters = {
  docs: {
    description: {
      story: `- This example uses 2 external SVGs for the composition source.
- It is possible to load an external SVG as an image source. When an external SVG source is used, the component cannot do colouring using CSS, so it is important that the required colour is selected in the Digiblock generator tool when the SVG is saved.
- Positioning is scaling of the composition works the same way for inline and external SVGs.`,
    },
    source: {
      code: `${sourceCode}\n${LabComponent({
        classes: 'nhsd-a-digiblocks--pos-tr',
        source: 'https://nhs-digital-website.github.io/nhsd-digiblock-generator/assets/images/db-comp-2.svg',
      })} ${LabComponent({
        classes: 'nhsd-a-digiblocks--pos-bl',
        source: 'https://nhs-digital-website.github.io/nhsd-digiblock-generator/assets/images/db-comp-1.svg',
      })}`,
    },
  },
};
