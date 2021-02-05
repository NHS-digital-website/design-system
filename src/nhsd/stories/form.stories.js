/* global document */

// Load storybook config
import * as sbConfig from '../../../.storybook/storybook-config';

// Load stylesheet file
require('../scss-core/tokens/_form.scss');

const storyDescription = `${sbConfig.heading.lab}`;
const sourceCode = '// Sass import \n@use "nhsd/scss-core/tokens/form";\n\n//HTML';

// Component defaults
export default {
  title: `${sbConfig.title.designSystem} / ${sbConfig.title.tokens} / ${sbConfig.title.forms} (WIP)`,
  parameters: {
    docs: {
      description: {
        component: storyDescription,
      },
    },
  },
};

export const LabComponent = () => {
  const div = document.createElement('div');
  div.innerHTML = `<form class="nhsd-t-form" novalidate autocomplete="off">
  <div class="nhsd-t-form-group">
    <label class="nhsd-t-form-label-s" for="first-name">Small form group label</label>
    <span class="nhsd-t-form-hint">This is a friendly hint</span>
    <input class="nhsd-t-form-input" type="text" id="first-name" autocomplete="off" />
  </div>
  <div class="nhsd-t-form-group">
    <label class="nhsd-t-form-label-m" for="last-name">Medium (default) form group label</label>
    <span class="nhsd-t-form-hint">This is a friendly hint</span>
    <input class="nhsd-t-form-input" type="text" id="last-name" autocomplete="off"/>
  </div>
  <div class="nhsd-t-form-group">
    <label class="nhsd-t-form-label-l" for="message">Large form group label</label>
    <span class="nhsd-t-form-hint">Textarea should be used where a single line input doesn't provide enough room for user input</span>
    <textarea class="nhsd-t-form-textarea" id="message" autocomplete="off"></textarea>
  </div>
  <div class="nhsd-t-form-group">
    <label class="nhsd-t-form-label-s" for="county">Another small form group label</label>
    <span class="nhsd-t-form-hint">Please choose your county</span>
    <div class="nhsd-t-form-control">
      <select class="nhsd-t-form-select" type="text" id="county">
        <option>Greater London</option>
        <option>Greater Manchester</option>
      </select>
      <span class="nhsd-t-form-control__icon">
        <span class="nhsd-a-icon nhsd-a-icon--size-s">
          <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false" viewBox="0 0 16 16"  width="100%" height="100%">
            <path d="M8,12L1,5.5L2.5,4L8,9.2L13.5,4L15,5.5L8,12z"/>
          </svg>
        </span>
      </span>
    </div>
  </div>
</form>`;
  return div;
};
LabComponent.storyName = sbConfig.title.lab;
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent().innerHTML}`,
    },
  },
};

export const Error = () => {
  const div = document.createElement('div');
  div.innerHTML = `<form class="nhsd-t-form" novalidate autocomplete="off">
  <div class="nhsd-t-form-group nhsd-t-form-group--error">
    <label class="nhsd-t-form-label-s" for="first-name">Small form group label</label>
    <span class="nhsd-t-form-hint">This is a friendly hint</span>
    <input class="nhsd-t-form-input" type="text" id="first-name" autocomplete="asdf" />
    <span class="nhsd-t-form-error">This is an error message</span>
  </div>
  <div class="nhsd-t-form-group nhsd-t-form-group--error">
    <label class="nhsd-t-form-label-m" for="last-name">Medium (default) form group label</label>
    <span class="nhsd-t-form-hint">This is a friendly hint</span>
    <input class="nhsd-t-form-input" type="text" id="last-name" autocomplete="off"/>
    <span class="nhsd-t-form-error">This is an error message</span>
  </div>
  <div class="nhsd-t-form-group nhsd-t-form-group--error">
    <label class="nhsd-t-form-label-l" for="message">Large form group label</label>
    <span class="nhsd-t-form-hint">Textarea should be used where a single line input doesn't provide enough room for user input</span>
    <textarea class="nhsd-t-form-textarea" id="message" autocomplete="off"></textarea>
    <span class="nhsd-t-form-error">This is an error message</span>
  </div>
  <div class="nhsd-t-form-group nhsd-t-form-group--error">
    <label class="nhsd-t-form-label-s" for="county">Another small form group label</label>
    <span class="nhsd-t-form-hint">Please choose your county</span>
    <div class="nhsd-t-form-control">
      <select class="nhsd-t-form-select" type="text" id="county">
        <option>Greater London</option>
        <option>Greater Manchester</option>
      </select>
      <span class="nhsd-t-form-control__icon">
        <span class="nhsd-a-icon nhsd-a-icon--size-s">
          <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false" viewBox="0 0 16 16"  width="100%" height="100%">
            <path d="M8,12L1,5.5L2.5,4L8,9.2L13.5,4L15,5.5L8,12z"/>
          </svg>
        </span>
      </span>
    </div>
    <span class="nhsd-t-form-error">This is an error message</span>
  </div>
</form>`;
  return div;
};
Error.storyName = 'Error state';
Error.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${Error().innerHTML}`,
    },
  },
};

