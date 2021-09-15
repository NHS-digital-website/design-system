// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Author image
import authorImage from '../../../assets/images/author-image.jpg';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Card';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}
  - Min. height: 200px on desktop / 150px until tablet.
  - No borders on any box background - BUT white box on white background must have a light grey border.
  - Font sizes for title and text has to work across all breakpoints.
  - No inline links allowed - ie. The card always has to link.
  - No option for both image AND icon. It’s either/or.
  - Heading always must be present.
  - If icon is present, there is no date.
  - If icon is present, the min. heading hight must be 45px.
  - Text element is always followed by a button.
  - If card has a "button" or "arrow link", the card contents have to be wrapped in an \`<a>\` tag.
  - Card only has a focus state when it acts as a link (with button or arrow icon).
  - If the user needs directing to an internal/external link, a card with an arrow or button must be used.`;
const sourceCode = `// Sass import \n@use "nhsd/components/molecules/card";

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
LabComponent.storyName = sbConfig.title.lab;
LabComponent.args = {
  boxLink: {
    href: '#',
  },
  image: {
    sourceSet: [{
      url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
    }],
    alt: 'Abstract lights',
  },
  title: 'About NHS Digital',
  text: 'We’re pioneering new ways of gathering and using data, developing new technologies to support those on the front line of care, and collaborating across the NHS to deliver better services.',
  button: {
    label: 'More about what we do',
    el: 'span',
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

export const ComponentVariant1 = Template.bind({});
ComponentVariant1.storyName = 'Image card with border';
ComponentVariant1.args = {
  box: {
    classes: 'nhsd-a-box--border-grey',
  },
  image: {
    sourceSet: [{
      media: '(max-width: 500px)',
      url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
    }, {
      url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_992x661.jpg',
    }],
    alt: '2 scientists carry out tests in a laboratory',
  },
  title: 'About NHS Digital',
  text: 'We\'re pioneering new ways of gathering and using data, developing new technologies to support those on the front line of care, and collaborating across the NHS to deliver better services.',
  button: {
    label: 'More about what we do',
    el: 'span',
  },
  boxLink: {
    href: '#',
  },
};
ComponentVariant1.parameters = {
  docs: {
    description: {
      story: `${sbConfig.heading.details}:
- White background, light grey border, black heading and dark grey text
- Image atom used with multiple, responsive image sources
- The whole card links
- Primary button (span element) - receives focus on ard focus and hover; also presses down when the card is pressed
- Yellow outline on focus and hover (default) - box border is hidden when in focus state`,
    },
    source: {
      code: `${sourceCode}\n${ComponentVariant1(ComponentVariant1.args)}`,
    },
  },
};

export const ComponentVariant2 = Template.bind({});
ComponentVariant2.storyName = 'White card on white background';
ComponentVariant2.args = {
  box: {
    classes: 'nhsd-a-box--bg-white nhsd-a-box--border-grey',
  },
  title: 'About NHS Digital',
  text: 'We’re pioneering new ways of gathering and using data, developing new technologies to support those on the front line of care, and collaborating across the NHS to deliver better services.',
  button: {
    classes: 'nhsd-a-button--outline',
    label: 'More about what we do',
    el: 'span',
  },
  boxLink: {
    href: '#',
  },
};
ComponentVariant2.parameters = {
  docs: {
    description: {
      story: `${sbConfig.heading.details}:
- Dark grey background, white heading and text
- The whole card links
- Secondary button (span element) - receives focus on ard focus and hover; also presses down when the card is pressed
- Yellow outline on focus and hover (default)`,
    },
    source: {
      code: `${sourceCode}\n${ComponentVariant2(ComponentVariant2.args)}`,
    },
  },
};

export const ComponentVariant3 = Template.bind({});
ComponentVariant3.storyName = 'Light grey card with date';
ComponentVariant3.args = {
  box: {
    classes: 'nhsd-a-box--bg-light-grey',
  },
  date: '28 Sep 2020',
  title: 'Creating the COVID-19 text service for vulnerable people',
  text: 'A small group from NHSX, NHS Digital, NHS Business Services Authority and the Behavioural Insights Team has developed a text service for those most threatened by COVID-19.',
  arrowIcon: {
    classes: 'nhsd-a-arrow nhsd-a-icon--size-s',
    id: 'arrow_right',
  },
  boxLink: {
    href: '#',
  },
};
ComponentVariant3.parameters = {
  docs: {
    description: {
      story: `${sbConfig.heading.details}:
