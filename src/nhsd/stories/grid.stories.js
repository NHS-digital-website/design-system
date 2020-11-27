// Load storybook config
import * as sbConfig from '../../../.storybook/storybook-config.js';

// Load stylesheet file
require('../scss-core/base/_grid.scss');
require('../components/atoms/text-highlight/_index.scss');

const componentName = 'Grid system';
const storyDescription = `${sbConfig.heading.lab}
- The grid system uses **Flexbox** to create **"container > row > column"** style layouts.

### Breakpoints
|Device type|Shorthand|Min. width|Max. width|Max. content width|Columns|Gutter|
|---|---|---|---|---|---|---|---|
|Mobile|**XS**|0|768px|355px|2|30px|
|Tablet|**S**|769px|1024px|688px|6|30px|
|Desktop|**M**|1025px|1366px|944px|12|30px|
|Wide|**L**|1367px|1579px|1240px|12|30px|
|Extra Wide|**XL**|1580px|∞|1500px|12|30px|

- **Note:** The <span class="nhsd-u-bg-green">&nbsp;&nbsp;&nbsp;&nbsp;</span> and <span class="nhsd-u-bg-red">&nbsp;&nbsp;&nbsp;&nbsp;</span> mobile columns represent the slightly tweaked gutters on the mobile breakpoint.`;
const sourceCode = `// Sass import \n@use "nhsd/scss-core/base/grid";\n\n//HTML`;

// Component defaults
export default {
  title: `${sbConfig.title.designSystem} / ${sbConfig.title.foundations} / ${sbConfig.title.gridSystem}`,
  parameters: {
    docs: {
      description: {
        component: storyDescription,
      }
    },
  }
};

export const LabComponent = () => {
  const div = document.createElement('div');
  div.innerHTML = `<div class="nhsd-grid nhsd-grid--debug">
  <div class="nhsd-row">
    <div class="nhsd-col-12 nhsd-u-fw-bold nhsd-u-c-white nhsd-u-bg-dark-grey">Static grid colums</div>
  </div>
  <div class="nhsd-row">
    <div class="nhsd-col-12">12 columns @100% width</div>
  </div>
  <div class="nhsd-row">
    <div class="nhsd-col-3">3 columns @25% width</div>
    <div class="nhsd-col-6">6 columns @50% width</div>
    <div class="nhsd-col-3">3 columns @25% width</div>
  </div>
  <div class="nhsd-row">
    <div class="nhsd-col-2">2 columns @16.7% width</div>
    <div class="nhsd-col-6">6 columns @50% width</div>
    <div class="nhsd-col-4">4 columns @33.3% width</div>
  </div>
</div>`;
  return div;
};
LabComponent.storyName = 'Lab';
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent().innerHTML}`,
    },
  },
};

export const StaticGrid = () => {
  const div = document.createElement('div');
  div.innerHTML = `<div class="nhsd-grid nhsd-grid--debug">
  <div class="nhsd-row">
    <div class="nhsd-col-12 nhsd-u-fw-bold nhsd-u-c-white nhsd-u-bg-dark-grey">1 x 12 COLUMN</div>
  </div>
  <div class="nhsd-row">
    <div class="nhsd-col-12">.nhsd-col-12</div>
  </div>
  <div class="nhsd-row">
    <div class="nhsd-col-12 nhsd-u-fw-bold nhsd-u-c-white nhsd-u-bg-dark-grey">2 x 6 COLUMN</div>
  </div>
  <div class="nhsd-row">
    <div class="nhsd-col-6">.nhsd-col-6</div>
    <div class="nhsd-col-6">.nhsd-col-6</div>
  </div>
  <div class="nhsd-row">
    <div class="nhsd-col-12 nhsd-u-fw-bold nhsd-u-c-white nhsd-u-bg-dark-grey">3 x 4 COLUMN</div>
  </div>
  <div class="nhsd-row">
    <div class="nhsd-col-4">.nhsd-col-4</div>
    <div class="nhsd-col-4">.nhsd-col-4</div>
    <div class="nhsd-col-4">.nhsd-col-4</div>
  </div>
  <div class="nhsd-row">
    <div class="nhsd-col-12 nhsd-u-fw-bold nhsd-u-c-white nhsd-u-bg-dark-grey">4 x 3 COLUMN</div>
  </div>
  <div class="nhsd-row">
    <div class="nhsd-col-3">.nhsd-col-3</div>
    <div class="nhsd-col-3">.nhsd-col-3</div>
    <div class="nhsd-col-3">.nhsd-col-3</div>
    <div class="nhsd-col-3">.nhsd-col-3</div>
  </div>
  <div class="nhsd-row">
    <div class="nhsd-col-12 nhsd-u-fw-bold nhsd-u-c-white nhsd-u-bg-dark-grey">6 x 2 COLUMN</div>
  </div>
  <div class="nhsd-row">
    <div class="nhsd-col-2">.nhsd-col-2</div>
    <div class="nhsd-col-2">.nhsd-col-2</div>
    <div class="nhsd-col-2">.nhsd-col-2</div>
    <div class="nhsd-col-2">.nhsd-col-2</div>
    <div class="nhsd-col-2">.nhsd-col-2</div>
    <div class="nhsd-col-2">.nhsd-col-2</div>
  </div>
  <div class="nhsd-row">
    <div class="nhsd-col-12 nhsd-u-fw-bold nhsd-u-c-white nhsd-u-bg-dark-grey">12 x 1 COLUMN</div>
  </div>
  <div class="nhsd-row">
    <div class="nhsd-col-1">.nhsd-col-1</div>
    <div class="nhsd-col-1">.nhsd-col-1</div>
    <div class="nhsd-col-1">.nhsd-col-1</div>
    <div class="nhsd-col-1">.nhsd-col-1</div>
    <div class="nhsd-col-1">.nhsd-col-1</div>
    <div class="nhsd-col-1">.nhsd-col-1</div>
    <div class="nhsd-col-1">.nhsd-col-1</div>
    <div class="nhsd-col-1">.nhsd-col-1</div>
    <div class="nhsd-col-1">.nhsd-col-1</div>
    <div class="nhsd-col-1">.nhsd-col-1</div>
    <div class="nhsd-col-1">.nhsd-col-1</div>
    <div class="nhsd-col-1">.nhsd-col-1</div>
  </div>
