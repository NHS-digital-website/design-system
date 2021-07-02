// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';

// Load banner images
import bannerImage from '../../../assets/images/banner-image.jpg';
import backgroundBannerImage from '../../../assets/images/background-image.jpg';

// Load stylesheet file
require('./_index.scss');

const componentName = 'Hero refactor';
const storyDescription = `${sbConfig.heading.lab}

### Components used
- <a href="/docs/design-system-components-atoms-box--lab-component">Box atom</a>
- <a href="/docs/design-system-components-atoms-button--lab-component">Button atom</a>
- <a href="/docs/design-system-components-atoms-digiblocks--lab-component">Digiblocks atom</a>
- <a href="/docs/design-system-components-molecules-button-nav--lab-component">Button Nav molecule</a>

### Tokens used
- Spacing
- Colour
- Typography
- Utils

${sbConfig.heading.basicRules}:

- Use the canvas view to see the component variants without unintendedly breaking
- External button atom <a href="/docs/design-system-components-atoms-button--link-button#link-button">rules</a> apply for external links!
- **There are 2 types of the hero organism:**
  - ***Default hero*** (Coloured background, title, text, optional button and optional image) - used on article pages as a banner;
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
  classes: 'nhsd-!t-text-align-center',
  title: {
    classes: 'nhsd-t-heading-xxl nhsd-!t-margin-bottom-6',
    label: 'Data and information',
  },
  text: {
    classes: 'nhsd-t-heading-s nhsd-!t-margin-bottom-6',
    label: 'NHS Digital has responsibility for standardising, collecting and publishing data and information from across the health and social care system in England.',
  },
  button: {
    el: 'a',
    label: 'How we\'re supporting the response',
    href: '#',
    classes: 'nhsd-!t-margin-bottom-0',
  },
  digiblocks: [{
    classes: 'nhsd-a-digiblocks--pos-bl',
  }, {
    classes: 'nhsd-a-digiblocks--pos-tr',
  }],
};
LabComponent.parameters = {
  docs: {
    description: {
      story: `
- Light grey background - using <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-!t-bg-light-grey</span> override token
- Black heading and body text
- 1 default button
- Bottom Left and Top Right positioned Digiblock atoms (no colour overlay applied)`,
    },
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};

export const Banner = Template.bind({});
Banner.storyName = 'Digiblocks Hero (Centred)';
Banner.args = {
  ...LabComponent.args,
};
Banner.parameters = {
  ...LabComponent.args,
};

export const Banner2 = Template.bind({});
Banner2.storyName = 'Digiblocks Hero (Left Aligned, Blue)';
Banner2.args = {
  classes: 'nhsd-!t-bg-bright-blue-20-tint',
  title: {
    classes: 'nhsd-t-heading-xxl nhsd-!t-margin-bottom-6',
    label: 'Data and information',
  },
  text: {
    classes: 'nhsd-t-heading-s nhsd-!t-margin-bottom-0',
    label: 'NHS Digital has responsibility for standardising, collecting and publishing data and information from across the health and social care system in England.',
  },
  digiblocks: [{
    classes: 'nhsd-a-digiblocks--pos-tr nhsd-a-digiblocks--col-blue',
  }],
  leftAlign: true,
};
Banner2.parameters = {
  docs: {
    description: {
      story: `
- Light blue background - using <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-!t-bg-bright-blue-20-tint</span> override token.
- Black heading and body text - left aligned default.
- No buttons
- Top Right positioned Digiblock atom - blue colour overlay applied (<span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-a-digiblocks--col-blue</span>, <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-a-digiblocks--pos-tr</span>).`,
    },
    source: {
      code: `${sourceCode}\n${Banner2(Banner2.args)}`,
    },
  },
};

export const Banner3 = Template.bind({});
Banner3.storyName = 'Digiblock Hero (Left Aligned, Yellow)';
Banner3.args = {
  ...Banner2.args,
  classes: 'nhsd-!t-bg-yellow-20-tint',
  digiblocks: [{
    classes: 'nhsd-a-digiblocks--pos-br nhsd-a-digiblocks--col-yellow',
  }],
};
Banner3.parameters = {
  docs: {
    description: {
      story: `