- Light grey background, black heading, dark grey text
- Date shown on top
- The whole card links
- Yellow outline on focus and hover (default)`,
    },
    source: {
      code: `${sourceCode}\n${ComponentVariant3(ComponentVariant3.args)}`,
    },
  },
};

export const ComponentVariant4 = Template.bind({});
ComponentVariant4.storyName = 'Light grey linked card with tag and button (external link)';
ComponentVariant4.args = {
  box: {
    classes: 'nhsd-a-box--bg-light-grey',
  },
  title: 'About NHS Digital',
  text: 'We\'re pioneering new ways of gathering and using data, developing new technologies to support those on the front line of care, and collaborating across the NHS to deliver better services.',
  boxLink: {
    href: 'https://gov.uk',
    external: true,
  },
  button: {
    label: 'More about what we do',
    el: 'span',
  },
  tags: [{
    classes: 'nhsd-a-tag--bg-dark-grey',
    label: 'NEWS',
  }],
};
ComponentVariant4.parameters = {
  docs: {
    description: {
      story: `${sbConfig.heading.details}:
- Light grey background, black heading, dark grey text
- Directonal icon at the bottom (moves 10px to the right on card focus and hover)
- Dark grey tag
- The whole card links - external link - announces to SR users!
- Primary button (span element) - receives yellow focus on ard focus and hover; also presses down when the card is pressed
- Yellow outline on focus and hover (default)`,
    },
    source: {
      code: `${sourceCode}\n${ComponentVariant4(ComponentVariant4.args)}`,
    },
  },
};

export const ComponentVariant5 = Template.bind({});
ComponentVariant5.storyName = 'Blue, externally linked card with tag, hexagonal icon and arrow';
ComponentVariant5.args = {
  classes: 'nhsd-m-card--light-text',
  box: {
    classes: 'nhsd-a-box--bg-blue',
  },
  title: 'Potential Coronavirus (COVID-19) symptoms reported through NHS Pathways and 111 online, Week Ending 27th September 2020',
  boxLink: {
    href: 'https://gov.uk',
    external: true,
  },
  hexIcon: {
    classes: 'nhsd-a-icon--size-xxl nhsd-m-card__icon',
    id: 'chart',
    nested: true,
  },
  arrowIcon: {
    classes: 'nhsd-a-arrow nhsd-a-icon--size-s',
    id: 'arrow_right',
  },
  tags: [{
    classes: 'nhsd-a-tag--bg-light-grey',
    label: 'Info only',
  }],
};
ComponentVariant5.parameters = {
  docs: {
    description: {
      story: `${sbConfig.heading.details}:
- Blue background, white title
- Hexagonal icon in the TR corner
- Directonal icon at the bottom (moves 10px to the right on card focus and hover)
- Light grey tag
- Links to an external resource (makes screen reader announcement)
- Yellow outline on focus and hover (default)`,
    },
    source: {
      code: `${sourceCode}\n${ComponentVariant5(ComponentVariant5.args)}`,
    },
  },
};

export const ComponentVariant6 = Template.bind({});
ComponentVariant6.storyName = 'Dark grey linked card with hexagonal icon and arrow';
ComponentVariant6.args = {
  classes: 'nhsd-m-card--light-text',
  box: {
    classes: 'nhsd-a-box--bg-dark-grey',
  },
  title: 'Indicators and datasets',
  text: 'This is a collection of over a thousand datasets that we publish. The information is for clinical staff, commissioners, researchers, and others needing data and evidence to help with decision-making in health and care.',
  boxLink: {
    href: '#',
  },
  hexIcon: {
    classes: 'nhsd-m-card__icon',
    id: 'search',
    nested: true,
  },
  arrowIcon: {
    classes: 'nhsd-a-arrow nhsd-a-icon--size-s',
    id: 'arrow_right',
  },
  tags: [{
    classes: 'nhsd-a-tag--bg-light-grey',
    label: 'National statistics',
  }],
};
ComponentVariant6.parameters = {
  docs: {
    description: {
      story: `${sbConfig.heading.details}:
