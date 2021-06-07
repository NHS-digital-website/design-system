/* global window */

// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load content page
import { ContentPageComponent } from '../content-page/content-page.stories';

// Load template file
import template from './template.njk';

const storybookUrl = window.location.origin;

const componentName = 'Cookie Notice';
const storyDescription = `${sbConfig.heading.lab}

### Components used
- <a href="${storybookUrl}?path=/docs/design-system-components-molecules-modal--lab-component">Modal</a>
- <a href="${storybookUrl}?path=/docs/design-system-components-organisms-expander-list--lab-component">Expander list</a>

### Details
An implementation of the cookie notice modal.

In this implementation two modals are used.
The first contains two buttons, "manage my choices" and "accept all cookies".
Clicking "manage my choices" will close the first modal and open the cookie preferences modal.
On the second modal both buttons will close the modal and return the user to the page content.

At implementation additional JavaScript would be required integrate these modals with cookie scripts.
For more information about binding to modal events please refer to the <a href="${storybookUrl}?path=/docs/design-system-components-molecules-modal--lab-component">modal documentation.</a>`;

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

export const CookieNotice = Template.bind({});
CookieNotice.storyName = sbConfig.title.lab;
CookieNotice.args = {
  ...ContentPageComponent.args,
  modal1: {
    id: 'cookie-notice',
    title: 'Your privacy and cookies',
    classes: 'nhsd-m-modal--open',
    box: {
      classes: 'nhsd-!t-padding-3',
    },
    topContent: 'This site uses cookies to help improve the service we give you. Cookies help us show you content which is most relevant for you.',
    bottomContent: 'They also collect anonymous data about how you use the site, to help us improve.',
    primaryButton: {
      classes: 'nhsd-!t-margin-bottom-0',
      label: 'Accept all cookies',
      attributes: [{
        key: 'data-modal-close',
      }],
    },
    secondaryButton: {
      classes: 'nhsd-!t-margin-bottom-0 nhsd-a-button--outline',
      label: 'Manage my choices',
      attributes: [{
        key: 'data-modal-open',
        value: 'cookie-perferences',
      }, {
        key: 'data-modal-close',
      }],
    },
  },
  modal2: {
    id: 'cookie-perferences',
    title: 'Your privacy and cookies',
    box: {
      classes: 'nhsd-!t-padding-3',
    },
    topContent: 'This site uses cookies to help improve the service we give you. Cookies help us show you content which is most relevant for you.',
    bottomContent: 'They also collect anonymous data about how you use the site, to help us improve.',
    expanderList: {
      type: 'simple expander',
      toggle: {
      },
      expanders: [
        {
          heading: '"Some people" one',
          content: 'This is the content inside an expander. It can contain text, images and other content by using the visual editor.',
        },
        {
          heading: 'Preference',
          content: 'This is the content inside an expander. It can contain text, images and other content by using the visual editor.',
          expanderTable: {
            table: {
              headings: [{
                text: 'Name',
                disableSort: true,
              }, {
                text: 'Provider',
                disableSort: true,
              }, {
                text: 'Purpose',
                disableSort: true,
              }, {
                text: 'Expiry',
                disableSort: true,
              }, {
                text: 'Type',
                disableSort: true,
              }],
              data: [
                {
                  cells: [
                    ['__cfduid', 'Cdnjs', 'Used by the content network, Cloudflare, to identify trusted web traffic.', '30 days', 'HTTP'],
                  ],
                },
              ],
              repsonsive: true,
            },
          },
        },
        {
          heading: '"Some people" three',
          content: 'This is the content inside an expander. It can contain text, images and other content by using the visual editor.',
        },
      ],
      removeLastHR: true,
    },
    primaryButton: {
      classes: 'nhsd-!t-margin-bottom-0',
      label: 'Use selected cookies',
      attributes: [{
        key: 'data-modal-close',
      }],
    },
    secondaryButton: {
      classes: 'nhsd-!t-margin-bottom-0 nhsd-a-button--outline',
      label: 'Use essential cookies only',
      attributes: [{
        key: 'data-modal-close',
      }],
    },
  },
};
CookieNotice.parameters = {
  docs: {
    source: {
      code: `${CookieNotice(CookieNotice.args)}`,
    },
  },
};
