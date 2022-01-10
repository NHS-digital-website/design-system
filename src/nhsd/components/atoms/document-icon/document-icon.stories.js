/* global document */

// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';

const componentName = 'Document icon';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}
- The document icons are a special set of 15 icons - specifically used to illustrate various document types. These icons are not interchangeable with the <a href="/docs/design-system-components-atoms-icon--lab-component">Icon atom</a>.
- Due to the intended use case of these icons, they use their defauly colours, and there is no colouring option available.
- There are 3 size variants available - Small/Medium (default)/Large. Please note that while the sizes in this doc are given in PX, the actual dimensions use REM unit equivalents.
- Using external images is possible - the img element inside the component will be resized the same way as if it was an inline SVG.

### Tokens used
- Utils

### Available sizes
|Size|Class name|Width|Height|
|---|---|---|---|
|**S**|<span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-a-document-icon--size-s</span>|34px|40px|
|**M**|<span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-a-document-icon--size-m</span>|45px|53px|
|**L**|<span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-a-document-icon--size-l</span>|60px|71px|`;
const sourceCode = '// Sass import \n@use "nhsd/components/atoms/icon";\n\n// HTML';

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
  argTypes: {
    id: {
      control: {
        type: 'select',
        options: [
          'document_web',
          'document_page',
          'document_pdf',
          'document_doc',
          'document_txt',
          'document_xls',
          'document_csv',
          'document_img',
          'document_mov',
          'document_ppt',
          'document_zip',
          'document_jar',
          'document_json',
          'document_xml',
          'document_war',
        ],
      },
      defaultValue: 'document_doc',
      description: 'Each icon has a unique identifier. Use it to change the visual appearance of the icon.',
    },
    classes: { control: 'text', defaultValue: 'nhsd-a-document-icon--size-l', description: 'Use **BEM style** modifier classes to control the size of the icon.' },
  },
};

// Component template
const Template = (args) => template.render({ params: { ...args } });

export const LabComponent = Template.bind({});
LabComponent.storyName = sbConfig.title.lab;
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)} `,
    },
  },
};

export const ExternalSource = Template.bind({});
ExternalSource.args = {
  id: null, // Get rid of the default icon in this story
  source: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
};
ExternalSource.storyName = 'External image source';
ExternalSource.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ExternalSource(ExternalSource.args)} `,
    },
  },
};

export const EveryDocumentIconSmall = () => {
  const div = document.createElement('div');
  div.innerHTML = `
  ${LabComponent({ id: 'document_web', classes: 'nhsd-a-document-icon--size-s' })}
  ${LabComponent({ id: 'document_page', classes: 'nhsd-a-document-icon--size-s' })}
  ${LabComponent({ id: 'document_pdf', classes: 'nhsd-a-document-icon--size-s' })}
  ${LabComponent({ id: 'document_doc', classes: 'nhsd-a-document-icon--size-s' })}
  ${LabComponent({ id: 'document_txt', classes: 'nhsd-a-document-icon--size-s' })}
  ${LabComponent({ id: 'document_xls', classes: 'nhsd-a-document-icon--size-s' })}
  ${LabComponent({ id: 'document_csv', classes: 'nhsd-a-document-icon--size-s' })}
  ${LabComponent({ id: 'document_img', classes: 'nhsd-a-document-icon--size-s' })}
  ${LabComponent({ id: 'document_mov', classes: 'nhsd-a-document-icon--size-s' })}
  ${LabComponent({ id: 'document_ppt', classes: 'nhsd-a-document-icon--size-s' })}
  ${LabComponent({ id: 'document_zip', classes: 'nhsd-a-document-icon--size-s' })}
  ${LabComponent({ id: 'document_jar', classes: 'nhsd-a-document-icon--size-s' })}
  ${LabComponent({ id: 'document_json', classes: 'nhsd-a-document-icon--size-s' })}
  ${LabComponent({ id: 'document_xml', classes: 'nhsd-a-document-icon--size-s' })}
  ${LabComponent({ id: 'document_war', classes: 'nhsd-a-document-icon--size-s' })}`;
  return div;
};
EveryDocumentIconSmall.storyName = 'Document icons / Small';
EveryDocumentIconSmall.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${EveryDocumentIconSmall().innerHTML} `,
    },
  },
};

export const EveryDocumentIconMedium = () => {
  const div = document.createElement('div');
  div.innerHTML = `
  ${LabComponent({ id: 'document_web' })}
  ${LabComponent({ id: 'document_page' })}
  ${LabComponent({ id: 'document_pdf' })}
  ${LabComponent({ id: 'document_doc' })}
  ${LabComponent({ id: 'document_txt' })}
  ${LabComponent({ id: 'document_xls' })}
  ${LabComponent({ id: 'document_csv' })}
  ${LabComponent({ id: 'document_img' })}
  ${LabComponent({ id: 'document_mov' })}
  ${LabComponent({ id: 'document_ppt' })}
  ${LabComponent({ id: 'document_zip' })}
  ${LabComponent({ id: 'document_jar' })}
  ${LabComponent({ id: 'document_json' })}
  ${LabComponent({ id: 'document_xml' })}
  ${LabComponent({ id: 'document_war' })}`;
  return div;
};
EveryDocumentIconMedium.storyName = 'Document icons / Medium (default)';
EveryDocumentIconMedium.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${EveryDocumentIconMedium().innerHTML} `,
    },
  },
};

export const EveryDocumentIconLarge = () => {
  const div = document.createElement('div');
  div.innerHTML = `
  ${LabComponent({ id: 'document_web', classes: 'nhsd-a-document-icon--size-l' })}
  ${LabComponent({ id: 'document_page', classes: 'nhsd-a-document-icon--size-l' })}
  ${LabComponent({ id: 'document_pdf', classes: 'nhsd-a-document-icon--size-l' })}
  ${LabComponent({ id: 'document_doc', classes: 'nhsd-a-document-icon--size-l' })}
  ${LabComponent({ id: 'document_txt', classes: 'nhsd-a-document-icon--size-l' })}
  ${LabComponent({ id: 'document_xls', classes: 'nhsd-a-document-icon--size-l' })}
  ${LabComponent({ id: 'document_csv', classes: 'nhsd-a-document-icon--size-l' })}
  ${LabComponent({ id: 'document_img', classes: 'nhsd-a-document-icon--size-l' })}
  ${LabComponent({ id: 'document_mov', classes: 'nhsd-a-document-icon--size-l' })}
  ${LabComponent({ id: 'document_ppt', classes: 'nhsd-a-document-icon--size-l' })}
  ${LabComponent({ id: 'document_zip', classes: 'nhsd-a-document-icon--size-l' })}
  ${LabComponent({ id: 'document_jar', classes: 'nhsd-a-document-icon--size-l' })}
  ${LabComponent({ id: 'document_json', classes: 'nhsd-a-document-icon--size-l' })}
  ${LabComponent({ id: 'document_xml', classes: 'nhsd-a-document-icon--size-l' })}
  ${LabComponent({ id: 'document_war', classes: 'nhsd-a-document-icon--size-l' })}`;
  return div;
};
EveryDocumentIconLarge.storyName = 'Document icons / Large';
EveryDocumentIconLarge.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${EveryDocumentIconLarge().innerHTML} `,
    },
  },
};
