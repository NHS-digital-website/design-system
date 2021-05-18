// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';
// Load stylesheet file
require('./_index.scss');

const componentName = 'Table';
const storyDescription = `${sbConfig.heading.lab}

The \`nhsd-m-table\` component consists of a desktop table design and a mobile list view.

The mobile list view is generated automatically from the table structure using JavaScript and the \`data-responsive\` attribute, however for advanced mobile layouts which can't be automatically generated it's neccesary to build a custom mobile list.

By default when JavaScript is enabled the table will be made sortable, however sorting can be disable on both the table and column level by applying the \`data-no-sort\` attribute.

Tables can be partitioned into sections using the \`<tbody>\` tag, and these sections are sorted individually.`;
const sourceCode = `// Sass import \n@use "nhsd/components/atoms/table";

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
  argTypes: {
    heading: {
      description: 'Table heading text',
    },
    table: {
      description: 'Table data',
    },
  },
};

// Component template
const Template = (args) => template.render({ params: { ...args } });

export const LabComponent = Template.bind({});
LabComponent.storyName = sbConfig.title.lab;
LabComponent.args = {
  heading: {
    text: 'Statement of comprehensive net expenditure for the year ended 31 March 2020',
  },
  table: {
    headings: [{
      text: 'Expenditure',
    }, {
      text: 'Note',
    }, {
      text: '2019-20 (£000)',
    }, {
      text: '2018-19 (£000)',
      disableSort: true,
    }],
    data: [
      {
        cells: [
          ['Staff costs', '3', '179,841', '177,798'],
          ['Termination benefits', '3', '8,359', '11,165'],
          ['Operating expenditure', '5', '223,988', '218,031'],
        ],
      },
    ],
    repsonsive: true,
  },
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};

export const GroupedTableComponent = Template.bind({});
GroupedTableComponent.storyName = 'Grouped table data';
GroupedTableComponent.args = {
  heading: {
    text: 'Statement of comprehensive net expenditure for the year ended 31 March 2020',
  },
  table: {
    repsonsive: true,
    headings: [{
      text: 'Expenditure',
    }, {
      text: 'Note',
    }, {
      text: '2019-20 (£000)',
    }, {
      text: '2018-19 (£000)',
      disableSort: true,
    }],
    data: [
      {
        cells: [
          ['Staff costs', '3', '179,841', '177,798'],
          ['Termination benefits', '3', '8,359', '11,165'],
          ['Operating expenditure', '5', '223,988', '218,031'],
        ],
      },
      {
        cells: [
          ['Total', '11', '412,188', '407,294'],
        ],
        highlight: true,
      },
      {
        cells: [
          ['Less misc', '5', '100,000', '50,000'],
        ],
      },
      {
        cells: [
          ['Overall total', '6', '312,188', '357,294'],
        ],
        highlight: true,
      },
    ],
  },
};
GroupedTableComponent.parameters = {
  docs: {
    description: {
      story: `- Table grouped into sections using \`<tbody>\`.
- Grouped sections can be highlighed using the \`nhsd-m-table__highlighted-items\` class.
- Sorting of last column disabled with \`data-no-sort\`.`,
    },
    source: {
      code: `${sourceCode}\n${GroupedTableComponent(GroupedTableComponent.args)}`,
    },
  },
};

export const GreyTableComponent = Template.bind({});
GreyTableComponent.storyName = 'Grey table';
GreyTableComponent.args = {
  ...GroupedTableComponent.args,
  heading: {
    ...GroupedTableComponent.args.heading,
    classes: 'nhsd-!t-col-white',
  },
  colour: 'white',
  classes: 'nhsd-!t-padding-8 nhsd-!t-bg-dark-grey',
};
GreyTableComponent.parameters = {
  docs: {
    description: {
      story: `- Table grouped into sections using \`<tbody>\`.
- Grouped sections can be highlighed using the \`nhsd-m-table__highlighted-items\` class.
- \`nhsd-m-table--colour-white\` table varient applied for styling against coloured background`,
    },
    source: {
      code: `${sourceCode}\n${GreyTableComponent()}`,
    },
  },
};

export const BlueTableComponent = Template.bind({});
BlueTableComponent.storyName = 'Blue table';
BlueTableComponent.args = {
  ...GroupedTableComponent.args,
  heading: {
    ...GroupedTableComponent.args.heading,
    classes: 'nhsd-!t-col-white',
  },
  colour: 'white',
  classes: 'nhsd-!t-padding-8 nhsd-!t-bg-blue',
};
BlueTableComponent.parameters = {
  docs: {
    description: {
      story: `- Table grouped into sections using \`<tbody>\`.
- Grouped sections can be highlighed using the \`nhsd-m-table__highlighted-items\` class.
- \`nhsd-m-table--colour-white\` table varient applied for styling against coloured background`,
    },
    source: {
      code: `${sourceCode}\n${BlueTableComponent(BlueTableComponent.args)}`,
    },
  },
};

