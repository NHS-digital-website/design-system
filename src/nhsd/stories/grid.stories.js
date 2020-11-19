// Load storybook config
import * as sbConfig from '../../../.storybook/storybook-config.js';

// Load stylesheet file
require('../scss-core/base/_grid.scss');
require('../components/atoms/text-highlight/_index.scss');

const componentName = 'Grid system';
const storyDescription = `${sbConfig.heading.lab}
- The grid system uses **Flexbox** to create **"container > row > column"** style layouts.

### Breakpoints
|Device type|Min. width|Max. width|Max. content width|Columns|Gutter|
|---|---|---|---|---|---|---|
|Mobile|0|768px|355px|2|30px|
|Tablet|769px|1024px|688px|6|30px|
|Desktop|1025px|1366px|944px|12|30px|
|HD|1367px|1579px|1240px|12|30px|
|Full HD|1580px|∞|1500px|12|30px|

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
  <div class="nhsd-grid-row">
    <div class="nhsd-grid-col-12 nhsd-u-fw-bold nhsd-u-c-white nhsd-u-bg-dark-grey">Static grid colums</div>
  </div>
  <div class="nhsd-grid-row">
    <div class="nhsd-grid-col-12">12 columns @100% width</div>
  </div>
  <div class="nhsd-grid-row">
    <div class="nhsd-grid-col-3">3 columns @25% width</div>
    <div class="nhsd-grid-col-6">6 columns @50% width</div>
    <div class="nhsd-grid-col-3">3 columns @25% width</div>
  </div>
  <div class="nhsd-grid-row">
    <div class="nhsd-grid-col-2">2 columns @16.7% width</div>
    <div class="nhsd-grid-col-6">6 columns @50% width</div>
    <div class="nhsd-grid-col-4">4 columns @33.3% width</div>
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
  <div class="nhsd-grid-row">
    <div class="nhsd-grid-col-12 nhsd-u-fw-bold nhsd-u-c-white nhsd-u-bg-dark-grey">1 x 12 COLUMN</div>
  </div>
  <div class="nhsd-grid-row">
    <div class="nhsd-grid-col-12">.nhsd-grid-col-12</div>
  </div>
  <div class="nhsd-grid-row">
    <div class="nhsd-grid-col-12 nhsd-u-fw-bold nhsd-u-c-white nhsd-u-bg-dark-grey">2 x 6 COLUMN</div>
  </div>
  <div class="nhsd-grid-row">
    <div class="nhsd-grid-col-6">.nhsd-grid-col-6</div>
    <div class="nhsd-grid-col-6">.nhsd-grid-col-6</div>
  </div>
  <div class="nhsd-grid-row">
    <div class="nhsd-grid-col-12 nhsd-u-fw-bold nhsd-u-c-white nhsd-u-bg-dark-grey">3 x 4 COLUMN</div>
  </div>
  <div class="nhsd-grid-row">
    <div class="nhsd-grid-col-4">.nhsd-grid-col-4</div>
    <div class="nhsd-grid-col-4">.nhsd-grid-col-4</div>
    <div class="nhsd-grid-col-4">.nhsd-grid-col-4</div>
  </div>
  <div class="nhsd-grid-row">
    <div class="nhsd-grid-col-12 nhsd-u-fw-bold nhsd-u-c-white nhsd-u-bg-dark-grey">4 x 3 COLUMN</div>
  </div>
  <div class="nhsd-grid-row">
    <div class="nhsd-grid-col-3">.nhsd-grid-col-3</div>
    <div class="nhsd-grid-col-3">.nhsd-grid-col-3</div>
    <div class="nhsd-grid-col-3">.nhsd-grid-col-3</div>
    <div class="nhsd-grid-col-3">.nhsd-grid-col-3</div>
  </div>
  <div class="nhsd-grid-row">
    <div class="nhsd-grid-col-12 nhsd-u-fw-bold nhsd-u-c-white nhsd-u-bg-dark-grey">6 x 2 COLUMN</div>
  </div>
  <div class="nhsd-grid-row">
    <div class="nhsd-grid-col-2">.nhsd-grid-col-2</div>
    <div class="nhsd-grid-col-2">.nhsd-grid-col-2</div>
    <div class="nhsd-grid-col-2">.nhsd-grid-col-2</div>
    <div class="nhsd-grid-col-2">.nhsd-grid-col-2</div>
    <div class="nhsd-grid-col-2">.nhsd-grid-col-2</div>
    <div class="nhsd-grid-col-2">.nhsd-grid-col-2</div>
  </div>
  <div class="nhsd-grid-row">
    <div class="nhsd-grid-col-12 nhsd-u-fw-bold nhsd-u-c-white nhsd-u-bg-dark-grey">12 x 1 COLUMN</div>
  </div>
  <div class="nhsd-grid-row">
    <div class="nhsd-grid-col-1">.nhsd-grid-col-1</div>
    <div class="nhsd-grid-col-1">.nhsd-grid-col-1</div>
    <div class="nhsd-grid-col-1">.nhsd-grid-col-1</div>
    <div class="nhsd-grid-col-1">.nhsd-grid-col-1</div>
    <div class="nhsd-grid-col-1">.nhsd-grid-col-1</div>
    <div class="nhsd-grid-col-1">.nhsd-grid-col-1</div>
    <div class="nhsd-grid-col-1">.nhsd-grid-col-1</div>
    <div class="nhsd-grid-col-1">.nhsd-grid-col-1</div>
    <div class="nhsd-grid-col-1">.nhsd-grid-col-1</div>
    <div class="nhsd-grid-col-1">.nhsd-grid-col-1</div>
    <div class="nhsd-grid-col-1">.nhsd-grid-col-1</div>
    <div class="nhsd-grid-col-1">.nhsd-grid-col-1</div>
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
  - \`.nhsd-grid-col-1\`
  - \`.nhsd-grid-col-2\`
  - \`.nhsd-grid-col-3\`
  - \`.nhsd-grid-col-4\`
  - \`.nhsd-grid-col-5\`
  - \`.nhsd-grid-col-6\`
  - \`.nhsd-grid-col-7\`
  - \`.nhsd-grid-col-8\`
  - \`.nhsd-grid-col-9\`
  - \`.nhsd-grid-col-10\`
  - \`.nhsd-grid-col-11\`
  - \`.nhsd-grid-col-12\``,
    },
    source: {
      code: `${sourceCode}\n${StaticGrid().innerHTML}`,
    },
  },
};