- Light yellow background - using <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-!t-bg-yellow-20-tint</span> override token.
- Black heading and body text - left aligned default.
- No buttons
- Bottom Right positioned Digiblock atom - blue colour overlay applied (<span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-a-digiblocks--col-yellow</span>, <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-a-digiblocks--pos-br</span>).`,
    },
    source: {
      code: `${sourceCode}\n${Banner3(Banner3.args)}`,
    },
  },
};

export const Banner4 = Template.bind({});
Banner4.storyName = 'Digiblocks Hero (Left aligned, buttons, black)';
Banner4.args = {
  classes: 'nhsd-!t-bg-black nhsd-o-hero2--light-text',
  title: {
    classes: 'nhsd-t-heading-xxl nhsd-!t-margin-bottom-6',
    label: 'Data and information',
  },
  text: {
    classes: 'nhsd-t-heading-s nhsd-!t-margin-bottom-6',
    label: 'NHS Digital has responsibility for standardising, collecting and publishing data and information from across the health and social care system in England.',
  },
  buttonNav: {
    classes: 'nhsd-m-button-nav--condensed nhsd-!t-text-align-left',
    buttons: [
      {
        el: 'a',
        label: 'Button one',
        href: '#',
      }, {
        el: 'a',
        label: 'Button two',
        href: '#',
        classes: 'nhsd-a-button--invert',
      },
    ],
  },
  leftAlign: true,
  digiblocks: [{
    classes: 'nhsd-a-digiblocks--pos-br nhsd-a-digiblocks--col-black',
  }],
};
Banner4.parameters = {
  docs: {
    description: {
      story: `
- Black background - using <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-!t-bg-black</span> override token.
- White heading and body text using <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-o-hero--light-text</span> modifier class.
- 2 left aligned buttons - nested within the condensed version of the Button Nav molecule (<span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-m-button-nav--condensed</span>, <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-!t-text-align-left</span>).
- Bottom Right positioned Digiblock atom - black colour overlay applied (<span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-a-digiblocks--col-black</span>, <span class="nhsd-a-text-highlight nhsd-a-text-highlight--code-s">.nhsd-a-digiblocks--pos-br</span>).`,
    },
    source: {
      code: `${sourceCode}\n${Banner4(Banner4.args)}`,
    },
  },
};

export const HeaderBannerSimpleComponent = Template.bind({});
HeaderBannerSimpleComponent.storyName = 'Simple Hero (light blue)';
HeaderBannerSimpleComponent.args = {
  classes: 'nhsd-!t-bg-bright-blue-20-tint',
  introText: {
    text: 'Digital inclusion for health and social care',
  },
  title: {
    label: 'What we mean by digital inclusion',
    classes: 'nhsd-t-heading-xl',
  },
  digiblocks: [{
    classes: 'nhsd-a-digiblocks--pos-tr nhsd-a-digiblocks--col-blue',
  }],
  leftAlign: true,
};
HeaderBannerSimpleComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${HeaderBannerSimpleComponent(HeaderBannerSimpleComponent.args)}`,
    },
  },
};

export const DarkBlueHeaderBannerSimpleComponent = Template.bind({});
DarkBlueHeaderBannerSimpleComponent.storyName = 'Simple Hero (blue)';
DarkBlueHeaderBannerSimpleComponent.args = {
  ...HeaderBannerSimpleComponent.args,
  classes: 'nhsd-!t-bg-blue nhsd-!t-col-white',
  title: {
    ...HeaderBannerSimpleComponent.args.title,
    classes: 'nhsd-t-heading-xl nhsd-!t-col-white',
  },
  digiblocks: [{
    classes: 'nhsd-a-digiblocks--pos-tr nhsd-a-digiblocks--col-light-blue',
  }],
  leftAlign: true,
};
DarkBlueHeaderBannerSimpleComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${DarkBlueHeaderBannerSimpleComponent(DarkBlueHeaderBannerSimpleComponent.args)}`,
    },
  },
};

export const HeroDescriptionComponent = Template.bind({});
HeroDescriptionComponent.storyName = 'Description Hero (light blue)';
HeroDescriptionComponent.args = {
  classes: 'nhsd-!t-bg-bright-blue-20-tint',
  title: {
    label: 'Abdominal Aortic Aneurysm screening',
    classes: 'nhsd-t-heading-xl',
  },
  text: {
    label: 'An Abdominal Aortic Aneurysm is a potentially life threatening condition, with the highest risk is for males over the age of 65. We use the information we hold to identify people at risk, who are invited to have a screening for the condition. This helps identify cases early, before they cause a problem.',
    classes: 'nhsd-t-body',
  },
  digiblocks: [{
    classes: 'nhsd-a-digiblocks--pos-tr nhsd-a-digiblocks--col-blue',
  }],
  leftAlign: true,
};
HeroDescriptionComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${HeroDescriptionComponent(HeroDescriptionComponent.args)}`,
    },
  },
};