export const Fieldset = () => {
  const div = document.createElement('div');
  div.innerHTML = `<form class="nhsd-t-form" novalidate autocomplete="off">
  <fieldset class="nhsd-t-form-fieldset">
    <legend class="nhsd-t-form-fieldset-legend">
      <h1 class="nhsd-t-heading-xl">Address</h1>
    </legend>
    <div class="nhsd-t-form-group">
      <label class="nhsd-t-form-label-s" for="address-line-one">First line of address</label>
      <input class="nhsd-t-form-input" type="text" id="address-line-one" autocomplete="off" />
    </div>
    <div class="nhsd-t-form-group">
      <label class="nhsd-t-form-label-s" for="address-line-two">Second line of address</label>
      <input class="nhsd-t-form-input" type="text" id="address-line-two" autocomplete="off"/>
    </div>
  </fieldset>
</form>`;
  return div;
};
Fieldset.storyName = 'Fieldset';
Fieldset.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${Fieldset().innerHTML}`,
    },
  },
};

export const SmallControls = () => {
  const div = document.createElement('div');
  div.innerHTML = `<form class="nhsd-t-form" novalidate autocomplete="off">
  <div class="nhsd-t-form-group">
    <label class="nhsd-t-form-label-s" for="first-name">Small form group label</label>
    <span class="nhsd-t-form-hint">This is a friendly hint</span>
    <input class="nhsd-t-form-input-s" type="text" id="first-name" autocomplete="off" />
  </div>
  <div class="nhsd-t-form-group">
    <label class="nhsd-t-form-label-m" for="last-name">Medium (default) form group label</label>
    <span class="nhsd-t-form-hint">This is a friendly hint</span>
    <input class="nhsd-t-form-input-s" type="text" id="last-name" autocomplete="off"/>
  </div>
  <div class="nhsd-t-form-group">
    <label class="nhsd-t-form-label-l" for="message">Large form group label</label>
    <span class="nhsd-t-form-hint">Textarea should be used where a single line input doesn't provide enough room for user input</span>
    <textarea class="nhsd-t-form-textarea-s" id="message" autocomplete="off"></textarea>
  </div>
  <div class="nhsd-t-form-group">
    <label class="nhsd-t-form-label-s" for="county">Another small form group label</label>
    <span class="nhsd-t-form-hint">Please choose your county</span>
    <div class="nhsd-t-form-control">
      <select class="nhsd-t-form-select-s" type="text" id="county">
        <option>Greater London</option>
        <option>Greater Manchester</option>
      </select>
      <span class="nhsd-t-form-control__icon">
        <span class="nhsd-a-icon nhsd-a-icon--size-s">
          <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false" viewBox="0 0 16 16"  width="100%" height="100%">
            <path d="M8,12L1,5.5L2.5,4L8,9.2L13.5,4L15,5.5L8,12z"/>
          </svg>
        </span>
      </span>
    </div>
  </div>
</form>`;
  return div;
};
SmallControls.storyName = 'Small controls';
SmallControls.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${SmallControls().innerHTML}`,
    },
  },
};

export const InputControl = () => {
  const div = document.createElement('div');
  div.innerHTML = `<form class="nhsd-t-form" novalidate autocomplete="off">
  <div class="nhsd-t-form-group">
    <label class="nhsd-t-form-label" for="first-name">First name</label>
    <span class="nhsd-t-form-hint">This is a friendly hint</span>
    <input class="nhsd-t-form-input" type="text" id="first-name" autocomplete="off" />
  </div>
</form>`;
  return div;
};
InputControl.storyName = 'Input control';
InputControl.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${InputControl().innerHTML}`,
    },
  },
};

export const InputControlWithButton = () => {
  const div = document.createElement('div');
  div.innerHTML = `<form class="nhsd-t-form" novalidate autocomplete="off">
  <div class="nhsd-t-form-group">
    <label class="nhsd-t-form-label" for="search">Search</label>
    <span class="nhsd-t-form-hint">Enter a keyword to find results</span>
    <div class="nhsd-t-form-control">
      <input class="nhsd-t-form-input" type="text" id="search" autocomplete="off" />
      <span class="nhsd-t-form-control__button">
        <button class="nhsd-a-button nhsd-a-button--circle-condensed nhsd-a-button--transparent" type="button">
          <span class="nhsd-a-icon nhsd-a-icon--size-s">
            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false" viewBox="0 0 16 16"  width="100%" height="100%">
              <path d="M7,10.9c-2.1,0-3.9-1.7-3.9-3.9c0-2.1,1.7-3.9,3.9-3.9c2.1,0,3.9,1.7,3.9,3.9C10.9,9.2,9.2,10.9,7,10.9zM13.4,14.8l1.4-1.4l-3-3c0.7-1,1.1-2.1,1.1-3.4c0-3.2-2.6-5.8-5.8-5.8C3.8,1.2,1.2,3.8,1.2,7c0,3.2,2.6,5.8,5.8,5.8c1.3,0,2.4-0.4,3.4-1.1L13.4,14.8z"/>
            </svg>
          </span>
        </button>
      </span>
    </div>
  </div>
</form>`;
  return div;
};
InputControl.storyName = 'Input control with button';
InputControl.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${InputControl().innerHTML}`,
    },
  },
};

export const SelectControl = () => {
  const div = document.createElement('div');
  div.innerHTML = `<form class="nhsd-t-form" novalidate autocomplete="off">
  <div class="nhsd-t-form-group">
    <label class="nhsd-t-form-label" for="county">Another small form group label</label>
    <span class="nhsd-t-form-hint">Please choose your county</span>
    <div class="nhsd-t-form-control">
      <select class="nhsd-t-form-select" type="text" id="county">
        <option>Greater London</option>
        <option>Greater Manchester</option>
      </select>
      <span class="nhsd-t-form-control__icon">
        <span class="nhsd-a-icon nhsd-a-icon--size-s">
          <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false" viewBox="0 0 16 16"  width="100%" height="100%">
            <path d="M8,12L1,5.5L2.5,4L8,9.2L13.5,4L15,5.5L8,12z"/>
          </svg>
        </span>
      </span>
    </div>
  </div>
</form>`;
  return div;
};
SelectControl.storyName = 'Select control';
SelectControl.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${SelectControl().innerHTML}`,
    },
  },
};