export const ResponsiveGrid = () => {
  const div = document.createElement('div');
  div.innerHTML = `<div class="nhsd-grid nhsd-grid--debug">
  <div class="nhsd-grid-row">
    <div class="nhsd-grid-col-12 nhsd-u-fw-bold nhsd-u-c-white nhsd-u-bg-dark-grey">Responsive columns - specifically 100% on every breakpoint</div>
  </div>
  <div class="nhsd-grid-row">
    <div class="nhsd-grid-col-mob-2 nhsd-grid-col-tab-6 nhsd-grid-col-des-12">.nhsd-grid-col-mob-2.nhsd-grid-col-tab-6.nhsd-grid-col-des-12</div>
    <div class="nhsd-grid-col-12">.nhsd-grid-col-12</div>
  </div>
</div>`;
  return div;
};
ResponsiveGrid.storyName = 'Responsive grid';
ResponsiveGrid.parameters = {
  docs: {
    description: {
      story: `${sbConfig.heading.details}:
- The responsive grid uses **12 columns** on desktop **6 columns** on tabletm and **2 columns** on mobile. The gutter is 30px across the board.
- The order of the responsive column classes apploed to a column element doesn't matter
- **Class names:**
  - \`.nhsd-grid-col-des-1\`, \`.nhsd-grid-col-tab-1\`, \`.nhsd-grid-col-mob-1\`
  - \`.nhsd-grid-col-des-2\`, \`.nhsd-grid-col-tab-2\`, \`.nhsd-grid-col-mob-2\`
  - \`.nhsd-grid-col-des-3\`, \`.nhsd-grid-col-tab-3\`
  - \`.nhsd-grid-col-des-4\`, \`.nhsd-grid-col-tab-4\`
  - \`.nhsd-grid-col-des-5\`, \`.nhsd-grid-col-tab-5\`
  - \`.nhsd-grid-col-des-6\`, \`.nhsd-grid-col-tab-6\`
  - \`.nhsd-grid-col-des-7\`
  - \`.nhsd-grid-col-des-8\`
  - \`.nhsd-grid-col-des-9\`
  - \`.nhsd-grid-col-des-10\`
  - \`.nhsd-grid-col-des-11\`
  - \`.nhsd-grid-col-des-12\``,
    },
    source: {
      code: `${sourceCode}\n${ResponsiveGrid().innerHTML}`,
    },
  },
};