export const DarkBlueHeroDescriptionComponent = Template.bind({});
DarkBlueHeroDescriptionComponent.storyName = 'Description Hero (blue)';
DarkBlueHeroDescriptionComponent.args = {
  ...HeroDescriptionComponent.args,
  classes: 'nhsd-!t-bg-blue nhsd-!t-col-white',
  title: {
    ...HeroDescriptionComponent.args.title,
    classes: 'nhsd-t-heading-xl nhsd-!t-col-white',
  },
  digiblocks: [{
    classes: 'nhsd-a-digiblocks--pos-tr nhsd-a-digiblocks--col-light-blue',
  }],
  leftAlign: true,
};
DarkBlueHeroDescriptionComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${DarkBlueHeroDescriptionComponent(DarkBlueHeroDescriptionComponent.args)}`,
    },
  },
};

export const HeaderBannerDetailedComponent = Template.bind({});
HeaderBannerDetailedComponent.storyName = 'Detailed Hero (light blue)';
HeaderBannerDetailedComponent.args = {
  classes: 'nhsd-!t-bg-bright-blue-20-tint',
  introText: {
    text: 'Publication, Part of <a class="nhsd-a-link" href="#">[MI] Potential Covid-19 symptoms reported through NHS Pathways and 111 online</a>',
  },
  title: {
    label: 'Potential Coronavirus (Covid-19) symptoms reported through NHS Pathways and 111 online, Week Ending 28th February 2021',
    classes: 'nhsd-t-heading-xl',
  },
  metaData: {
    data: [
      {
        title: 'Publication Date:',
        description: '1 Mar 2021',
      }, {
        title: 'Geographic Coverage:',
        description: 'England',
      }, {
        title: 'Geographical Granularity:',
        description: 'Clinical Commissioning Regions, Clinical Commissioning Group',
      }, {
        title: 'Date Range:',
        description: '22 Feb 2021 to 28 Feb 2021',
      },
    ],
    classes: 'nhsd-!t-margin-bottom-6',
  },
  leftAlign: true,
  digiblocks: [{
    classes: 'nhsd-a-digiblocks--pos-tr nhsd-a-digiblocks--col-blue',
  }],
  button: {
    el: 'a',
    label: 'Download this page as a PDF',
    href: '#',
    classes: 'nhsd-!t-margin-bottom-0',
  },
};
HeaderBannerDetailedComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${HeaderBannerDetailedComponent(HeaderBannerDetailedComponent.args)}`,
    },
  },
};

export const DarkBlueHeaderBannerDetailedComponent = Template.bind({});
DarkBlueHeaderBannerDetailedComponent.storyName = 'Detailed Hero (blue)';
DarkBlueHeaderBannerDetailedComponent.args = {
  ...HeaderBannerDetailedComponent.args,
  classes: 'nhsd-!t-bg-blue nhsd-!t-col-white',
  introText: {
    text: 'Publication, Part of <a class="nhsd-a-link nhsd-a-link--col-white" href="#">[MI] Potential Covid-19 symptoms reported through NHS Pathways and 111 online</a>',
  },
  title: {
    ...HeaderBannerDetailedComponent.args.title,
    classes: 'nhsd-t-heading-xl nhsd-!t-col-white',
  },
  digiblocks: [{
    classes: 'nhsd-a-digiblocks--pos-tr nhsd-a-digiblocks--col-light-blue',
  }],
  button: {
    ...HeaderBannerDetailedComponent.args.button,
    classes: 'nhsd-a-button--invert nhsd-!t-margin-bottom-0',
    href: '#',
  },
};
DarkBlueHeaderBannerDetailedComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${DarkBlueHeaderBannerDetailedComponent(DarkBlueHeaderBannerDetailedComponent.args)}`,
    },
  },
};

export const ImageHero = Template.bind({});
ImageHero.storyName = 'Image Hero (Accented)';
ImageHero.args = {
  accented: true,
  title: {
    label: 'Data and technology that improves lives',
    classes: 'nhsd-t-heading-xxl',
  },
  text: {
    label: 'We deliver world-class technology and data intelligence for the NHS, supporting healthcare professionals  and empowering patients. At NHS Digital we’re helping the NHS frontline face the challenges of the coronavirus (COVID-19) outbreak with systems, services and data. From prioritising patients to protecting the most vulnerable. We deliver world-class technology and data intelligence for the NHS, supporting healthcare professionals  and empowering patients. At NHS Digital we’re helping the NHS frontline face the challenges of the coronavirus (COVID-19) outbreak with systems, services and data. From prioritising patients to protecting the most vulnerable. We deliver world-class technology and data intelligence for the NHS, supporting healthcare professionals  and empowering patients. At NHS Digital we’re helping the NHS frontline face the challenges of the coronavirus (COVID-19) outbreak with systems, services and data. From prioritising patients to protecting the most vulnerable.',
    classes: 'nhsd-t-body nhsd-!t-margin-bottom-6',
  },
  button: {
    el: 'a',
    label: 'About NHS Digital',
    href: '#',
    classes: 'nhsd-!t-margin-bottom-0',
  },
  colourBar: true,
  image: {
    ariaHidden: true,
    sourceSet: [{
      url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
    }],
    alt: 'Abstract lights',
    classes: 'nhsd-a-image',
  },
};
ImageHero.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ImageHero(ImageHero.args)}`,
    },
  },
};

