/* global document */

// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';

const componentName = 'Link';
const storyDescription = `It is important to note that the link atom works off the typographic settings it inherits from their parent elements. This is to make sure that the link text matches the surrounding text content's styling, and for this reason links don'\t set any font and text related styles themselves. ${sbConfig.heading.lab}`;
const sourceCode = '// Sass import \n@use "nhsd/components/atoms/link";\n\n// HTML';

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
    label: {
 control: 'text', defaultValue: 'About NHS Digital', description: 'Clear, easy to understand text that explains where the user is taken when they click the link.', mandatory: true,
},
    href: { control: 'text', description: '**href** determines the URL the user is taken to when they click the element.', required: true },
    external: { control: 'boolean', description: 'Determines whether the URL should open in a new tab. If **external** is set to true, screen readers read out "*...(opens in a new tab)*" after the link title.', defaultValue: false },
    newTab: { control: 'boolean', description: 'Determines whether the URL should open in a new tab. If **external** is set to true, newTab is always true" after the link title.', defaultValue: false },
	},
};

// Component template
const Template = (args) => template.render({ params: { ...args } });

export const LabComponent = Template.bind({});
LabComponent.args = {
  label: 'Click to read more',
};
LabComponent.storyName = sbConfig.title.lab;
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode} ${LabComponent(LabComponent.args)} `,
    },
  },
};

const Link = Template.bind({});

export const WhiteLink = Template.bind({});
WhiteLink.args = {
  label: 'Click to read more',
  classes: 'nhsd-a-link--col-white',
};
WhiteLink.storyName = 'White link';
WhiteLink.parameters = {
  backgrounds: {
    default: 'dim',
  },
  docs: {
    description: {
      story: 'The **white link** should be used on dark backgrounds. (Use the **Canvas** for preview.)',
    },
    source: {
      code: `${sourceCode} ${WhiteLink(WhiteLink.args)} `,
    },
  },
};

export const DarkGreyLink = Template.bind({});
DarkGreyLink.args = {
  label: 'Click to read more',
  classes: 'nhsd-a-link--col-dark-grey',
};
DarkGreyLink.storyName = 'Dark grey link';
DarkGreyLink.parameters = {
  docs: {
    description: {
      story: 'The **dark grey link** should be used on light backgrounds. (Use the **Canvas** for preview.). One good example for a component using this variant is the <a href="/docs/design-system-components-organisms-global-footer--lab-component">Global Footer organism</a>',
    },
    source: {
      code: `${sourceCode} ${DarkGreyLink(DarkGreyLink.args)} `,
    },
  },
};

export const BlackLink = Template.bind({});
BlackLink.args = {
  label: 'Click to read more',
  classes: 'nhsd-a-link--col-black',
};
BlackLink.storyName = 'Black link';
BlackLink.parameters = {
  backgrounds: {
    default: 'bright',
  },
  docs: {
    description: {
      story: 'The **black link** should be used on light backgrounds. (Use the **Canvas** for preview.)',
    },
    source: {
      code: `${sourceCode} ${BlackLink(BlackLink.args)} `,
    },
  },
};

export const LinkInText = () => {
  const p = document.createElement('p');
  p.classList.add('nhsd-t-body');
  p.innerHTML = `Seamlessly re-engineer superior platforms for progressive models. Objectively fabricate tactical niches rather than 24/7 relationships. Authoritatively ${Link({ label: 'architectures after low-risk high-yield actualize premier vortals' })} after proactive content.`;
  return p;
};
LinkInText.storyName = 'Link in (con)text';
LinkInText.parameters = {
  docs: {
    description: {
      story: 'When the link sits with some text, it takes up the typographic settings from the parent element, so it blends in with the surrounding text.',
    },
    source: {
      code: `${sourceCode} ${Link({ label: 'actualize premier vortals' })} `,
    },
  },
};

export const VeryLongLink = () => {
  const div = document.createElement('div');

  const p1 = document.createElement('p');
  p1.classList.add('nhsd-t-body');
  p1.innerHTML = `Long links are not ideal, but certainly not unusual to see on a website. We had no choice, but to come up with a long label for this demo, ${Link({ label: 'so we decided to write down the longest link label we could think of - just to demonstrate that the readablity, functionality and aesthetics of the link and its styling is not affected in a negative way' })} - like at all. PHEW!`;
  div.appendChild(p1);

  const p2 = document.createElement('p');
  p2.classList.add('nhsd-t-body-s');
  p2.innerHTML = `Long links are not ideal, but certainly not unusual to see on a website. We had no choice, but to come up with a long label for this demo, ${Link({ label: 'so we decided to write down the longest link label we could think of - just to demonstrate that the readablity, functionality and aesthetics of the link and its styling is not affected in a negative way' })} - like at all. PHEW!`;
  div.appendChild(p2);

  return div;
};
VeryLongLink.storyName = 'A ridiculously long link';
VeryLongLink.parameters = {
  docs: {
    description: {
      story: 'Links retain their styling over multiple lines.',
    },
    source: {
      code: `${sourceCode} ${Link({ label: 'so we decided to write down the longest link label we could think of - just to demonstrate that the readablity, functionality and aesthetics of the link and its styling is not affected in a negative way' })} `,
    },
  },
};

const externalLink = Link({
  label: 'Crafting link underlines',
  href: 'https://medium.design/crafting-link-underlines-on-medium-7c03a9274f9',
  external: true,
});
export const ExternalLink = () => {
  const p = document.createElement('p');
  p.classList.add('nhsd-t-body');
  p.innerHTML = externalLink;
  return p;
};
ExternalLink.storyName = 'External link';
ExternalLink.parameters = {
  docs: {
    description: {
      story: 'External links (the ones that take your user outside your service) should open in a new tab. When an external link is detected by screen readers, they will let the user know that the link will take them to a different website - using a scree-reader only announcement. With external links the **target**  attribute should be set to **_blank**, and the screen reader announcement should be made using the hidden label, and `rel="external"` should be added to the anchor tag.',
    },
    source: {
      code: `${sourceCode} ${externalLink}`,
    },
  },
};

const newTabLink = Link({
  label: 'Crafting link underlines',
  href: 'https://medium.design/crafting-link-underlines-on-medium-7c03a9274f9',
  newTab: true,
});
export const NewTabLink = () => {
  const p = document.createElement('p');
  p.classList.add('nhsd-t-body');
  p.innerHTML = externalLink;
  return p;
};
NewTabLink.storyName = 'New tab link';
NewTabLink.parameters = {
  docs: {
    description: {
      story: 'New Tab links are links that open in a new tab. New tab links are announced to the screen reader as such.',
    },
    source: {
      code: `${sourceCode} ${newTabLink}`,
    },
  },
};
