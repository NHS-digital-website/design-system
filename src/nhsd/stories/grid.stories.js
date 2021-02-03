// Load storybook config
import * as sbConfig from '../../../.storybook/storybook-config';

// Load stylesheet file
require('../scss-core/tokens/_grid.scss');
require('../components/atoms/text-highlight/_index.scss');

const componentName = 'Grid system';
const storyDescription = `${sbConfig.heading.lab}
- The grid system uses **Flexbox** to create **"container > row > column"** style layouts.

### Breakpoints
|Device type|Shorthand|Min. width|Max. width|Max. content width|Columns|Gutter|
|---|---|---|---|---|---|---|---|
|Mobile|**XS**|0|768px|355px|12|20px|
|Tablet|**S**|769px|1024px|688px|12|30px|
|Desktop|**M**|1025px|1366px|944px|12|30px|
|Wide|**L**|1367px|1579px|1240px|12|30px|
|Extra Wide|**XL**|1580px|∞|1500px|12|30px|

- **Note:** The <span class="nhsd-!t-bg-green">&nbsp;&nbsp;&nbsp;&nbsp;</span> and <span class="nhsd-!t-bg-red">&nbsp;&nbsp;&nbsp;&nbsp;</span> mobile columns represent the slightly tweaked gutters on the mobile breakpoint.`;
const sourceCode = `// Sass import \n@use "nhsd/scss-core/tokens/grid";\n\n//HTML`;

// Component defaults
export default {
  title: `${sbConfig.title.designSystem} / ${sbConfig.title.tokens} / ${sbConfig.title.gridSystem}`,
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
  div.innerHTML = `<div class="nhsd-t-grid nhsd-t-grid--debug">
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-12 nhsd-!t-font-weight-bold nhsd-!t-col-white nhsd-!t-bg-dark-grey">Static grid colums</div>
  </div>
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-12">12 columns @100% width</div>
  </div>
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-3">3 columns @25% width</div>
    <div class="nhsd-t-col-6">6 columns @50% width</div>
    <div class="nhsd-t-col-3">3 columns @25% width</div>
  </div>
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-2">2 columns @16.7% width</div>
    <div class="nhsd-t-col-6">6 columns @50% width</div>
    <div class="nhsd-t-col-4">4 columns @33.3% width</div>
  </div>
</div>`;
  return div;
};
LabComponent.storyName = sbConfig.title.lab;
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent().innerHTML}`,
    },
  },
};

export const StaticGrid = () => {
  const div = document.createElement('div');
  div.innerHTML = `<div class="nhsd-t-grid nhsd-t-grid--debug">
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-12 nhsd-!t-font-weight-bold nhsd-!t-col-white nhsd-!t-bg-dark-grey">1 x 12 COLUMN</div>
  </div>
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-12">.nhsd-t-col-12</div>
  </div>
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-12 nhsd-!t-font-weight-bold nhsd-!t-col-white nhsd-!t-bg-dark-grey">2 x 6 COLUMN</div>
  </div>
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-6">.nhsd-t-col-6</div>
    <div class="nhsd-t-col-6">.nhsd-t-col-6</div>
  </div>
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-12 nhsd-!t-font-weight-bold nhsd-!t-col-white nhsd-!t-bg-dark-grey">3 x 4 COLUMN</div>
  </div>
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-4">.nhsd-t-col-4</div>
    <div class="nhsd-t-col-4">.nhsd-t-col-4</div>
    <div class="nhsd-t-col-4">.nhsd-t-col-4</div>
  </div>
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-12 nhsd-!t-font-weight-bold nhsd-!t-col-white nhsd-!t-bg-dark-grey">4 x 3 COLUMN</div>
  </div>
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-3">.nhsd-t-col-3</div>
    <div class="nhsd-t-col-3">.nhsd-t-col-3</div>
    <div class="nhsd-t-col-3">.nhsd-t-col-3</div>
    <div class="nhsd-t-col-3">.nhsd-t-col-3</div>
  </div>
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-12 nhsd-!t-font-weight-bold nhsd-!t-col-white nhsd-!t-bg-dark-grey">6 x 2 COLUMN</div>
  </div>
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-2">.nhsd-t-col-2</div>
    <div class="nhsd-t-col-2">.nhsd-t-col-2</div>
    <div class="nhsd-t-col-2">.nhsd-t-col-2</div>
    <div class="nhsd-t-col-2">.nhsd-t-col-2</div>
    <div class="nhsd-t-col-2">.nhsd-t-col-2</div>
    <div class="nhsd-t-col-2">.nhsd-t-col-2</div>
  </div>
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-12 nhsd-!t-font-weight-bold nhsd-!t-col-white nhsd-!t-bg-dark-grey">12 x 1 COLUMN</div>
  </div>
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-1">.nhsd-t-col-1</div>
    <div class="nhsd-t-col-1">.nhsd-t-col-1</div>
    <div class="nhsd-t-col-1">.nhsd-t-col-1</div>
    <div class="nhsd-t-col-1">.nhsd-t-col-1</div>
    <div class="nhsd-t-col-1">.nhsd-t-col-1</div>
    <div class="nhsd-t-col-1">.nhsd-t-col-1</div>
    <div class="nhsd-t-col-1">.nhsd-t-col-1</div>
    <div class="nhsd-t-col-1">.nhsd-t-col-1</div>
    <div class="nhsd-t-col-1">.nhsd-t-col-1</div>
    <div class="nhsd-t-col-1">.nhsd-t-col-1</div>
    <div class="nhsd-t-col-1">.nhsd-t-col-1</div>
    <div class="nhsd-t-col-1">.nhsd-t-col-1</div>
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
  - \`.nhsd-t-col-1\`
  - \`.nhsd-t-col-2\`
  - \`.nhsd-t-col-3\`
  - \`.nhsd-t-col-4\`
  - \`.nhsd-t-col-5\`
  - \`.nhsd-t-col-6\`
  - \`.nhsd-t-col-7\`
  - \`.nhsd-t-col-8\`
  - \`.nhsd-t-col-9\`
  - \`.nhsd-t-col-10\`
  - \`.nhsd-t-col-11\`
  - \`.nhsd-t-col-12\``,
    },
    source: {
      code: `${sourceCode}\n${StaticGrid().innerHTML}`,
    },
  },
};

