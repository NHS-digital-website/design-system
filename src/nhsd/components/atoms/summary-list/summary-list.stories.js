// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Summary List';
const storyDescription = `${sbConfig.heading.lab}

Summary list provides an accessible way to display terms and descriptions.

Where possible summary lists should always be implemented with a grey backgroud. An example of this is shown on the <a href="/story/design-system-components-templates-content-page--content-page-component">content page template</a>
`;

const sourceCode = `// Sass import \n@use "nhsd/components/atoms/summary-list";

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

export const LabComponent = Template.bind({});
LabComponent.storyName = sbConfig.title.lab;
LabComponent.args = {
  descriptions: [{
    header: 'Summary heading',
    details: {
      content: 'This is the summary description.',
    },
  }, {
    header: 'Summary heading',
    details: {
      content: `<ul class="nhsd-t-list nhsd-t-list--bullet nhsd-!t-margin-bottom-0">
          <li class="nhsd-!t-margin-bottom-1"><a href="#" class="nhsd-a-link">Link list item</a></li>
          <li class="nhsd-!t-margin-bottom-1"><a href="#" class="nhsd-a-link">Link list item</a></li>
          <li class="nhsd-!t-margin-bottom-1"><a href="#" class="nhsd-a-link">Link list item</a></li>
        </ul>`,
    },
  }, {
    header: 'Summary heading',
    details: {
      content: 'This is the summary description.',
    },
  }],
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};

export const WithLink = Template.bind({});
WithLink.storyName = 'With links';
WithLink.args = {
  descriptions: [{
    header: 'Summary heading',
    details: {
      content: 'This is the summary description.',
      link: {
        label: 'Change',
        href: '#',
        classes: 'nhsd-!t-margin-bottom-1',
      },
    },
  }, {
    header: 'Summary heading',
    details: {
      content: `<ul class="nhsd-t-list nhsd-t-list--bullet nhsd-!t-margin-bottom-0">
          <li class="nhsd-!t-margin-bottom-1"><a href="#" class="nhsd-a-link">Link list item</a></li>
          <li class="nhsd-!t-margin-bottom-1"><a href="#" class="nhsd-a-link">Link list item</a></li>
          <li class="nhsd-!t-margin-bottom-1"><a href="#" class="nhsd-a-link">Link list item</a></li>
        </ul>`,
      link: {
        label: 'Change',
        href: '#',
        classes: 'nhsd-!t-margin-bottom-1',
      },
    },
  }, {
    header: 'Summary heading',
    details: {
      content: 'This is the summary description.',
      link: {
        label: 'Change',
        href: '#',
        classes: 'nhsd-!t-margin-bottom-1',
      },
    },
  }],
};
WithLink.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${WithLink(WithLink.args)}`,
    },
  },
};
