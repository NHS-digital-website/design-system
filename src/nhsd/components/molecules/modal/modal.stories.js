/* global window */

// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const storybookUrl = window.location.origin;

const componentName = 'Modal';
const storyDescription = `${sbConfig.heading.default}

${sbConfig.heading.basicRules}
The modal component can be used to display hidden content or important content that should interrupt a user's current activity.
For this reason modals should be used sparingly and only where absolutely required.

### Opening a modal
The modal component can either be opened or hidden on page load. 
By applying the class \`nhsd-m-modal--open\` at page load the modal will load in its open state.
Alternatively modals can be hidden on load and trigger via a button or the JavaScript API.

To trigger a modal via a button, you must first give the modal an ID. The modal can then be triggered with a button click by applying the attribute, \`data-modal-open="[my-modal-id]"\` to the initiating button. 
An example of this can be found in the <a href="${storybookUrl}?path=/docs/design-system-components-templates-cookie-notice--cookie-notice">cookie notice story</a>.

To trigger a modal via the JavaScript API you can use the \`nhsd\` object to target a modal and trigger its open event. For example, \`nhsd('#my-modal-id').trigger('modal-open')\`

### Closing a modal
Modals can always be closed with an \`esc\` key press, however in addition to this you should always provide a button to close the modal.
This can be done by adding a button to the modal with the attribute, \`data-modal-close\`.

Alternatively, Modals can be closed with the JavaScript API via the \`nhsd\` object, \`nhsd('#my-modal-id').trigger('modal-close')\`

### Accessibility notes

The modal has been designed to comply with accessiblity standards. This includes:

- Scroll is locked while modal is shown
- The tabbing is locked to the modal
- Modal can be closed with the \`esc\` key`;

const sourceCode = `// Sass import \n@use "nhsd/components/molecules/modal";

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
};

// Component template
const Template = (args) => template.render({ params: { ...args } });

export const LabComponent = Template.bind({});
LabComponent.storyName = sbConfig.title.default;
LabComponent.args = {
  id: 'default',
  title: 'An example modal',
  classes: 'nhsd-m-modal--open',
  box: {
    classes: 'nhsd-!t-padding-3',
  },
  topContent: 'This is an example modal.',
  bottomContent: 'Modal\'s interrupt user activity and should be used sparingly.',
  primaryButton: {
    classes: 'nhsd-!t-margin-bottom-0',
    label: 'Accept',
    attributes: [{
      key: 'data-modal-close',
    }],
  },
  secondaryButton: {
    classes: 'nhsd-a-button--outline',
    label: 'Close',
    attributes: [{
      key: 'data-modal-close',
    }],
  },
};
LabComponent.parameters = {
  backgrounds: {
    default: 'dim',
  },
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};

export const MandatoryModal = Template.bind({});
MandatoryModal.storyName = 'Mandatory';
MandatoryModal.args = {
  ...LabComponent.args,
  id: 'mandatory',
  classes: '',
  mandatory: true,
};
MandatoryModal.parameters = {
  backgrounds: {
    default: 'dim',
  },
  docs: {
    description: {
      story: `Mandatory modals mandate user interaction by disabling default close events such as the "esc" key and clicking outside the modal.
      
Mandatory modals can be created by adding the attribute, \`data-modal-mandatory\``,
    },
    source: {
      code: `${sourceCode}\n${MandatoryModal(MandatoryModal.args)}`,
    },
  },
};

export const OverflowModal = Template.bind({});
OverflowModal.storyName = 'Overflow';
OverflowModal.args = {
  ...LabComponent.args,
  id: 'overflow',
  classes: 'nhsd-m-modal--overflow',
  mandatory: true,
};
OverflowModal.parameters = {
  backgrounds: {
    default: 'dim',
  },
  docs: {
    description: {
      story: 'Overflow modals prevent the modal from expanding outside the bounds of the window by using scrollbars where content doesn\'t fit.',
    },
    source: {
      code: `${sourceCode}\n${OverflowModal(OverflowModal.args)}`,
    },
  },
};