export const ResponsiveGrid = () => {
  const div = document.createElement('div');
  div.innerHTML = `<div class="nhsd-t-grid nhsd-t-grid--debug">
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-12 nhsd-!t-font-weight-bold nhsd-!t-col-white nhsd-!t-bg-dark-grey">Responsive columns - specifically 100% on every breakpoint</div>
  </div>
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-xs-12 nhsd-t-col-s-12 nhsd-t-col-m-12">.nhsd-t-col-xs-12.nhsd-t-col-s-12.nhsd-t-col-m-12</div>
    <div class="nhsd-t-col-12">.nhsd-t-col-12</div>
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
  - \`.nhsd-t-col-xl-1\`, \`.nhsd-t-col-l-1\`, \`.nhsd-t-col-m-1\`, \`.nhsd-t-col-s-1\`, \`.nhsd-t-col-xs-1\`
  - \`.nhsd-t-col-xl-2\`, \`.nhsd-t-col-l-2\`, \`.nhsd-t-col-m-2\`, \`.nhsd-t-col-s-2\`, \`.nhsd-t-col-xs-2\`
  - \`.nhsd-t-col-xl-3\`, \`.nhsd-t-col-l-3\`, \`.nhsd-t-col-m-3\`, \`.nhsd-t-col-s-3\`, \`.nhsd-t-col-xs-3\`
  - \`.nhsd-t-col-xl-4\`, \`.nhsd-t-col-l-4\`, \`.nhsd-t-col-m-4\`, \`.nhsd-t-col-s-8\`, \`.nhsd-t-col-xs-4\`
  - \`.nhsd-t-col-xl-5\`, \`.nhsd-t-col-l-5\`, \`.nhsd-t-col-m-5\`, \`.nhsd-t-col-s-5\`, \`.nhsd-t-col-xs-5\`
  - \`.nhsd-t-col-xl-6\`, \`.nhsd-t-col-l-6\`, \`.nhsd-t-col-m-6\`, \`.nhsd-t-col-s-6\`, \`.nhsd-t-col-xs-6\`
  - \`.nhsd-t-col-xl-7\`, \`.nhsd-t-col-l-7\`, \`.nhsd-t-col-m-7\`, \`.nhsd-t-col-s-7\`, \`.nhsd-t-col-xs-7\`
  - \`.nhsd-t-col-xl-8\`, \`.nhsd-t-col-l-8\`, \`.nhsd-t-col-m-8\`, \`.nhsd-t-col-s-8\`, \`.nhsd-t-col-xs-8\`
  - \`.nhsd-t-col-xl-9\`, \`.nhsd-t-col-l-9\`, \`.nhsd-t-col-m-9\`, \`.nhsd-t-col-s-9\`, \`.nhsd-t-col-xs-9\`
  - \`.nhsd-t-col-xl-10\`, \`.nhsd-t-col-l-10\`, \`.nhsd-t-col-m-10\`, \`.nhsd-t-col-s-10\`, \`.nhsd-t-col-xs-10\`
  - \`.nhsd-t-col-xl-11\`, \`.nhsd-t-col-l-11\`, \`.nhsd-t-col-m-11\`, \`.nhsd-t-col-s-11\`, \`.nhsd-t-col-xs-11\`
  - \`.nhsd-t-col-xl-12\`, \`.nhsd-t-col-l-12\`, \`.nhsd-t-col-m-12\`, \`.nhsd-t-col-s-12\`, \`.nhsd-t-col-xs-12\``,
    },
    source: {
      code: `${sourceCode}\n${ResponsiveGrid().innerHTML}`,
    },
  },
};

