// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';

const componentName = 'Tabbed Content Layout';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}

Tabs can be linked to content using the \`data-tab-content\` attribute and specifying an element ID. E.g. \`data-tab-content="content-1"\``;

// Component defaults
export default {
    title: `${sbConfig.title.designSystem} / ${sbConfig.title.components} / ${sbConfig.title.templates} / ${componentName}`,
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

export const TabbedContent = Template.bind({});
TabbedContent.storyName = sbConfig.title.lab;
TabbedContent.args = {
  tabs: {
    tabs: [
      {
        label: 'Content 1',
        contentId: 'content-1',
      }, {
        label: 'Content 2',
        contentId: 'content-2',
      }, {
        label: 'Content 3',
        contentId: 'content-3',
      },
    ],
    horizontalLine: {
      classes: 'nhsd-a-horizontal-rule--size-xxs',
    },
  },
  content: [
    {
      header: 'Content 1',
      html: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae gravida justo. Nullam mi neque, pretium sit amet sapien nec, placerat ultricies eros. Etiam laoreet urna ac augue aliquet, at eleifend velit pellentesque. Proin vulputate non mi nec luctus. Mauris quis turpis vitae dui pulvinar tempor id ut nunc. Aliquam enim dui, commodo eu lectus ac, placerat eleifend massa. Etiam vel augue enim. Etiam imperdiet velit at placerat consectetur. Vestibulum nibh enim, facilisis vel diam at, ornare vestibulum ligula. Integer id nulla eget augue sollicitudin vehicula vitae vel ligula. Vivamus quis est pretium, porta sem nec, consectetur lectus. Duis sodales dui cursus, vehicula arcu nec, ultricies magna. Fusce consectetur felis non tortor euismod blandit. Donec vitae dapibus nulla.',
      contentId: 'content-1',
    }, {
      header: 'Content 1',
      html: 'Etiam elementum neque at lectus pretium dictum. Pellentesque sed erat vitae lacus condimentum vestibulum sed eget metus. Aliquam fermentum scelerisque fermentum. Curabitur eu volutpat leo, vitae iaculis eros. Mauris nec tellus dignissim, viverra tellus sit amet, eleifend mi. Nullam pulvinar quis lectus at varius. Vivamus rutrum nisl eget metus viverra, ut suscipit lectus rhoncus. Mauris rutrum varius faucibus. Donec convallis orci vitae pellentesque accumsan. Curabitur congue faucibus elit. Nunc pellentesque, eros vel fermentum cursus, sapien urna pretium sapien, quis interdum tortor odio non felis. Vivamus a imperdiet risus, quis mattis ante. Etiam quis interdum tortor, nec ultricies elit. Sed tempus id ante vel pellentesque. Maecenas neque risus, ultrices ac varius in, accumsan sit amet velit. Donec sit amet ullamcorper augue.',
      contentId: 'content-2',
    }, {
      header: 'Content 1',
      html: 'Maecenas id erat ut leo semper pharetra. Aliquam nec ultrices tortor. Integer tincidunt leo nibh, id gravida dui ultricies eget. Cras vitae felis vulputate, pellentesque libero non, sollicitudin leo. In finibus, urna eu tempor iaculis, dolor quam accumsan urna, ut eleifend leo lectus et dolor. Etiam a lacus quam. Sed in ante massa. Phasellus vel urna nunc. Aliquam euismod odio nulla, et ultricies purus congue at. Praesent et velit in ante euismod finibus. Aliquam in erat nulla.',
      contentId: 'content-3',
    },
  ],
};
TabbedContent.parameters = {
  docs: {
    source: {
      code: `${TabbedContent(TabbedContent.args)}`,
    },
  },
};
