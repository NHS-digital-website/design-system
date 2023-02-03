# Contribution Guidelines

## HTML

HTML should be written with accessiblity and simplicity in mind.

### Accessiblity

Try to make use of native HTML elements and functionality where possible. This helps screen readers better interpret the UI while maximising browser compatiblity.

For example, heading text should use heading tags (`h1`, `h2`, `h3`, etc), and lists should use list tags (`<ul>`, `<ol>`).

Where necessary required aria attributes should be used to support assistive technologies such as screeners interpret the UI. 

### Simplicity

HTML should be designed to be as simple to implement as possible. Generally the fewer elements and fewer CSS classes the better - this reduce of components being implemented incorrectly.

Where possible consistant patterns should be followed. For example, components shouldn't reimplement functionality which is already provided with tokens.

## CSS

### SASS component and class naming conventions

In our styling system every component is either an atom, a molecule or an organism as per the [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) principles.

The components are placed under the src/components` folder, where each component's name reflects their atomic level.

The class name of a component must reflect what atomic level they represent prefixed by `nhsd` - so for instance a button is `.nhsd-a-button`, a hero organism is `.nhsd-o-hero`.

We follow BEM naming conventions for our CSS class names.

### Tokens

Tokens are everything in SASS that are not atoms (molecules, organisms...).

There are 2 types of tokens based on intended use:

1. Internal use only - sass mixins, vars, functions: Consume in SASS
2. Inline use only - utility and override classes: Consume in HTML

Override tokens should always be prefixed with `nhsd-!t-`. Eg, `nhsd-!t-colour-red`.

## JavaScript

Unless there is a good reason to make an exception, JavaScript must only ever enhance functionality and not be required.

Therefore we strongly discourage the use of JavaScript wherever possible.

Where JavaScript is required, or can be used to enhance functionality take care to ensure it is used in a way that is accessible. For example, any interaction should be possible with a keyboard and any interactive states should be communicated appropriately to screenreaders via the use of aria attributes.

### Adding a JavaScript component

We use custom event triggers and listeners as a simple way to interact components.

Events are automattically bound on page load and can be reassigned by calling the `nhsd.init()` method.

To set up a JavaScript component you must import your JavaScript into `src\nhsd\script-core\init.js` then call it's initialisation method from inside `init()`.

We recommend using `initComponent()` to define the component selector then call the component constructor for each instance of the component matching the component selector.

You may want to refer to the dropdown component as example of how to set up a JavaScript component.

### nhsd Object

The `nhsd` object provides syntactic sugar for managing events.

While not strictly required it is recommended that you use the `nhsd` object for triggering and listening to events.

The `nhsd` object is assigned to the window object on load and can therefore be called globally in any project using the NHSD JavaScript bundle.

It is loosely based on the JQuery event API.

It can be used without element context, eg:

```javascript
nhsd.on('dropdown-toggle', (e) => console.log(e))
```

*This this will listen for the `dropdown-toggle` event triggered by any element on the page.*

Or it can accept the context of an element or elements:

*With CSS query selectors*

```javascript
nhsd('#my-dropdown-component').trigger('dropdown-open')
```

```javascript
nhsd('.all-of-my-dropdowns').trigger('dropdown-close')
```

*Referencing elements directly*

```javascript
const myElement = document.querySelector('#my-dropdown-component');
nhsd(myElement).trigger('dropdown-open')
```

```javascript
const myDropdowns = Array.from(document.querySelectorAll('.all-of-my-dropdowns'));
nhsd(myDropdowns).trigger('dropdown-close')
```

The object supports the following methods:

- `nhsd.init()` - This calls the `init()` method in `init.js` initialising all defined components. *Note: `.init()` should not be called with element context*
- `nhsd.on([event], [handler])` - This binds an event handler (with element context) to a native JavaScript event (eg, "click"), or a custom component event (eg, "dropdown-open").
- `nhsd.once([event], [handler])` - The same as `.on()` except it only fires once.
- `nhsd.trigger([event], [payload])` - Triggers an event (with element context) and with an optional payload for the event handler
- `nhsd.unbind([event])` - Unbinds an event (with element context)

Finally, events can be namespaced for safe and easy unbinding:

```javascript
nhsd('#my-dropdown').on('dropdown-close.my-namespace', () => console.log('I am bound'));
// This should trigger the "I am bound" log message.
nhsd('#my-dropdown').trigger('dropdown-close');

nhsd('#my-dropdown').unbind('.my-namespace');
// The event should now be unbound and no console log should display
nhsd('#my-dropdown').trigger('dropdown-close');
```

## Use of npm packages

We recommend against the use of 3rd party npm packages wherever possible - this is espically true for non-dev dependencies.

Using fewer packages helps us keep our JavaScript bundles small and secure.

## JavaScript documentation

Where JavaScript is used all component events and triggers should be documented.

This ensures that developers implementing components can listen to these events and trigger them via manual handlers where required.

## Keeping the UI toolkit up to date

- It is the UI developer's responsibility to keep the NPM packages (including Storybook) up to date.

## Checklist
- [] ATOMIC files (`.scss`, `.njk`, `.stories.js`)
- [] Sass include in the corresponding ATOMIC SASS file (`ATOMICLEVEL/_index.scss`)
- [] Add the new component to the corresponding Nunjucks Macro file (`njk/macros/ATOMICLEVEL.njk`)
- [] Has component use been fully documented?