</div>`;
  return div;
};
StaticGrid.storyName = 'Static grid';
StaticGrid.parameters = {
  docs: {
    description: {
      story: `${sbConfig.heading.details}:
- The static grid uses the **12 columns** with **30px gutters** regardless of any active breakpoints.
- This grid should only be used when quick and dirty, static grids are enough to get the job done.
- **Class names:**
  - \`.nhsd-col-1\`
  - \`.nhsd-col-2\`
  - \`.nhsd-col-3\`
  - \`.nhsd-col-4\`
  - \`.nhsd-col-5\`
  - \`.nhsd-col-6\`
  - \`.nhsd-col-7\`
  - \`.nhsd-col-8\`
  - \`.nhsd-col-9\`
  - \`.nhsd-col-10\`
  - \`.nhsd-col-11\`
  - \`.nhsd-col-12\``,
    },
    source: {
      code: `${sourceCode}\n${StaticGrid().innerHTML}`,
    },
  },
};

export const ResponsiveGrid = () => {
  const div = document.createElement('div');
  div.innerHTML = `<div class="nhsd-grid nhsd-grid--debug">
  <div class="nhsd-row">
    <div class="nhsd-col-12 nhsd-u-fw-bold nhsd-u-c-white nhsd-u-bg-dark-grey">Responsive columns - specifically 100% on every breakpoint</div>
  </div>
  <div class="nhsd-row">
    <div class="nhsd-col-xs-2 nhsd-col-s-6 nhsd-col-m-12">.nhsd-col-xs-2.nhsd-col-s-6.nhsd-col-m-12</div>
    <div class="nhsd-col-12">.nhsd-col-12</div>
  </div>
</div>`;
  return div;
};
ResponsiveGrid.storyName = 'Responsive grid';
ResponsiveGrid.parameters = {
  docs: {
    description: {
      story: `${sbConfig.heading.details}:
- The responsive grid uses **12 columns** on desktop (including wide and extrawide) **6 columns** on tablet, and **2 columns** on mobile. The gutter is 30px across the board.
- The order of the responsive column classes applied to a column element doesn't matter
- **Class names:**
  - \`.nhsd-col-xl-1\`, \`.nhsd-col-l-1\`, \`.nhsd-col-m-1\`, \`.nhsd-col-s-1\`, \`.nhsd-col-xs-1\`
  - \`.nhsd-col-xl-2\`, \`.nhsd-col-l-2\`, \`.nhsd-col-m-2\`, \`.nhsd-col-s-2\`, \`.nhsd-col-xs-2\`
  - \`.nhsd-col-xl-3\`, \`.nhsd-col-l-3\`, \`.nhsd-col-m-3\`, \`.nhsd-col-s-3\`
  - \`.nhsd-col-xl-4\`, \`.nhsd-col-l-4\`, \`.nhsd-col-m-4\`, \`.nhsd-col-s-4\`
  - \`.nhsd-col-xl-5\`, \`.nhsd-col-l-5\`, \`.nhsd-col-m-5\`, \`.nhsd-col-s-5\`
  - \`.nhsd-col-xl-6\`, \`.nhsd-col-l-6\`, \`.nhsd-col-m-6\`, \`.nhsd-col-s-6\`
  - \`.nhsd-col-xl-7\`, \`.nhsd-col-l-7\`, \`.nhsd-col-m-7\`
  - \`.nhsd-col-xl-8\`, \`.nhsd-col-l-8\`, \`.nhsd-col-m-8\`
  - \`.nhsd-col-xl-9\`, \`.nhsd-col-l-9\`, \`.nhsd-col-m-9\`
  - \`.nhsd-col-xl-10\`, \`.nhsd-col-l-10\`, \`.nhsd-col-m-10\`
  - \`.nhsd-col-xl-11\`, \`.nhsd-col-l-11\`, \`.nhsd-col-m-11\`
  - \`.nhsd-col-xl-12\`, \`.nhsd-col-l-12\`, \`.nhsd-col-m-12\``,
    },
    source: {
      code: `${sourceCode}\n${ResponsiveGrid().innerHTML}`,
    },
  },
};