export const ResponsiveGrid2 = () => {
  const div = document.createElement('div');
  div.innerHTML = `<div class="nhsd-t-grid nhsd-t-grid--debug">
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-12 nhsd-!t-font-weight-bold nhsd-!t-col-white nhsd-!t-bg-dark-grey">Columns only responsive on a specific breakpoint</div>
  </div>
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-m-4">.nhsd-t-col-m-4</div>
    <div class="nhsd-t-col-s-8">.nhsd-t-col-s-8</div>
    <div class="nhsd-t-col-xs-6">.nhsd-t-col-xs-6</div>
  </div>
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-12 nhsd-!t-font-weight-bold nhsd-!t-col-white nhsd-!t-bg-dark-grey">Columns responsive on all breakpoints</div>
  </div>
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-xs-6 nhsd-t-col-s-2 nhsd-t-col-m-4">.nhsd-t-col-xs-6.nhsd-t-col-s-2.nhsd-t-col-m-4</div>
    <div class="nhsd-t-col-xs-6 nhsd-t-col-s-8 nhsd-t-col-m-4">.nhsd-t-col-xs-6.nhsd-t-col-s-8.nhsd-t-col-m-4</div>
    <div class="nhsd-t-col-xs-12 nhsd-t-col-s-2 nhsd-t-col-m-4">.nhsd-t-col-xs-12.nhsd-t-col-s-2.nhsd-t-col-m-4</div>
  </div>
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-xs-6 nhsd-t-col-s-10 nhsd-t-col-m-10">.nhsd-t-col-xs-6.nhsd-t-col-s-5.nhsd-t-col-m-10</div>
    <div class="nhsd-t-col-xs-6 nhsd-t-col-s-2 nhsd-t-col-m-2">.nhsd-t-col-xs-6.nhsd-t-col-s-6.nhsd-t-col-m-2</div>
    <div class="nhsd-t-col-xs-12 nhsd-t-col-s-12 nhsd-t-col-m-12">.nhsd-t-col-xs-12.nhsd-t-col-s-12.nhsd-t-col-m-12</div>
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
  div.innerHTML = `<div class="nhsd-t-grid nhsd-t-grid--full-width nhsd-t-grid--debug">
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-12 nhsd-!t-font-weight-bold nhsd-!t-col-white nhsd-!t-bg-dark-grey">Full width grid</div>
  </div>
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-xs-12 nhsd-t-col-s-6 nhsd-t-col-m-4">.nhsd-t-col-xs-12.nhsd-t-col-s-6.nhsd-t-col-m-4</div>
    <div class="nhsd-t-col-xs-12 nhsd-t-col-s-6 nhsd-t-col-m-4">.nhsd-t-col-xs-12.nhsd-t-col-s-6.nhsd-t-col-m-4</div>
    <div class="nhsd-t-col-xs-12 nhsd-t-col-s-12 nhsd-t-col-m-4">.nhsd-t-col-xs-12.nhsd-t-col-s-12.nhsd-t-col-m-4</div>
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
  div.innerHTML = `<div class="nhsd-t-grid nhsd-t-grid--debug">
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-12 nhsd-!t-font-weight-bold nhsd-!t-col-white nhsd-!t-bg-dark-grey">Offset columns</div>
  </div>
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-4">.nhsd-t-col-4</div>
  </div>
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-4 nhsd-t-off-4">.nhsd-t-col-4.nhsd-t-off-4</div>
  </div>
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-4 nhsd-t-off-8">.nhsd-t-col-4.nhsd-t-off-8</div>
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
  - \`.nhsd-t-off-1\`
  - \`.nhsd-t-off-2\`
  - \`.nhsd-t-off-3\`
  - \`.nhsd-t-off-4\`
  - \`.nhsd-t-off-5\`
  - \`.nhsd-t-off-6\`
  - \`.nhsd-t-off-7\`
  - \`.nhsd-t-off-8\`
  - \`.nhsd-t-off-9\`
  - \`.nhsd-t-off-10\`
  - \`.nhsd-t-off-11\`
  - \`.nhsd-t-off-12\``,
    },
    source: {
      code: `${sourceCode}\n${StaticColumnOffset().innerHTML}`,
    },
  },
};

