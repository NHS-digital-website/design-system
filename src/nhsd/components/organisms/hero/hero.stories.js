// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Hero';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}:

- Use the canvas view to see the component variants without unintendedly breaking
- External button atom <a href="/docs/design-system-components-atoms-button--link-button#link-button">rules</a> apply for external links!
- **There are 2 types of the hero organism:**
  - ***Default hero*** (Coloured background, title, text, optional button and optional image) - used on article pages;
  - ***Featured hero*** (Coloured background of content column; title, text, optional button; picture) - used on the home page
- Default hero is \`nhsd-o-hero\`. Please note that this version is only **Work In Progress and not suitable ready to be used in production yet!**
- Featured hero is \`nhsd-o-hero-feature\`, but it is using the same building blocks and styling as regular hero.
- Only featured hero handles **mirroring** and **accenting**
- Accented hero stays 12 cols wide on mobile, non-accented featured hero goes 11 columns on mobile, and gets rounded edges
- The content of the heros is completely up to the implementor, but here are some recommendations (a.k.a. common usecases):
  - **Contents**:
    - Title token - for featured hero it's likely to be a \`<span>\` or \`<div>\`, for regular hero it's a \`<h1>\` or \`<h2>\`
    - Body text token - use a \`<p>\`
    - Button atom (optional) - use \`<a>\` element
    - Colour bar atom - for featured and accented hero it's mandatory, for regular featured it's optional
    - Image atom
  - **Variants**:
    - ***Mirrored***: Image on the left, contents on the right
    - ***Accented***: Edges stay sharp and uses 12 columns on mobile
  - **Additional rules**
    - Use the background clour tokens to override the hero's background colour (\`.nhsd-!t-bg-light-green\`).
    - Accented Featured hero uses a Square image atom (\`.nhsd-a-image--square\`); XXL heading (\`.nhsd-t-heading-xxl\`)
    - Regular Featured hero uses a regular image atom (\`.nhsd-a-image--round-corners\`); Large heading (\`.nhsd-t-heading-l\`)
    - Contents are vertically centred in all cases.
    - Featured hero uses line clamping between tablet and desktop breakpoints to avoid breaking if text is too long.
    - The height of the featured hero is determined by the image used: image ratio is 16:9 for non-accented and 1:1 for accented variant.

### Line clamping rules - Featured type

Heading is always clamped to max. 3 lines.

|Device type|Shorthand|Variant|Body text (max. lines)|
|---|---|---|---|---|
|Mobile|**XS**|Accented|7|
|Mobile|**XS**|Regular|7|
|Tablet|**S**|Accented|4|
|Tablet|**S**|Regular|3|
|Desktop|**M**|Accented|8|
|Desktop|**M**|Regular|4|
|Wide|**L**|Accented|10|
|Wide|**L**|Regular|4|
|Extra Wide|**XL**|Accented|12|
|Extra Wide|**XL**|Regular|4|`;
const sourceCode = `// Sass import \n@use "nhsd/components/organisms/hero";

// HTML`;

// Component defaults
export default {
  title: `${sbConfig.title.designSystem} / ${sbConfig.title.components} / ${sbConfig.title.organisms} / ${componentName}`,
  parameters: {
    docs: {
      description: {
        component: storyDescription
      }
    },
  },
};

// Component template
const Template = (args) => {
  return template.render({ params: { ...args } });
};

export const Default = Template.bind({});
Default.storyName = 'Default (WIP!!!)';
Default.args = {
  title: {
    label: 'Summary care record platform',
  },
  text: {
    label: 'The summary care record is a service which provides an abridged record of patient details to relevant clinicians.',
  },
};
Default.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${Default(Default.args)}`,
    },
  },
};

export const Featured = Template.bind({});
Featured.storyName = 'Featured';
Featured.args = {
  featured: true,
  title: {
    label: 'Coronavirus (COVID-19)',
    classes: 'nhsd-t-heading-l',
  },
  text: {
    label: 'At NHS Digital we’re helping the NHS frontline face the challenges of the coronavirus (COVID-19) outbreak with systems, services and data. From prioritising patients to protecting the most vulnerable.',
    classes: 'nhsd-t-body',
  },
  button: {
    el: 'a',
    label: 'How we\'re supporting the response',
    href: '#',
    classes: 'nhsd-!t-margin-bottom-0',
  },
  image: {
    ariaHidden: true,
    sourceSet: [{
      'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
    }],
    alt: 'Abstract lights',
    classes: '',
  },
};
Featured.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${Featured(Featured.args)}`,
    },
  },
};