export const ResponsiveGrid2 = () => {
  const div = document.createElement('div');
  div.innerHTML = `<div class="nhsd-grid nhsd-grid--debug">
  <div class="nhsd-row">
    <div class="nhsd-col-12 nhsd-u-fw-bold nhsd-u-c-white nhsd-u-bg-dark-grey">Columns only responsive on a specific breakpoint</div>
  </div>
  <div class="nhsd-row">
    <div class="nhsd-col-m-4">.nhsd-col-m-4</div>
    <div class="nhsd-col-s-4">.nhsd-col-s-4</div>
    <div class="nhsd-col-xs-1">.nhsd-col-xs-1</div>
  </div>
  <div class="nhsd-row">
    <div class="nhsd-col-12 nhsd-u-fw-bold nhsd-u-c-white nhsd-u-bg-dark-grey">Columns responsive on all breakpoints</div>
  </div>
  <div class="nhsd-row">
    <div class="nhsd-col-xs-1 nhsd-col-s-1 nhsd-col-m-4">.nhsd-col-xs-1.nhsd-col-s-1.nhsd-col-m-4</div>
    <div class="nhsd-col-xs-1 nhsd-col-s-4 nhsd-col-m-4">.nhsd-col-xs-1.nhsd-col-s-4.nhsd-col-m-4</div>
    <div class="nhsd-col-xs-2 nhsd-col-s-1 nhsd-col-m-4">.nhsd-col-xs-2.nhsd-col-s-1.nhsd-col-m-4</div>
  </div>
  <div class="nhsd-row">
    <div class="nhsd-col-xs-1 nhsd-col-s-5 nhsd-col-m-10">.nhsd-col-xs-1.nhsd-col-s-5.nhsd-col-m-10</div>
    <div class="nhsd-col-xs-1 nhsd-col-s-1 nhsd-col-m-2">.nhsd-col-xs-1.nhsd-col-s-1.nhsd-col-m-2</div>
    <div class="nhsd-col-xs-2 nhsd-col-s-6 nhsd-col-m-12">.nhsd-col-xs-2.nhsd-col-s-6.nhsd-col-m-12</div>
  </div>
</div>`;
  return div;
};
ResponsiveGrid2.storyName = 'Responsive column activation';
ResponsiveGrid2.parameters = {
  docs: {
    description: {
      story: `${sbConfig.heading.details}:
- Responsive columns are 100% wide by default, and only apply the specific responsive width when the appropriate breakpoint is active.`
    },
    source: {
      code: `${sourceCode}\n${ResponsiveGrid2().innerHTML}`,
    },
  },
};