export const ImageHeroAccentedMirrored = Template.bind({});
ImageHeroAccentedMirrored.storyName = 'Image Hero (Accented & mirrored)';
ImageHeroAccentedMirrored.args = {
  accented: true,
  mirrored: true,
  title: {
    label: 'Data and technology that improves lives',
    classes: 'nhsd-t-heading-xxl',
  },
  text: {
    label: 'We deliver world-class technology and data intelligence for the NHS, supporting healthcare professionals  and empowering patients. At NHS Digital we’re helping the NHS frontline face the challenges of the coronavirus (COVID-19) outbreak with systems, services and data. From prioritising patients to protecting the most vulnerable.',
    classes: 'nhsd-t-body nhsd-!t-margin-bottom-6',
  },
  button: {
    el: 'a',
    label: 'About NHS Digital',
    href: '#',
    classes: 'nhsd-!t-margin-bottom-0',
  },
  colourBar: true,
  image: {
    ariaHidden: true,
    sourceSet: [{
      url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
    }],
    alt: 'Abstract lights',
    classes: 'nhsd-a-image',
  },
};
ImageHeroAccentedMirrored.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ImageHeroAccentedMirrored(ImageHeroAccentedMirrored.args)}`,
    },
  },
};

export const ImageHeroBanner = Template.bind({});
ImageHeroBanner.storyName = 'Image Hero banner';
ImageHeroBanner.args = {
  classes: 'nhsd-!t-bg-grad-black nhsd-!t-col-white',
  title: {
    label: 'Shielded Patient List',
    classes: 'nhsd-t-heading-xl nhsd-!t-col-white',
  },
  text: {
    label: 'NHS Digital has published the Shielded Patient List (SPL), which is enabling partner organisations across government to support and protect those who need shielding at this time.',
    classes: 'nhsd-t-body',
  },
  image: {
    ariaHidden: true,
    sourceSet: [{
      url: bannerImage,
    }],
    classes: 'nhsd-a-image--maintain-ratio nhsd-a-image--position-right',
    alt: 'Abstract lights',
  },
  leftAlign: true,
};
ImageHeroBanner.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ImageHeroBanner(ImageHeroBanner.args)}`,
    },
  },
};

export const BackgroundImageHeroBanner = Template.bind({});
BackgroundImageHeroBanner.storyName = 'Background Image Hero banner';
BackgroundImageHeroBanner.args = {
  classes: 'nhsd-!t-bg-pale-grey nhsd-!t-text-align-center',
  backgroundImage: true,
  introText: {
    text: 'NHS Digital Careers',
    classes: 'nhsd-t-heading-xs',
  },
  title: {
    label: 'Making the technology make a difference',
    classes: 'nhsd-t-heading-xl',
  },
  text: {
    label: 'We\'re using data and digital technology to make a positive difference to people\'s lives. Join us and you could become part of the team that designs, builds and maintains the digital infrastructure that supports the NHS. You could also help to manage the vast body of data that informs decision-making across the health service.',
    classes: 'nhsd-t-heading-s nhsd-!t-margin-bottom-6',
  },
  image: {
    ariaHidden: true,
    sourceSet: [{
      url: backgroundBannerImage,
    }],
    alt: 'Abstract lights',
    classes: 'nhsd-a-image--cover',
  },
  button: {
    el: 'a',
    label: 'Watch the video',
    href: '#',
    classes: 'nhsd-!t-margin-bottom-0',
  },
};
BackgroundImageHeroBanner.parameters = {
  docs: {
    description: {
      story: `- Hero styled with the \`nhsd-o-hero--background-image\` varient
- Uses \`nhsd-o-hero__background-image\` and \`nhsd-a-image--cover\` to position the image behind content`,
    },
    source: {
      code: `${sourceCode}\n${BackgroundImageHeroBanner(BackgroundImageHeroBanner.args)}`,
    },
  },
};
