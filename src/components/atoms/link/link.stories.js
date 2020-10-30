// Load storybook config
import * as sbConfig from '../../../../storybook.config.js';

// Load template file
import template from  './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Link';
const storyDescription = `Links help the user to navigate to parts of the page, different pages of the website - or other websites. Links don't exist in isolation - they normally mix in with other (non-interactive) text content - looking a little special to show the user they are clickable, but not too different from regular text, so that the content on the page is readable without too much distraction.\n\nIt is important to note that the link atom works off the typographic settings it inherits from their parent elements. This is to make sure that the link text matches the surrounding text content's styling, and for this reason links don'\t set any font and text related styles themselves.\n\nOn the contrary, look at this link sitting on it's own - looking rather fabulous:`;
const sourceCode = `// Sass import \n@use "nhsd/components/atoms/link";\n\n// HTML`;

// Component defaults
export default {
  title: `${sbConfig.title.designSystem} / ${sbConfig.title.components} / ${sbConfig.title.atoms} / ${componentName}`,
  parameters: {
    docs: {
      description: {
        component: storyDescription
      }
    },
  },
	argTypes: {
    label: { control: 'text', defaultValue: 'About NHS Digital', description: 'Clear, easy to understand text that explains where the user is taken when they click the link.', mandatory: true },
    href: { control: 'text', description: '**href** determines the URL the user is taken to when they click the element.', required: true },
    external: { control: 'boolean', description: 'Determines whether the URL should open in a new tab. If **external** is set to true, screen readers read out "*...(opens in a new window)*" after the link title.', defaultValue: false },
	}
};

// Component template
const Template = (args) => {
  return template.render({ params: {...args} });
};

const Link = Template.bind({});

export const SimpleLink = () => {
  var p = document.createElement('p');
  p.classList.add('nhsd-body');
  p.innerHTML = `${Link({ label: 'Click to read more'})}`;
  return p;
};
SimpleLink.storyName = 'Introduction';
SimpleLink.parameters = {
  docs: {
    source: {
      code: `${sourceCode} ${Link({ label: 'Read more about links'})} `,
    },
  },
};

export const LinkInText = () => {
  var p = document.createElement('p');
  p.classList.add('nhsd-body');
  p.innerHTML = `Seamlessly re-engineer superior platforms for progressive models. Objectively fabricate tactical niches rather than 24/7 relationships. Authoritatively ${Link({ label: 'actualize premier vortals'})} after proactive content.`;
  return p;
};
LinkInText.storyName = 'Link in (con)text';
LinkInText.parameters = {
  docs: {
    description: {
      story: 'When the link sits with some text, it takes up the typographic settings from the parent element, so it blends in with the surrounding text, yet remains easily recognisable as an interactive element.',
    },
    source: {
      code: `${sourceCode} ${Link({ label: 'actualize premier vortals'})} `,
    }
  },
};

export const VeryLongLink = () => {
  var p = document.createElement('p');
  p.classList.add('nhsd-body');
  p.innerHTML = `Long links are not ideal, but certainly not unusual to see on a website. We had no choice, but to come up with a long label for this demo, ${Link({ label: 'so we decided to write down the longest link label we could think of - just to demonstrate that the readablity, functionality and aesthetics of the link and its styling is not affected in a negative way'})} - like at all. PHEW!`;
  return p;
};
VeryLongLink.storyName = 'A ridiculously long link';
VeryLongLink.parameters = {
  docs: {
    description: {
      story: 'Links should never be too long, but when the inevitable happens, they have to behave like the text surrounding them. On top of that they also have to retain their styling over multiple lines.',
    },
    source: {
      code: `${sourceCode} ${Link({ label: 'so we decided to write down the longest link label we could think of - just to demonstrate that the readablity, functionality and aesthetics of the link and its styling is not affected in a negative way'})} `,
    }
  },
};

const externalLink = Link({
  label: 'Crafting link underlines',
  href: 'https://medium.design/crafting-link-underlines-on-medium-7c03a9274f9',
  external: true,
});
export const ExternalLink = () => {
  var p = document.createElement('p');
  p.classList.add('nhsd-body');
  p.innerHTML = externalLink;
  return p;
};
ExternalLink.storyName = 'External link';
ExternalLink.parameters = {
  docs: {
    description: {
      story: 'External links (the ones that take your user outside your service) should open in a new tab. When an external link is detected by screen readers, they will let the user know that the link will take them to a different website - using a scree-reader only announcement.',
    },
    source: {
      code: `${sourceCode} ${externalLink}`,
    },
  },
};