export const FullWidthGrid = () => {
  const div = document.createElement('div');
  div.innerHTML = `<div class="nhsd-grid nhsd-grid--full-width nhsd-grid--debug">
  <div class="nhsd-row">
    <div class="nhsd-col-12 nhsd-u-fw-bold nhsd-u-c-white nhsd-u-bg-dark-grey">Full width grid</div>
  </div>
  <div class="nhsd-row">
    <div class="nhsd-col-xs-2 nhsd-col-s-3 nhsd-col-m-4">.nhsd-col-xs-2.nhsd-col-s-3.nhsd-col-m-4</div>
    <div class="nhsd-col-xs-2 nhsd-col-s-3 nhsd-col-m-4">.nhsd-col-xs-2.nhsd-col-s-3.nhsd-col-m-4</div>
    <div class="nhsd-col-xs-2 nhsd-col-s-6 nhsd-col-m-4">.nhsd-col-xs-2.nhsd-col-s-6.nhsd-col-m-4</div>
  </div>
</div>`;
  return div;
};
FullWidthGrid.storyName = 'Full width grid';
FullWidthGrid.parameters = {
  docs: {
    description: {
      story: `${sbConfig.heading.details}:
- The full width grid always fills **100% width** of its parent container, regardless the active breakpoint.`
    },
    source: {
      code: `${sourceCode}\n${FullWidthGrid().innerHTML}`,
    },
  },
};

export const StaticColumnOffset = () => {
  const div = document.createElement('div');
  div.innerHTML = `<div class="nhsd-grid nhsd-grid--debug">
  <div class="nhsd-row">
    <div class="nhsd-col-12 nhsd-u-fw-bold nhsd-u-c-white nhsd-u-bg-dark-grey">Offset columns</div>
  </div>
  <div class="nhsd-row">
    <div class="nhsd-col-4">.nhsd-col-4</div>
  </div>
  <div class="nhsd-row">
    <div class="nhsd-col-4 nhsd-off-4">.nhsd-col-4.nhsd-off-4</div>
  </div>
  <div class="nhsd-row">
    <div class="nhsd-col-4 nhsd-off-8">.nhsd-col-4.nhsd-off-8</div>
  </div>
</div>`;
  return div;
};
StaticColumnOffset.storyName = 'Static grid column offset';
StaticColumnOffset.parameters = {
  docs: {
    description: {
      story: `${sbConfig.heading.details}:
- **Class names:**
  - \`.nhsd-off-1\`
  - \`.nhsd-off-2\`
  - \`.nhsd-off-3\`
  - \`.nhsd-off-4\`
  - \`.nhsd-off-5\`
  - \`.nhsd-off-6\`
  - \`.nhsd-off-7\`
  - \`.nhsd-off-8\`
  - \`.nhsd-off-9\`
  - \`.nhsd-off-10\`
  - \`.nhsd-off-11\`
  - \`.nhsd-off-12\``,
    },
    source: {
      code: `${sourceCode}\n${StaticColumnOffset().innerHTML}`,
    },
  },
};