export const ResponsiveGrid2 = () => {
  const div = document.createElement('div');
  div.innerHTML = `<div class="nhsd-grid nhsd-grid--debug">
  <div class="nhsd-grid-row">
    <div class="nhsd-grid-col-12 nhsd-u-fw-bold nhsd-u-c-white nhsd-u-bg-dark-grey">Columns only responsive on a specific breakpoint</div>
  </div>
  <div class="nhsd-grid-row">
    <div class="nhsd-grid-col-des-4">.nhsd-grid-col-des-4</div>
    <div class="nhsd-grid-col-tab-4">.nhsd-grid-col-tab-4</div>
    <div class="nhsd-grid-col-mob-1">.nhsd-grid-col-mob-1</div>
  </div>
  <div class="nhsd-grid-row">
    <div class="nhsd-grid-col-12 nhsd-u-fw-bold nhsd-u-c-white nhsd-u-bg-dark-grey">Columns responsive on all breakpoints</div>
  </div>
  <div class="nhsd-grid-row">
    <div class="nhsd-grid-col-mob-1 nhsd-grid-col-tab-1 nhsd-grid-col-des-4">.nhsd-grid-col-mob-1.nhsd-grid-col-tab-1.nhsd-grid-col-des-4</div>
    <div class="nhsd-grid-col-mob-1 nhsd-grid-col-tab-4 nhsd-grid-col-des-4">.nhsd-grid-col-mob-1.nhsd-grid-col-tab-4.nhsd-grid-col-des-4</div>
    <div class="nhsd-grid-col-mob-2 nhsd-grid-col-tab-1 nhsd-grid-col-des-4">.nhsd-grid-col-mob-2.nhsd-grid-col-tab-1.nhsd-grid-col-des-4</div>
  </div>
  <div class="nhsd-grid-row">
    <div class="nhsd-grid-col-mob-1 nhsd-grid-col-tab-5 nhsd-grid-col-des-10">.nhsd-grid-col-mob-1.nhsd-grid-col-tab-5.nhsd-grid-col-des-10</div>
    <div class="nhsd-grid-col-mob-1 nhsd-grid-col-tab-1 nhsd-grid-col-des-2">.nhsd-grid-col-mob-1.nhsd-grid-col-tab-1.nhsd-grid-col-des-2</div>
    <div class="nhsd-grid-col-mob-2 nhsd-grid-col-tab-6 nhsd-grid-col-des-12">.nhsd-grid-col-mob-2.nhsd-grid-col-tab-6.nhsd-grid-col-des-12</div>
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
  <div class="nhsd-grid-row">
    <div class="nhsd-grid-col-12 nhsd-u-fw-bold nhsd-u-c-white nhsd-u-bg-dark-grey">Full width grid</div>
  </div>
  <div class="nhsd-grid-row">
    <div class="nhsd-grid-col-mob-2 nhsd-grid-col-tab-3 nhsd-grid-col-des-4">.nhsd-grid-col-mob-2.nhsd-grid-col-tab-3.nhsd-grid-col-des-4</div>
    <div class="nhsd-grid-col-mob-2 nhsd-grid-col-tab-3 nhsd-grid-col-des-4">.nhsd-grid-col-mob-2.nhsd-grid-col-tab-3.nhsd-grid-col-des-4</div>
    <div class="nhsd-grid-col-mob-2 nhsd-grid-col-tab-6 nhsd-grid-col-des-4">.nhsd-grid-col-mob-2.nhsd-grid-col-tab-6.nhsd-grid-col-des-4</div>
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
  <div class="nhsd-grid-row">
    <div class="nhsd-grid-col-12 nhsd-u-fw-bold nhsd-u-c-white nhsd-u-bg-dark-grey">Offset columns</div>
  </div>
  <div class="nhsd-grid-row">
    <div class="nhsd-grid-col-4">.nhsd-grid-col-4</div>
  </div>
  <div class="nhsd-grid-row">
    <div class="nhsd-grid-col-4 nhsd-grid-off-4">.nhsd-grid-col-4.nhsd-grid-off-4</div>
  </div>
  <div class="nhsd-grid-row">
    <div class="nhsd-grid-col-4 nhsd-grid-off-8">.nhsd-grid-col-4.nhsd-grid-off-8</div>
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
  - \`.nhsd-grid-off-1\`
  - \`.nhsd-grid-off-2\`
  - \`.nhsd-grid-off-3\`
  - \`.nhsd-grid-off-4\`
  - \`.nhsd-grid-off-5\`
  - \`.nhsd-grid-off-6\`
  - \`.nhsd-grid-off-7\`
  - \`.nhsd-grid-off-8\`
  - \`.nhsd-grid-off-9\`
  - \`.nhsd-grid-off-10\`
  - \`.nhsd-grid-off-11\`
  - \`.nhsd-grid-off-12\``,
    },
    source: {
      code: `${sourceCode}\n${StaticColumnOffset().innerHTML}`,
    },
  },
};