- Dark grey background, white text
- Hexagonal icon in the TR corner
- Directonal icon at the bottom (moves 10px to the right on card focus and hover)
- Light grey tag
- Yellow outline on focus and hover (default)`,
    },
    source: {
      code: `${sourceCode}\n${ComponentVariant6(ComponentVariant6.args)}`,
    },
  },
};

export const ComponentVariant9 = Template.bind({});
ComponentVariant9.storyName = 'Light grey linked card with hexagonal icon and arrow';
ComponentVariant9.args = {
  box: {
    classes: 'nhsd-a-box--bg-light-grey',
  },
  title: 'Indicators and datasets',
  text: 'This is a collection of over a thousand datasets that we publish. The information is for clinical staff, commissioners, researchers, and others needing data and evidence to help with decision-making in health and care.',
  boxLink: {
    href: '#',
  },
  hexIcon: {
    classes: 'nhsd-a-icon--col-black nhsd-m-card__icon',
    id: 'x',
    nested: true,
  },
  arrowIcon: {
    classes: 'nhsd-a-arrow nhsd-a-icon--size-s nhsd-a-icon--col-black',
    id: 'arrow_right',
  },
  tags: [{
    classes: 'nhsd-a-tag--bg-dark-grey',
    label: 'National statistics',
  }],
};
ComponentVariant9.parameters = {
  docs: {
    description: {
      story: `${sbConfig.heading.details}:
- Dark grey background, white text
- Hexagonal icon in the TR corner
- Directonal icon at the bottom (moves 10px to the right on card focus and hover)
- Dark grey tag
- Yellow outline on focus and hover (default)`,
    },
    source: {
      code: `${sourceCode}\n${ComponentVariant9(ComponentVariant9.args)}`,
    },
  },
};

export const ComponentVariant7 = Template.bind({});
ComponentVariant7.storyName = 'Yellow linked card with button';
ComponentVariant7.args = {
  boxLink: {
    href: '#',
    classes: 'nhsd-a-box-link--focus-orange',
  },
  box: {
    classes: 'nhsd-a-box--bg-yellow',
  },
  title: 'About NHS Digital',
  text: 'We’re pioneering new ways of gathering and using data, developing new technologies to support those on the front line of care, and collaborating across the NHS to deliver better services.',
  button: {
    label: 'More about what we do',
    el: 'span',
  },
};
ComponentVariant7.parameters = {
  docs: {
    description: {
      story: `${sbConfig.heading.details}:
- Yellow background, black text
- The whole card links
- Orange outline on focus and hover
- Primary button (span element) - receives focus on ard focus and hover; also presses down when the card is pressed`,
    },
    source: {
      code: `${sourceCode}\n${ComponentVariant7(ComponentVariant7.args)}`,
    },
  },
};

export const ComponentVariant10 = Template.bind({});
ComponentVariant10.storyName = 'Yellow linked card with hexagonal icon and arrow';
ComponentVariant10.args = {
  box: {
    classes: 'nhsd-a-box--bg-yellow',
  },
  title: 'Indicators and datasets',
  text: 'This is a collection of over a thousand datasets that we publish. The information is for clinical staff, commissioners, researchers, and others needing data and evidence to help with decision-making in health and care.',
  boxLink: {
    href: '#',
    classes: 'nhsd-a-box-link--focus-orange',
  },
  hexIcon: {
    classes: 'nhsd-a-icon--col-black nhsd-m-card__icon',
    id: 'arrow_right',
    nested: true,
  },
  arrowIcon: {
    classes: 'nhsd-a-arrow nhsd-a-icon--size-s nhsd-a-icon--col-black',
    id: 'arrow_right',
  },
  tags: [{
    classes: 'nhsd-a-tag--bg-dark-grey',
    label: 'National statistics',
  }],
};
ComponentVariant10.parameters = {
  docs: {
    description: {
      story: `${sbConfig.heading.details}:
- Yellow background, black text
- Orange outline on focus and hover
- Hexagonal icon in the TR corner
- Directonal icon at the bottom (moves 10px to the right on card focus and hover)
- Dark grey tag
- Yellow outline on focus and hover (default)`,
    },
    source: {
      code: `${sourceCode}\n${ComponentVariant10(ComponentVariant10.args)}`,
    },
  },
};

export const ComponentVariant11 = Template.bind({});
ComponentVariant11.storyName = 'Dark Green linked card ';
ComponentVariant11.args = {
  box: {
    classes: 'nhsd-a-box--bg-dark-green',
  },
  title: "If you're a patient, book or manage your e-Refferal by visting NHS.UK",
  text: 'For those who have been referred to a hospital or clinic through the NHS e-Refferal Service.',
  boxLink: {
    href: '#',
    classes: 'nhsd-a-box-link--focus',
  },
  arrowIcon: {
    classes: 'nhsd-a-arrow nhsd-a-icon--size-s nhsd-a-icon--col-white',
    id: 'arrow_right',
  },
};
ComponentVariant11.parameters = {
  docs: {
    description: {
      story: `${sbConfig.heading.details}:
- Dark geen background, white text
- Directonal icon at the bottom (moves 10px to the right on card focus and hover)
- Yellow outline on focus and hover (default)`,
    },
    source: {
      code: `${sourceCode}\n${ComponentVariant11(ComponentVariant11.args)}`,
    },
  },
};

export const CyberAlertVariant = Template.bind({});
CyberAlertVariant.storyName = 'Cyber alert (list)';
CyberAlertVariant.args = {
  box: {
    classes: 'nhsd-a-box--bg-white nhsd-a-box--border-grey',
  },
  title: 'About NHS Digital',
  text: 'We’re pioneering new ways of gathering and using data, developing new technologies to support those on the front line of care, and collaborating across the NHS to deliver better services.',
  boxLink: {
    href: '#',
    classes: 'nhsd-a-box-link--focus-orange',
  },
  arrowIcon: {
    classes: 'nhsd-a-arrow nhsd-a-icon--size-s nhsd-a-icon--col-black',
    id: 'arrow_right',
  },
  tags: [{
    classes: 'nhsd-a-tag--bg-dark-grey',
    label: 'CC-3734',
  }, {
    classes: 'nhsd-a-tag--bg-light-red',
    label: 'High Severity',
  }],
  date: 'Thursday 28 January 2021 (updated 29 January 2021)',
  contentTag: {
    classes: 'nhsd-a-tag--bg-light-grey nhsd-!t-margin-top-3 nhsd-!t-margin-bottom-1',
    label: 'Insecure Software',
  },
};
CyberAlertVariant.parameters = {
  docs: {
    description: {
      story: `${sbConfig.heading.details}:
- White background, Black heading and text
- Tag list rendered on top of the card
- Date under tag list element
- Content tag
- Arrow icon at the bottom
- The whole card links
- Orange outline on focus and hover (default)`,
    },
    source: {
      code: `${sourceCode}\n${CyberAlertVariant(CyberAlertVariant.args)}`,
    },
  },
};

export const CyberAlertHubVariant = Template.bind({});
CyberAlertHubVariant.storyName = 'Cyber alert (hub)';
CyberAlertHubVariant.args = {
  box: {
    classes: 'nhsd-a-box--bg-white nhsd-a-box--border-grey',
  },
  title: 'About NHS Digital',
  boxLink: {
    href: '#',
    classes: 'nhsd-a-box-link--focus-orange',
  },
  arrowIcon: {
    classes: 'nhsd-a-arrow nhsd-a-icon--size-s nhsd-a-icon--col-black',
    id: 'arrow_right',
  },
  tags: [{
    classes: 'nhsd-a-tag--bg-light-red',
    label: 'High Severity',
  }],
  date: 'Thursday 28 January 2021 (updated 29 January 2021)',
};
CyberAlertHubVariant.parameters = {
  docs: {
    description: {
      story: `${sbConfig.heading.details}:
- White background, Black heading and text
- Tag rendered on top of the card
- Date under tag list element
- Arrow icon at the bottom
- The whole card links
- Orange outline on focus and hover (default)`,
    },
    source: {
      code: `${sourceCode}\n${CyberAlertHubVariant(CyberAlertHubVariant.args)}`,
    },
  },
};

export const FeedListVariant = Template.bind({});
FeedListVariant.storyName = 'Feed list variant';
FeedListVariant.args = {
  box: {
    classes: 'nhsd-a-box--bg-light-grey',
  },
  title: 'About NHS Digital',
  text: 'We’re pioneering new ways of gathering and using data, developing new technologies to support those on the front line of care, and collaborating across the NHS to deliver better services.',
  boxLink: {
    href: '#',
    classes: 'nhsd-a-box-link--focus-orange',
  },
  arrowIcon: {
    classes: 'nhsd-a-arrow nhsd-a-icon--size-s nhsd-a-icon--col-black',
    id: 'arrow_right',
  },
  date: 'Thursday 28 January 2021',
  image: {
    classes: 'nhsd-a-image--cover',
    sourceSet: [{
      url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
    }],
    alt: 'Abstract lights',
  },
  imagePosition: 'adjacent',
};
FeedListVariant.parameters = {
  docs: {
    description: {
      story: `${sbConfig.heading.details}:
- Grey background, Black heading and text
- Date at top of card
- Arrow icon at the bottom
- The whole card links
- Orange outline on focus and hover (default)
- Image atom used with \`nhsd-a-image--cover\` modifier
- \`nhsd-m-card--image-position-adjacent\` card modifier used to position image adjacent to content`,
    },
    source: {
      code: `${sourceCode}\n${FeedListVariant(FeedListVariant.args)}`,
    },
  },
};

export const GalleryCard = Template.bind({});
GalleryCard.storyName = 'Image card with embedded download card';
GalleryCard.args = {
  box: {
    classes: 'nhsd-a-box--border-grey',
  },
  image: {
    sourceSet: [{
      media: '(max-width: 500px)',
      url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
    }, {
      url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_992x661.jpg',
    }],
    alt: '2 scientists carry out tests in a laboratory',
  },
  title: 'About NHS Digital',
  text: 'We\'re pioneering new ways of gathering and using data, developing new technologies to support those on the front line of care, and collaborating across the NHS to deliver better services.',
  downloadCards: [
    {
      documentIconId: 'document_pdf',
      title: {
        label: 'Example file - NHS Digital sustainability posters',
      },
      metaTags: [
        {
          label: 'PDF',
          classes: 'nhsd-a-tag--meta',
        }, {
          label: '1.5MB',
          classes: 'nhsd-a-tag--meta-light',
        },
      ],
    },
  ],
};
GalleryCard.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${GalleryCard(GalleryCard.args)}`,
    },
  },
};

export const GalleryCard2 = Template.bind({});
GalleryCard2.storyName = 'Image card with multiple download cards';
GalleryCard2.args = {
  box: {
    classes: 'nhsd-a-box--border-grey',
  },
  image: {
    sourceSet: [{
      media: '(max-width: 500px)',
      url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
    }, {
      url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/image-sizes/lab-testing_992x661.jpg',
    }],
    alt: '2 scientists carry out tests in a laboratory',
  },
  title: 'About NHS Digital',
  text: 'We\'re pioneering new ways of gathering and using data, developing new technologies to support those on the front line of care, and collaborating across the NHS to deliver better services.',
  downloadCards: [
    {
      documentIconId: 'document_pdf',
      title: {
        label: 'Example file - NHS Digital sustainability posters',
      },
      metaTags: [
        {
          label: 'PDF',
          classes: 'nhsd-a-tag--meta',
        }, {
          label: '1.5MB',
          classes: 'nhsd-a-tag--meta-light',
        },
      ],
    },
    {
      documentIconId: 'document_pdf',
      title: {
        label: 'Example file - NHS Digital sustainability posters',
      },
      metaTags: [
        {
          label: 'PDF',
          classes: 'nhsd-a-tag--meta',
        }, {
          label: '1.5MB',
          classes: 'nhsd-a-tag--meta-light',
        },
      ],
    },
  ],
};
GalleryCard2.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${GalleryCard2(GalleryCard2.args)}`,
    },
  },
};

export const AuthorCard = Template.bind({});
AuthorCard.storyName = 'Author';
AuthorCard.args = {
  box: {
    classes: 'nhsd-a-box--bg-light-grey',
  },
  boxLink: {
    href: '#',
  },
  classes: 'nhsd-m-card--author',
  image: {
    sourceSet: [{
      url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
    }],
    alt: 'Abstract lights',
  },
  title: 'About NHS Digital',
  text: 'We’re pioneering new ways of gathering and using data, developing new technologies to support those on the front line of care, and collaborating across the NHS to deliver better services.',
  arrowIcon: {
    classes: 'nhsd-a-arrow nhsd-a-icon--size-s nhsd-a-icon--col-black',
    id: 'arrow_right',
  },
  author: {
    avatar: {
      image: {
        ariaHidden: true,
        sourceSet: [{
          url: authorImage,
        }],
        alt: 'Jason Hodge',
        classes: 'nhsd-a-image--cover',
      },
    },
    header: '<a href="#" class="nhsd-a-link nhsd-t-body-s">Jason Hodge</a>',
    role: '<p class="nhsd-t-body-s nhsd-!t-margin-top-2 nhsd-!t-margin-bottom-0 nhsd-!t-col-black">Role or job description, NHS Digital</span>',
  },
};
AuthorCard.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${AuthorCard(AuthorCard.args)}`,
    },
  },
};