export const ResponsiveColumnOffset = () => {
  const div = document.createElement('div');
  div.innerHTML = `<div class="nhsd-grid nhsd-grid--debug">
  <div class="nhsd-row">
    <div class="nhsd-col-12 nhsd-u-fw-bold nhsd-u-c-white nhsd-u-bg-dark-grey">Responsive offset columns</div>
  </div>
  <div class="nhsd-row">
    <div class="nhsd-col-xs-1 nhsd-col-s-2 nhsd-col-m-1 nhsd-off-xs-1 nhsd-off-s-1 nhsd-off-m-6">TST</div>
  </div>
  <div class="nhsd-row">
    <div class="nhsd-col-xs-1 nhsd-col-s-1 nhsd-col-m-3 nhsd-off-xs-0 nhsd-off-s-1 nhsd-off-m-9">TST</div>
  </div>
  <div class="nhsd-row">
    <div class="nhsd-col-xs-1 nhsd-col-s-2 nhsd-col-m-4 nhsd-off-xs-1 nhsd-off-s-4 nhsd-off-m-3">TST</div>
  </div>
  <div class="nhsd-row">
    <div class="nhsd-col-xs-2 nhsd-col-s-4 nhsd-col-m-12 nhsd-off-xs-0 nhsd-off-s-1 nhsd-off-m-0">TST</div>
  </div>
</div>`;
  return div;
};
ResponsiveColumnOffset.storyName = 'Responsive grid column offset';
ResponsiveColumnOffset.parameters = {
  docs: {
    description: {
      story: `${sbConfig.heading.details}:
- **Class names:**
- \`.nhsd-off-xl-0\`, \`.nhsd-off-l-0\`, \`.nhsd-off-m-0\`, \`.nhsd-off-s-0\`, \`.nhsd-off-xs-0\`
- \`.nhsd-off-xl-1\`, \`.nhsd-off-l-1\`, \`.nhsd-off-m-1\`, \`.nhsd-off-s-1\`, \`.nhsd-off-xs-1\`
- \`.nhsd-off-xl-2\`, \`.nhsd-off-l-2\`, \`.nhsd-off-m-2\`, \`.nhsd-off-s-2\`, \`.nhsd-off-xs-2\`
- \`.nhsd-off-xl-3\`, \`.nhsd-off-l-3\`, \`.nhsd-off-m-3\`, \`.nhsd-off-s-3\`
- \`.nhsd-off-xl-4\`, \`.nhsd-off-l-4\`, \`.nhsd-off-m-4\`, \`.nhsd-off-s-4\`
- \`.nhsd-off-xl-5\`, \`.nhsd-off-l-5\`, \`.nhsd-off-m-5\`, \`.nhsd-off-s-5\`
- \`.nhsd-off-xl-6\`, \`.nhsd-off-l-6\`, \`.nhsd-off-m-6\`, \`.nhsd-off-s-6\`
- \`.nhsd-off-xl-7\`, \`.nhsd-off-l-7\`, \`.nhsd-off-m-7\`
- \`.nhsd-off-xl-8\`, \`.nhsd-off-l-8\`, \`.nhsd-off-m-8\`
- \`.nhsd-off-xl-9\`, \`.nhsd-off-l-9\`, \`.nhsd-off-m-9\`
- \`.nhsd-off-xl-10\`, \`.nhsd-off-l-10\`, \`.nhsd-off-m-10\`
- \`.nhsd-off-xl-11\`, \`.nhsd-off-l-11\`, \`.nhsd-off-m-11\`
- \`.nhsd-off-xl-12\`, \`.nhsd-off-l-12\`, \`.nhsd-off-m-12\``,
  },
    source: {
      code: `${sourceCode}\n${ResponsiveColumnOffset().innerHTML}`,
    },
  },
};

export const NoGutterGrid = () => {
  const div = document.createElement('div');
  div.innerHTML = `<div class="nhsd-grid nhsd-grid--debug nhsd-u-no-gutters">
  <div class="nhsd-row">
    <div class="nhsd-col-12 nhsd-u-fw-bold nhsd-u-c-white nhsd-u-bg-dark-grey">Look mum, no gutters!</div>
  </div>
  <div class="nhsd-row">
    <div class="nhsd-col-4 nhsd-u-no-gutters">.nhsd-col-4.nhsd-u-no-gutters</div>
    <div class="nhsd-col-4 nhsd-u-no-gutters">.nhsd-col-4.nhsd-u-no-gutters</div>
    <div class="nhsd-col-4 nhsd-u-no-gutters">.nhsd-col-4.nhsd-u-no-gutters</div>
  </div>
</div>`;
  return div;
};
NoGutterGrid.storyName = 'Gutterless grid and columns';
NoGutterGrid.parameters = {
  docs: {
    description: {
      story: `${sbConfig.heading.details}:
- Using the \`.nhsd-u-no-gutters\` utility class you can remove the left and right gutters from any container - incuding the grid, and individual columns.`
    },
    source: {
      code: `${sourceCode}\n${NoGutterGrid().innerHTML}`,
    },
  },
};