export const ResponsiveColumnOffset = () => {
  const div = document.createElement('div');
  div.innerHTML = `<div class="nhsd-grid nhsd-grid--debug">
  <div class="nhsd-grid-row">
    <div class="nhsd-grid-col-12 nhsd-u-fw-bold nhsd-u-c-white nhsd-u-bg-dark-grey">Responsive offset columns</div>
  </div>
  <div class="nhsd-grid-row">
    <div class="nhsd-grid-col-mob-1 nhsd-grid-col-tab-2 nhsd-grid-col-des-1 nhsd-grid-off-mob-1 nhsd-grid-off-tab-1 nhsd-grid-off-des-6">TST</div>
  </div>
  <div class="nhsd-grid-row">
    <div class="nhsd-grid-col-mob-1 nhsd-grid-col-tab-1 nhsd-grid-col-des-3 nhsd-grid-off-mob-0 nhsd-grid-off-tab-1 nhsd-grid-off-des-9">TST</div>
  </div>
  <div class="nhsd-grid-row">
    <div class="nhsd-grid-col-mob-1 nhsd-grid-col-tab-2 nhsd-grid-col-des-4 nhsd-grid-off-mob-1 nhsd-grid-off-tab-4 nhsd-grid-off-des-3">TST</div>
  </div>
  <div class="nhsd-grid-row">
    <div class="nhsd-grid-col-mob-2 nhsd-grid-col-tab-4 nhsd-grid-col-des-12 nhsd-grid-off-mob-0 nhsd-grid-off-tab-1 nhsd-grid-off-des-0">TST</div>
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
- \`.nhsd-grid-off-des-0\`, \`.nhsd-grid-off-tab-0\`, \`.nhsd-grid-off-mob-0\`
- \`.nhsd-grid-off-des-1\`, \`.nhsd-grid-off-tab-1\`, \`.nhsd-grid-off-mob-1\`
- \`.nhsd-grid-off-des-2\`, \`.nhsd-grid-off-tab-2\`, \`.nhsd-grid-off-mob-2\`
- \`.nhsd-grid-off-des-3\`, \`.nhsd-grid-off-tab-3\`
- \`.nhsd-grid-off-des-4\`, \`.nhsd-grid-off-tab-4\`
- \`.nhsd-grid-off-des-5\`, \`.nhsd-grid-off-tab-5\`
- \`.nhsd-grid-off-des-6\`, \`.nhsd-grid-off-tab-6\`
- \`.nhsd-grid-off-des-7\`
- \`.nhsd-grid-off-des-8\`
- \`.nhsd-grid-off-des-9\`
- \`.nhsd-grid-off-des-10\`
- \`.nhsd-grid-off-des-11\`
- \`.nhsd-grid-off-des-12\``,
  },
    source: {
      code: `${sourceCode}\n${ResponsiveColumnOffset().innerHTML}`,
    },
  },
};

export const NoGutterGrid = () => {
  const div = document.createElement('div');
  div.innerHTML = `<div class="nhsd-grid nhsd-grid--debug nhsd-u-no-gutters">
  <div class="nhsd-grid-row">
    <div class="nhsd-grid-col-12 nhsd-u-fw-bold nhsd-u-c-white nhsd-u-bg-dark-grey">Look mum, no gutters!</div>
  </div>
  <div class="nhsd-grid-row">
    <div class="nhsd-grid-col-4 nhsd-u-no-gutters">.nhsd-grid-col-4.nhsd-u-no-gutters</div>
    <div class="nhsd-grid-col-4 nhsd-u-no-gutters">.nhsd-grid-col-4.nhsd-u-no-gutters</div>
    <div class="nhsd-grid-col-4 nhsd-u-no-gutters">.nhsd-grid-col-4.nhsd-u-no-gutters</div>
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