export const ResponsiveColumnOffset = () => {
  const div = document.createElement('div');
  div.innerHTML = `<div class="nhsd-t-grid nhsd-t-grid--debug">
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-12 nhsd-!t-font-weight-bold nhsd-!t-col-white nhsd-!t-bg-dark-grey">Responsive offset columns</div>
  </div>
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-xs-6 nhsd-t-col-s-4 nhsd-t-col-m-1 nhsd-t-off-xs-6 nhsd-t-off-s-2 nhsd-t-off-m-6">.nhsd-t-off-xs-6.nhsd-t-off-s-2.nhsd-t-off-m-6</div>
  </div>
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-xs-6 nhsd-t-col-s-2 nhsd-t-col-m-3 nhsd-t-off-xs-0 nhsd-t-off-s-2 nhsd-t-off-m-9">.nhsd-t-off-xs-0.nhsd-t-off-s-2.nhsd-t-off-m-9</div>
  </div>
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-xs-6 nhsd-t-col-s-8 nhsd-t-col-m-4 nhsd-t-off-xs-6 nhsd-t-off-s-8 nhsd-t-off-m-3">.nhsd-t-off-xs-6.nhsd-t-off-s-8.nhsd-t-off-m-3</div>
  </div>
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-xs-12 nhsd-t-col-s-8 nhsd-t-col-m-12">.nhsd-t-off-xs-0.nhsd-t-off-s-2.nhsd-t-off-m-0</div>
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
- \`.nhsd-t-off-xl-0\`, \`.nhsd-t-off-l-0\`, \`.nhsd-t-off-m-0\`, \`.nhsd-t-off-s-0\`, \`.nhsd-t-off-xs-0\`
- \`.nhsd-t-off-xl-1\`, \`.nhsd-t-off-l-1\`, \`.nhsd-t-off-m-1\`, \`.nhsd-t-off-s-1\`, \`.nhsd-t-off-xs-1\`
- \`.nhsd-t-off-xl-2\`, \`.nhsd-t-off-l-2\`, \`.nhsd-t-off-m-2\`, \`.nhsd-t-off-s-2\`, \`.nhsd-t-off-xs-2\`
- \`.nhsd-t-off-xl-3\`, \`.nhsd-t-off-l-3\`, \`.nhsd-t-off-m-3\`, \`.nhsd-t-off-s-3\`, \`.nhsd-t-off-xs-3\`
- \`.nhsd-t-off-xl-4\`, \`.nhsd-t-off-l-4\`, \`.nhsd-t-off-m-4\`, \`.nhsd-t-off-s-4\`, \`.nhsd-t-off-xs-4\`
- \`.nhsd-t-off-xl-5\`, \`.nhsd-t-off-l-5\`, \`.nhsd-t-off-m-5\`, \`.nhsd-t-off-s-5\`, \`.nhsd-t-off-xs-5\`
- \`.nhsd-t-off-xl-6\`, \`.nhsd-t-off-l-6\`, \`.nhsd-t-off-m-6\`, \`.nhsd-t-off-s-6\`, \`.nhsd-t-off-xs-6\`
- \`.nhsd-t-off-xl-7\`, \`.nhsd-t-off-l-7\`, \`.nhsd-t-off-m-7\`, \`.nhsd-t-off-s-7\`, \`.nhsd-t-off-xs-7\`
- \`.nhsd-t-off-xl-8\`, \`.nhsd-t-off-l-8\`, \`.nhsd-t-off-m-8\`, \`.nhsd-t-off-s-8\`, \`.nhsd-t-off-xs-8\`
- \`.nhsd-t-off-xl-9\`, \`.nhsd-t-off-l-9\`, \`.nhsd-t-off-m-9\`, \`.nhsd-t-off-s-9\`, \`.nhsd-t-off-xs-9\`
- \`.nhsd-t-off-xl-10\`, \`.nhsd-t-off-l-10\`, \`.nhsd-t-off-m-10\`, \`.nhsd-t-off-s-10\`, \`.nhsd-t-off-xs-10\`
- \`.nhsd-t-off-xl-11\`, \`.nhsd-t-off-l-11\`, \`.nhsd-t-off-m-11\`, \`.nhsd-t-off-s-11\`, \`.nhsd-t-off-xs-11\`
- \`.nhsd-t-off-xl-12\`, \`.nhsd-t-off-l-12\`, \`.nhsd-t-off-m-12\`, \`.nhsd-t-off-s-12\`, \`.nhsd-t-off-xs-12\``,
  },
    source: {
      code: `${sourceCode}\n${ResponsiveColumnOffset().innerHTML}`,
    },
  },
};

export const NoGutterGrid = () => {
  const div = document.createElement('div');
  div.innerHTML = `<div class="nhsd-t-grid nhsd-t-grid--debug nhsd-!t-no-gutters">
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-12 nhsd-!t-font-weight-bold nhsd-!t-col-white nhsd-!t-bg-dark-grey">Look mum, no gutters!</div>
  </div>
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-4 nhsd-!t-no-gutters">.nhsd-t-col-4.nhsd-!t-no-gutters</div>
    <div class="nhsd-t-col-4 nhsd-!t-no-gutters">.nhsd-t-col-4.nhsd-!t-no-gutters</div>
    <div class="nhsd-t-col-4 nhsd-!t-no-gutters">.nhsd-t-col-4.nhsd-!t-no-gutters</div>
  </div>
</div>`;
  return div;
};
NoGutterGrid.storyName = 'Gutterless grid and columns';
NoGutterGrid.parameters = {
  docs: {
    description: {
      story: `${sbConfig.heading.details}:
- Using the \`.nhsd-!t-no-gutters\` token classes you can remove the left and right gutters from any container - incuding the grid, and individual columns.`
    },
    source: {
      code: `${sourceCode}\n${NoGutterGrid().innerHTML}`,
    },
  },
};

