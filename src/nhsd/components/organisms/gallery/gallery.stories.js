// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';

const componentName = 'Gallery';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}

### Components used
- <a href="/docs/design-system-components-molecules-card--lab-component">Card</a>
- <a href="/docs/design-system-components-atoms-image--lab-component">Image</a>

### Tokens used
- Spacing

### Developer notes

- List of cards of the embedded download card variant
- Number of columns is adjustable and responsive
- Title, text and download card are all optional
- A mixture of each variant can be used within the list
- If the only parameter is an image, the <a href="/docs/design-system-components-atoms-image--lab-component">Image</a> atom is used instead of a <a href="/docs/design-system-components-molecules-card--lab-component">Card</a> molecule`;

const sourceCode = `// Sass import \n@use "nhsd/components/organisms/gallery";

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
  desktopColumns: 3,
  cards: [
    {
      box: {
        classes: 'nhsd-a-box--border-grey',
      },
      image: {
        sourceSet: [{
          url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-image--round-top-corners',
      },
      title: 'About NHS Digital',
      text: 'Items can include a description if needed, like this.',
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
    },
    {
      box: {
        classes: 'nhsd-a-box--border-grey',
      },
      image: {
        sourceSet: [{
          url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-image--round-top-corners',
      },
      title: 'About NHS Digital',
      text: 'Items can include a description if needed, like this.',
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
    },
    {
      box: {
        classes: 'nhsd-a-box--border-grey',
      },
      image: {
        sourceSet: [{
          url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-image--round-top-corners',
      },
      title: 'About NHS Digital',
      text: 'Items can include a description if needed, like this.',
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
    },
  ],
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};

export const ImageOnly = Template.bind({});
ImageOnly.storyName = sbConfig.title.ImageOnly;
ImageOnly.args = {
  desktopColumns: 3,
  cards: [
    {
      box: {
        classes: 'nhsd-a-box--border-grey',
      },
      image: {
        sourceSet: [{
          url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-image--round-corners',
      },
    },
    {
      box: {
        classes: 'nhsd-a-box--border-grey',
      },
      image: {
        sourceSet: [{
          url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-image--round-corners',
      },
    },
    {
      box: {
        classes: 'nhsd-a-box--border-grey',
      },
      image: {
        sourceSet: [{
          url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-image--round-corners',
      },
    },
  ],
};
ImageOnly.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${ImageOnly(ImageOnly.args)}`,
    },
  },
};

export const TitleOnly = Template.bind({});
TitleOnly.storyName = sbConfig.title.TitleOnly;
TitleOnly.args = {
  desktopColumns: 3,
  cards: [
    {
      box: {
        classes: 'nhsd-a-box--border-grey',
      },
      image: {
        sourceSet: [{
          url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-image--round-top-corners',
      },
      title: 'About NHS Digital',
    },
    {
      box: {
        classes: 'nhsd-a-box--border-grey',
      },
      image: {
        sourceSet: [{
          url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-image--round-top-corners',
      },
      title: 'About NHS Digital',
    },
    {
      box: {
        classes: 'nhsd-a-box--border-grey',
      },
      image: {
        sourceSet: [{
          url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-image--round-top-corners',
      },
      title: 'About NHS Digital',
    },
  ],
};
TitleOnly.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${TitleOnly(TitleOnly.args)}`,
    },
  },
};

export const DescriptionOnly = Template.bind({});
DescriptionOnly.storyName = sbConfig.title.DescriptionOnly;
DescriptionOnly.args = {
  desktopColumns: 3,
  cards: [
    {
      box: {
        classes: 'nhsd-a-box--border-grey',
      },
      image: {
        sourceSet: [{
          url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-image--round-top-corners',
      },
      text: 'Items can include a description if needed, like this.',
    },
    {
      box: {
        classes: 'nhsd-a-box--border-grey',
      },
      image: {
        sourceSet: [{
          url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-image--round-top-corners',
      },
      text: 'Items can include a description if needed, like this.',
    },
    {
      box: {
        classes: 'nhsd-a-box--border-grey',
      },
      image: {
        sourceSet: [{
          url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-image--round-top-corners',
      },
      text: 'Items can include a description if needed, like this.',
    },
  ],
};
DescriptionOnly.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${DescriptionOnly(DescriptionOnly.args)}`,
    },
  },
};

export const DownloadCardOnly = Template.bind({});
DownloadCardOnly.storyName = sbConfig.title.DownloadCardOnly;
DownloadCardOnly.args = {
  desktopColumns: 3,
  cards: [
    {
      box: {
        classes: 'nhsd-a-box--border-grey',
      },
      image: {
        sourceSet: [{
          url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-image--round-top-corners',
      },
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
    },
    {
      box: {
        classes: 'nhsd-a-box--border-grey',
      },
      image: {
        sourceSet: [{
          url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-image--round-top-corners',
      },
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
    },
    {
      box: {
        classes: 'nhsd-a-box--border-grey',
      },
      image: {
        sourceSet: [{
          url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-image--round-top-corners',
      },
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
    },
  ],
};
DownloadCardOnly.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${DownloadCardOnly(DownloadCardOnly.args)}`,
    },
  },
};

export const MultipleDownloadCards = Template.bind({});
MultipleDownloadCards.storyName = sbConfig.title.MultipleDownloadCards;
MultipleDownloadCards.args = {
  desktopColumns: 2,
  cards: [
    {
      box: {
        classes: 'nhsd-a-box--border-grey',
      },
      image: {
        sourceSet: [{
          url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-image--round-top-corners',
      },
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
    },
    {
      box: {
        classes: 'nhsd-a-box--border-grey',
      },
      image: {
        sourceSet: [{
          url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-image--round-top-corners',
      },
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
    },
  ],
};
MultipleDownloadCards.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${MultipleDownloadCards(MultipleDownloadCards.args)}`,
    },
  },
};

export const MixedVariants = Template.bind({});
MixedVariants.storyName = sbConfig.title.MixedVariants;
MixedVariants.args = {
  desktopColumns: 3,
  cards: [
    {
      box: {
        classes: 'nhsd-a-box--border-grey',
      },
      image: {
        sourceSet: [{
          url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-image--round-corners',
      },
    },
    {
      box: {
        classes: 'nhsd-a-box--border-grey',
      },
      image: {
        sourceSet: [{
          url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-image--round-top-corners',
      },
      title: 'About NHS Digital',
      text: 'Items can include a description if needed, like this.',
    },
    {
      box: {
        classes: 'nhsd-a-box--border-grey',
      },
      image: {
        sourceSet: [{
          url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-image--round-top-corners',
      },
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
    },
  ],
};
MixedVariants.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${MixedVariants(MixedVariants.args)}`,
    },
  },
};

export const SquareImage = Template.bind({});
SquareImage.storyName = '1:1 image aspect ratio';
SquareImage.args = {
  desktopColumns: 3,
  cards: [
    {
      box: {
        classes: 'nhsd-a-box--border-grey',
      },
      image: {
        sourceSet: [{
          url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-image--round-top-corners nhsd-a-image--square',
      },
      title: 'About NHS Digital',
      text: 'Items can include a description if needed, like this.',
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
    },
    {
      box: {
        classes: 'nhsd-a-box--border-grey',
      },
      image: {
        sourceSet: [{
          url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-image--round-top-corners nhsd-a-image--square',
      },
      title: 'About NHS Digital',
      text: 'Items can include a description if needed, like this.',
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
    },
    {
      box: {
        classes: 'nhsd-a-box--border-grey',
      },
      image: {
        sourceSet: [{
          url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-image--round-top-corners nhsd-a-image--square',
      },
      title: 'About NHS Digital',
      text: 'Items can include a description if needed, like this.',
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
    },
  ],
};
SquareImage.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${SquareImage(SquareImage.args)}`,
    },
  },
};

export const FourByThreeImage = Template.bind({});
FourByThreeImage.storyName = '4:3 image aspect ratio';
FourByThreeImage.args = {
  desktopColumns: 3,
  cards: [
    {
      box: {
        classes: 'nhsd-a-box--border-grey',
      },
      image: {
        sourceSet: [{
          url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-image--round-top-corners nhsd-a-image--4by3',
      },
      title: 'About NHS Digital',
      text: 'Items can include a description if needed, like this.',
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
    },
    {
      box: {
        classes: 'nhsd-a-box--border-grey',
      },
      image: {
        sourceSet: [{
          url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-image--round-top-corners nhsd-a-image--4by3',
      },
      title: 'About NHS Digital',
      text: 'Items can include a description if needed, like this.',
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
    },
    {
      box: {
        classes: 'nhsd-a-box--border-grey',
      },
      image: {
        sourceSet: [{
          url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        }],
        alt: 'Abstract lights',
        classes: 'nhsd-a-image--round-top-corners nhsd-a-image--4by3',
      },
      title: 'About NHS Digital',
      text: 'Items can include a description if needed, like this.',
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
    },
  ],
};
FourByThreeImage.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${FourByThreeImage(FourByThreeImage.args)}`,
    },
  },
};

export const AnyAspectRatio = Template.bind({});
AnyAspectRatio.storyName = sbConfig.title.AnyAspectRatio;
AnyAspectRatio.args = {
  desktopColumns: 3,
  cards: [
    {
      box: {
        classes: 'nhsd-a-box--border-grey',
      },
      image: {
        img: {
          url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/fibre_57101102_med.jpg',
        },
        alt: 'NHSD logo',
        classes: 'nhsd-a-image--round-top-corners',
      },
      title: 'About NHS Digital',
      text: 'Items can include a description if needed, like this.',
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
    },
    {
      box: {
        classes: 'nhsd-a-box--border-grey',
      },
      image: {
        sourceSet: [{
          url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/logos/nhs-digital-logo_nhs-blue_right.svg',
        }],
        alt: 'NHSD logo',
        classes: 'nhsd-a-image--round-top-corners nhsd-a-image--maintain-ratio nhsd-a-image--contain',
      },
      title: 'About NHS Digital',
      text: 'Items can include a description if needed, like this.',
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
    },
    {
      box: {
        classes: 'nhsd-a-box--border-grey',
      },
      image: {
        sourceSet: [{
          url: 'https://digital.nhs.uk/binaries/content/gallery/website/about-nhs-digital/corporate-information-and-documents/nhs-digitals-style-guidelines/logos/nhs-digital-logo_nhs-blue_right.svg',
        }],
        alt: 'NHSD logo',
        classes: 'nhsd-a-image--round-top-corners nhsd-a-image--maintain-ratio nhsd-a-image--contain',
      },
      title: 'About NHS Digital',
      text: 'Items can include a description if needed, like this.',
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
    },
  ],
};
AnyAspectRatio.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${AnyAspectRatio(AnyAspectRatio.args)}`,
    },
  },
};