export const FeaturedMirrored = Template.bind({});
FeaturedMirrored.storyName = 'Featured / mirrored';
FeaturedMirrored.args = {
  featured: {
    mirrored: true,
  },
  bgColourKey: 'yellow-10-tint',
  title: {
    label: 'Coronavirus (COVID-19) Professionally administrate functional catalysts for change through multifunctional content. Efficiently actualize multidisciplinary materials with high standards.',
    classes: 'nhsd-t-heading-l',
  },
  text: {
    label: 'At NHS Digital we’re helping the NHS frontline face the challenges of the coronavirus (COVID-19) outbreak with systems, services and data. From prioritising patients to protecting the most vulnerable. Seamlessly scale impactful e-tailers after innovative supply chains. Compellingly integrate cross-media core competencies without low-risk high-yield outsourcing. Rapidiously drive robust alignments without resource-leveling meta-services. Energistically morph premium methodologies.',
    classes: 'nhsd-t-body',
  },
  button: {
    el: 'a',
    label: 'How we\'re supporting the response',
    href: '#',
    classes: 'nhsd-!t-margin-bottom-0',
  },
  image: {
    ariaHidden: true,
    sourceSet: [{
      'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
    }],
    alt: 'Abstract lights',
    classes: '',
  },
};
FeaturedMirrored.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${FeaturedMirrored(FeaturedMirrored.args)}`,
    },
  },
};

export const FeaturedAccented = Template.bind({});
FeaturedAccented.storyName = 'Featured / accented';
FeaturedAccented.args = {
  featured: {
    accented: true,
  },
  title: {
    label: 'Data and technology that improves lives Data and technology that improves lives Data and technology that improves lives Data and technology that improves lives',
    classes: 'nhsd-t-heading-xxl',
  },
  text: {
    label: 'We deliver world-class technology and data intelligence for the NHS, supporting healthcare professionals  and empowering patients. At NHS Digital we’re helping the NHS frontline face the challenges of the coronavirus (COVID-19) outbreak with systems, services and data. From prioritising patients to protecting the most vulnerable. We deliver world-class technology and data intelligence for the NHS, supporting healthcare professionals  and empowering patients. At NHS Digital we’re helping the NHS frontline face the challenges of the coronavirus (COVID-19) outbreak with systems, services and data. From prioritising patients to protecting the most vulnerable. We deliver world-class technology and data intelligence for the NHS, supporting healthcare professionals  and empowering patients. At NHS Digital we’re helping the NHS frontline face the challenges of the coronavirus (COVID-19) outbreak with systems, services and data. From prioritising patients to protecting the most vulnerable.',
    classes: 'nhsd-t-body',
  },
  button: {
    el: 'a',
    label: 'About NHS Digital',
    href: '#',
    classes: 'nhsd-!t-margin-bottom-9',
  },
  colourBar: true,
  image: {
    ariaHidden: true,
    sourceSet: [{
      'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
    }],
    alt: 'Abstract lights',
    classes: 'nhsd-a-image--square',
  },
};
FeaturedAccented.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${FeaturedAccented(FeaturedAccented.args)}`,
    },
  },
};

export const FeaturedAccentedMirrored = Template.bind({});
FeaturedAccentedMirrored.storyName = 'Featured / accented & mirrored';
FeaturedAccentedMirrored.args = {
  featured: {
    accented: true,
    mirrored: true,
  },
  title: {
    label: 'Data and technology that improves lives',
    classes: 'nhsd-t-heading-xxl',
  },
  text: {
    label: 'We deliver world-class technology and data intelligence for the NHS, supporting healthcare professionals  and empowering patients. At NHS Digital we’re helping the NHS frontline face the challenges of the coronavirus (COVID-19) outbreak with systems, services and data. From prioritising patients to protecting the most vulnerable.',
    classes: 'nhsd-t-body',
  },
  button: {
    el: 'a',
    label: 'About NHS Digital',
    href: '#',
    classes: 'nhsd-!t-margin-bottom-9',
  },
  colourBar: true,
  image: {
    ariaHidden: true,
    sourceSet: [{
      'url': 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
    }],
    alt: 'Abstract lights',
    classes: 'nhsd-a-image--square',
  },
};
FeaturedAccentedMirrored.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${FeaturedAccentedMirrored(FeaturedAccentedMirrored.args)}`,
    },
  },
};

export const FeaturedStacked = () => {
  const div = document.createElement('div');

  div.innerHTML = Template({...FeaturedAccented.args});
  div.innerHTML += Template({...FeaturedMirrored.args});
  div.innerHTML += Template({...Featured.args});

  return div;
};
FeaturedStacked.storyName = 'Featured / stacked';
FeaturedStacked.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${FeaturedStacked().innerHTML}`,
    },
  },
};

export const FeaturedMegaStacked = () => {
  const div = document.createElement('div');

  div.innerHTML = Template({...FeaturedAccented.args});
  div.innerHTML += Template({...FeaturedMirrored.args});
  div.innerHTML += Template({...Featured.args});
  div.innerHTML += Template({...FeaturedAccented.args, featured: {mirrored: true}});
  div.innerHTML += Template({...Featured.args});
  div.innerHTML += Template({...FeaturedAccentedMirrored.args});

  return div;
};
FeaturedMegaStacked.storyName = 'Featured / mega stacked';
FeaturedMegaStacked.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${FeaturedMegaStacked().innerHTML}`,
    },
  },
};