export const RightAlignTableComponent = Template.bind({});
RightAlignTableComponent.storyName = 'Right align table';
RightAlignTableComponent.args = {
  ...GroupedTableComponent.args,
  classes: 'nhsd-m-table--right-align',
};
RightAlignTableComponent.parameters = {
  docs: {
    description: {
      story: '- Tables can be right aligned with `nhsd-m-table--right-align`',
    },
    source: {
      code: `${sourceCode}\n${RightAlignTableComponent(RightAlignTableComponent.args)}`,
    },
  },
};

export const RightAlignColComponent = Template.bind({});
RightAlignColComponent.storyName = 'Right align column';
RightAlignColComponent.args = {
  ...GroupedTableComponent.args,
  table: {
    ...GroupedTableComponent.args.table,
    headings: [
      ...GroupedTableComponent.args.table.headings.slice(0, 2),
      {
        text: '2019-20 (£000)',
        rightAlign: true,
      },
      ...GroupedTableComponent.args.table.headings.slice(3),
    ],
  },
};
RightAlignColComponent.parameters = {
  docs: {
    description: {
      story: '- Individual table columns can be right aligned with `nhsd-m-table__col--right-align`',
    },
    source: {
      code: `${sourceCode}\n${RightAlignColComponent(RightAlignColComponent.args)}`,
    },
  },
};

export const MobileListComponent = Template.bind({});
MobileListComponent.storyName = 'Custom mobile table';
MobileListComponent.args = {
  ...GroupedTableComponent.args,
  table: {
    ...GroupedTableComponent.args.table,
    repsonsive: false,
  },
  mobile: {
    lists: [
      {
        rows: [{
          vals: ['Expenditure', 'Staff Costs'],
        }, {
          vals: ['Note', '3'],
        }, {
          vals: ['2019-20 (£000)', '179,841'],
        }, {
          vals: ['2018-19 (£000)', '177,798'],
        }],
      }, {
        rows: [{
          vals: ['Expenditure', 'Termination benefits'],
        }, {
          vals: ['Note', '3'],
        }, {
          vals: ['2019-20 (£000)', '8,359'],
        }, {
          vals: ['2018-19 (£000)', '11,165'],
        }],
      }, {
        rows: [{
          vals: ['Expenditure', 'Operating expenditure'],
        }, {
          vals: ['Note', '5'],
        }, {
          vals: ['2019-20 (£000)', '223,988'],
        }, {
          vals: ['2018-19 (£000)', '218,031'],
        }],
      }, {
        title: 'Totals',
        classes: 'nhsd-m-table__mobile-list-item--highlighted',
        rows: [{
          vals: ['Note', '11'],
          classes: 'nhsd-m-table__mobile-list-item-row--no-borders nhsd-m-table__mobile-list-item-row--font-bold',
        }, {
          vals: ['Less misc', '5'],
          classes: 'nhsd-m-table__mobile-list-item-row--font-regular',
        }, {
          vals: ['Overall total', '6'],
          classes: 'nhsd-m-table__mobile-list-item-row--font-regular',
        }, {
          vals: ['2019-20 (£000)', '412,188'],
          classes: 'nhsd-m-table__mobile-list-item-row--no-borders nhsd-m-table__mobile-list-item-row--font-bold nhsd-!t-padding-top-6',
        }, {
          vals: ['Less misc', '100,000'],
          classes: 'nhsd-m-table__mobile-list-item-row--font-regular',
        }, {
          vals: ['Overall total', '312,188'],
          classes: 'nhsd-m-table__mobile-list-item-row--font-regular',
        }, {
          vals: ['2018-19 (£000)', '407,294'],
          classes: 'nhsd-m-table__mobile-list-item-row--no-borders nhsd-m-table__mobile-list-item-row--font-bold nhsd-!t-padding-top-6',
        }, {
          vals: ['Less misc', '50,000'],
          classes: 'nhsd-m-table__mobile-list-item-row--font-regular',
        }, {
          vals: ['Overall total', '357,294'],
          classes: 'nhsd-m-table__mobile-list-item-row--font-regular',
        }],
      },
    ],
  },
};
MobileListComponent.parameters = {
  docs: {
    description: {
      story: `- Example of a custom mobile list implementation.
- Allows custom headings to be defined and minor styling alterations to be made to borders and font weights.`,
    },
    source: {
      code: `${sourceCode}\n${MobileListComponent(MobileListComponent.args)}`,
    },
  },
};

export const NoSortTable = Template.bind({});
NoSortTable.storyName = 'Disable table sort';
NoSortTable.args = {
  ...GroupedTableComponent.args,
  disableSort: true,
};
NoSortTable.parameters = {
  docs: {
    description: {
      story: '- Example of a table with sorting disabled using `data-no-sort`.',
    },
    source: {
      code: `${sourceCode}\n${NoSortTable(NoSortTable.args)}`,
    },
  },
};

export const NoHeadingWrap = Template.bind({});
NoHeadingWrap.storyName = 'Disable heading wrapping';
NoHeadingWrap.args = {
  ...GroupedTableComponent.args,
};
NoHeadingWrap.parameters = {
  docs: {
    description: {
      story: '- Example of a table with heading wrapping disabled using `.nhsd-m-table--no-heading-wrap`.',
    },
    source: {
      code: `${sourceCode}\n${NoHeadingWrap(NoHeadingWrap.args)}`,
    },
  },
};
