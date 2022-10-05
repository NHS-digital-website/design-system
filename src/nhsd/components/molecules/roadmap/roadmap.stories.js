// prettify html
import pretty from 'pretty';

// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';

const componentName = 'Roadmap';
const storyDescription = `${sbConfig.heading.default}

Roadmap CSS variables:

- \`--column-width\` — Width of roadmap columns (default: 400px). Note: Value must be in px.
- \`--item-height\` — The maximum lines of text for an item (default 2).

Item CSS variables (\`.nhsd-m-roadmap__item\`):

- \`--item-vertical-position\` — Veritical position of the roadmap item (default 1).
- \`--item-length\` — The number of whole columns the item should span (default 1).
- \`--item-partial-length\` — If the item doesn't span a full column a partial length can be specificed as a decimal value, eg. 0.5 (default 1).
- \`--date-start-offset\` — Specifics the starting offset for the item as a decimal value, eg. 0.5 (default 0).
`;
const sourceCode = `// Sass import \n@use "nhsd/components/molecules/roadmap";

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
    argTypes: {},
  },
};

// Component template
const Template = (args) => template.render({ params: { ...args } });

export const LabComponent = Template.bind({});
LabComponent.storyName = sbConfig.title.defaultStory;
LabComponent.args = {
  dateHeadings: ['September 2022', 'October 2022', 'November 2022', 'December 2022', 'January 2023', 'February 2023', 'March 2023'],
  categories: [
    {
      heading: 'Managed capacity',
      roadmapItems: [
        {
          content: '<a href="#">PDS specification 2018:</a> The Personal Demographics Service will be upgraded to the 2018 version 1.0',
          date: 1,
          dateOffset: 0,
          length: 5,
          partialLength: 0.3,
          verticalPosition: 1,
        }, {
          content: '<a href="#">FHIR pathology messaging:</a> Pathology messaging will be moved to a FIR (Fast Healthcare Interoperability Resources) standard',
          date: 1,
          dateOffset: 0,
          length: 3,
          partialLength: 0.1,
          verticalPosition: 2,
        }, {
          content: '<a href="#">Lorem ipsum:</a> Dolor sit amet, consecteur adipiscing elit, lor st amet',
          date: 5,
          dateOffset: 0.8,
          length: 1,
          partialLength: 0.7,
          verticalPosition: 1,
        },
      ],
    }, {
      heading: 'Opportunity',
      roadmapItems: [
        {
          content: '<a href="#">GP2GP migration:</a> The requirements for GP2GP are being updated',
          date: 1,
          dateOffset: 0.8,
          length: 1,
          partialLength: 0.7,
          verticalPosition: 1,
        }, {
          content: '<a href="#">Minor/patch spec uplift:</a> Regular entry for a control lifts to existing specifications',
          date: 1,
          dateOffset: 0.8,
          length: 4,
          partialLength: 0.3,
          verticalPosition: 2,
        }, {
          content: '<a href="#">Lorem ipsum:</a> Dolor sit amet, consecteur adipiscing elit, lor st amet',
          date: 5,
          dateOffset: 0.1,
          length: 3,
          partialLength: 0.8,
          verticalPosition: 1,
        }, {
          content: '<a href="#">Lorem ipsum:</a> Dolor sit amet, consecteur adipiscing elit, lor st amet',
          date: 4,
          dateOffset: 0.5,
          length: 3,
          partialLength: 0.8,
          verticalPosition: 3,
        },
      ],
    }, {
      heading: 'Legal and regulation',
      roadmapItems: [
        {
          content: '<a href="#">Lorem ipsum:</a> Dolor sit amet, consecteur adipiscing elit, lor st amet',
          date: 2,
          dateOffset: 0.8,
          length: 3,
          partialLength: 0.7,
          verticalPosition: 1,
        }, {
          content: '<a href="#">Lorem ipsum:</a> Dolor sit amet, consecteur adipiscing elit, lor st amet',
          date: 7,
          dateOffset: 0,
          length: 1,
          partialLength: 0.8,
          verticalPosition: 1,
        },
      ],
    },
  ],
};
LabComponent.parameters = {
  backgrounds: {
    default: 'grey',
  },
  docs: {
    source: {
      code: `${sourceCode}\n${pretty(LabComponent(LabComponent.args), { ocd: true })}`,
    },
  },
};
