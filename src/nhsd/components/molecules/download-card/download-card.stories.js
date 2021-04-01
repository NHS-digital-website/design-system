// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Download card';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}

### Notes

- Check the Document Icon atom for a complete list of icons of supported file types.

### Components used
- <a href="/docs/design-system-components-atoms-box--lab-component">Box atom</a>
- <a href="/docs/design-system-components-atoms-button--lab-component">Button atom</a>
- <a href="/docs/design-system-components-atoms-document-icon--lab-component">Document icon atom</a>
- <a href="/docs/design-system-components-atoms-icon--lab-component">Icon atom</a>
- <a href="/docs/design-system-components-atoms-link--lab-component">Link atom</a>
- <a href="/docs/design-system-components-atoms-tag--lab-component">Tag atom</a>

### Tokens used
- Colour
- Spacing
- Transition
- Typography
- Utils`;
const sourceCode = `// Sass import \n@use "nhsd/components/molecules/download-card";

// HTML`;

// Component defaults
export default {
  title: `${sbConfig.title.designSystem} / ${sbConfig.title.components} / ${sbConfig.title.molecules} / ${componentName}`,
  parameters: {
    docs: {
      description: {
        component: storyDescription,
      },
    },
  },
  argTypes: {
    documentIconId: {
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
  },
};

// Component template
const Template = (args) => template.render({ params: { ...args } });

export const LabComponent = Template.bind({});
LabComponent.storyName = sbConfig.title.lab;
LabComponent.args = {
  box: {
    classes: 'nhsd-a-box--bg-light-grey',
  },
  documentIconId: 'document_web',
  title: {
    label: 'Electronic notifications from pharmacy to GP systems',
  },
  text: {
    label: 'Find out about the use of electronic notifications, which are used to securely share information about the urgent supply of medicines and pharmacy administered flu vaccinations with GP practices.',
  },
  tag: {
    classes: 'nhsd-a-tag--bg-dark-grey',
    label: 'ARTICLE',
  },
  arrowIcon: {
    id: 'arrow_right',
    classes: 'nhsd-a-arrow nhsd-a-arrow--right nhsd-a-icon--size-s',
  },
  boxLink: {
    href: '#',
    external: true,
  },
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};

export const WebLink = Template.bind({});
WebLink.storyName = 'Web link';
WebLink.args = {
  box: {
    classes: 'nhsd-a-box--bg-light-grey',
  },
  documentIconId: 'document_web',
  title: {
    label: 'Electronic notifications from pharmacy to GP systems',
  },
  text: {
    label: 'Find out about the use of electronic notifications, which are used to securely share information about the urgent supply of medicines and pharmacy administered flu vaccinations with GP practices.',
  },
  tag: {
    classes: 'nhsd-a-tag--bg-dark-grey',
    label: 'ARTICLE',
  },
  arrowIcon: {
    id: 'arrow_right',
    classes: 'nhsd-a-arrow nhsd-a-arrow--right nhsd-a-icon--size-s',
  },
  boxLink: {
    href: '#',
    external: true,
  },
};
WebLink.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${WebLink(WebLink.args)}`,
    },
  },
};

export const Download = Template.bind({});
Download.storyName = 'File download';
Download.args = {
  box: {
    classes: 'nhsd-a-box--bg-light-grey',
  },
  documentIconId: 'document_xls',
  title: {
    label: 'NHS Workforce Statistics, August 2020 England and Organisation',
    classes: 'nhsd-!t-margin-bottom-2',
  },
  arrowIcon: {
    id: 'arrow_down',
    classes: 'nhsd-a-arrow nhsd-a-arrow--down nhsd-a-icon--size-s',
  },
  boxLink: {
    href: '#',
  },
  metaTags: [
    {
      label: 'XLS',
      classes: 'nhsd-a-tag--meta',
    }, {
      label: '1.5MB',
      classes: 'nhsd-a-tag--meta-light',
    },
  ],
};
Download.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${Download(Download.args)}`,
    },
  },
};

export const DownloadSmall = Template.bind({});
DownloadSmall.storyName = 'File download - Small';
DownloadSmall.args = {
  size: 'small',
  box: {
    classes: 'nhsd-a-box--bg-light-grey',
  },
  documentIconId: 'document_xls',
  title: {
    label: 'NHS Workforce Statistics, August 2020 England and Organisation',
    classes: 'nhsd-!t-margin-bottom-2',
  },
  arrowIcon: {
    id: 'arrow_down',
    classes: 'nhsd-a-arrow nhsd-a-arrow--down nhsd-a-icon--size-xs',
  },
  boxLink: {
    href: '#',
  },
  metaTags: [
    {
      label: 'XLS',
      classes: 'nhsd-a-tag--meta',
    }, {
      label: '1.5MB',
      classes: 'nhsd-a-tag--meta-light',
    },
  ],
};
DownloadSmall.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${DownloadSmall(DownloadSmall.args)}`,
    },
  },
};
