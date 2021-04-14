// Load storybook config
import * as sbConfig from '../../../.storybook/storybook-config';

// Load stylesheet file
require('../scss-core/tokens/_display.scss');

const componentName = 'Display';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.details}:

The display token can be applied in situations where special display options are required.`;
const sourceCode = '// Sass import \n@use "nhsd/scss-core/tokens/display";\n\n//HTML';

// Component defaults
export default {
  title: `${sbConfig.title.designSystem} / ${sbConfig.title.tokens} / ${componentName}`,
  parameters: {
    docs: {
      description: {
        component: storyDescription,
      },
    },
  },
};

export const LabComponent = () => `<div class="nhsd-t-grid nhsd-t-grid--debug">
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-12 nhsd-!t-font-weight-bold nhsd-!t-col-white nhsd-!t-bg-dark-grey">Responsive show / hide</div>
  </div>
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-3 nhsd-!t-display-hide nhsd-!t-display-l-show">
      Col 1 (Hidden on mobile)
    </div>
    <div class="nhsd-t-col-12 nhsd-t-col-l-9">
      Col 2 (Full width on mobile)
    </div>
  </div>
</div>`;
LabComponent.storyName = sbConfig.title.lab;
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent()}`,
    },
  },
};

export const ResponsiveShowHideComponent = () => `<div class="nhsd-t-grid nhsd-t-grid--debug">
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-12 nhsd-!t-font-weight-bold nhsd-!t-col-white nhsd-!t-bg-dark-grey">Responsive show / hide</div>
  </div>
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-3 nhsd-!t-display-hide nhsd-!t-display-l-show">
      Col 1 (Hidden on mobile)
    </div>
    <div class="nhsd-t-col-12 nhsd-t-col-l-9">
      Col 2 (Full width on mobile)
    </div>
  </div>
</div>`;
ResponsiveShowHideComponent.storyName = 'Responsive show / hide tokens';
ResponsiveShowHideComponent.parameters = {
  docs: {
    description: {
      story: `- The display token \`nhsd-!t-display-hide\` is first applied to hide the left column.
- The display token \`nhsd-!t-display-l-show\` is then applied on top of \`nhsd-!t-display-hide\` to show the left column on desktop breakpoints.
- Finally the responsive \`grid\` class, \`nhsd-t-col-l-9\` is used to switch between a full width column to a 9 width column at desktop breakpoints.`,
    },
    source: {
      code: `${sourceCode}\n${ResponsiveShowHideComponent()}`,
    },
  },
};

export const StickyComponent = () => `<div class="nhsd-t-grid nhsd-t-grid--debug">
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-12 nhsd-!t-font-weight-bold nhsd-!t-col-white nhsd-!t-bg-dark-grey">Sticky content</div>
  </div>
  <div class="nhsd-t-row">
    <div class="nhsd-t-col-3">
      <div class="nhsd-a-box nhsd-a-box--bg-light-grey nhsd-!t-display-sticky nhsd-!t-display-sticky--offset-2">Sticky box</div>
    </div>
    <div class="nhsd-t-col-9">
      <p class="nhsd-t-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ornare tortor. Pellentesque interdum ex est, quis pellentesque nisl vehicula vel. Fusce commodo molestie quam, quis condimentum nisi feugiat a. Vivamus laoreet efficitur mi, a egestas augue convallis eu. Nulla egestas turpis vitae lacus molestie iaculis id ut ex. Proin rutrum, orci quis sagittis sagittis, dui leo pulvinar diam, sit amet pulvinar enim ex quis risus. Pellentesque consectetur a eros nec blandit. Cras tempor viverra nisl eget semper. Nullam nisl lacus, fermentum ut arcu ut, sagittis tincidunt diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eleifend purus sed sem lacinia elementum. Aliquam at elementum mauris. Nam justo mi, posuere a scelerisque at, semper eleifend ligula.</p>

      <p class="nhsd-t-body">Phasellus eu ipsum sit amet est elementum rhoncus. Nunc sollicitudin viverra metus vitae laoreet. Maecenas dignissim risus in finibus euismod. Donec in ipsum convallis, semper nibh sit amet, rhoncus tortor. Morbi sodales, lectus a condimentum ornare, quam justo aliquam augue, et vehicula magna enim vel lorem. Ut ac rhoncus arcu, vel finibus justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit interdum tellus, eget faucibus est mollis eu. Vestibulum a egestas lacus. Suspendisse at tortor in diam scelerisque hendrerit.</p>

      <p class="nhsd-t-body">In sit amet odio porta, sagittis ante in, aliquam sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus egestas urna ac tincidunt lacinia. Aliquam erat volutpat. In aliquet lacus in imperdiet iaculis. Mauris nec leo in sem vehicula pretium ut nec metus. Aliquam aliquam, sem et ultricies sodales, sapien ante efficitur erat, quis posuere nibh dui ut dui. Quisque vulputate diam sit amet varius sagittis. Donec condimentum, lacus nec vestibulum pharetra, nisl velit feugiat nisl, et congue diam quam ac libero. Suspendisse et diam augue. Duis finibus erat quis quam rhoncus vehicula.</p>

      <p class="nhsd-t-body">Suspendisse enim est, ultrices quis porta non, imperdiet et tortor. Phasellus ac leo ornare, bibendum quam a, convallis est. Aenean pulvinar massa ante, ut viverra mi ullamcorper sed. Pellentesque fermentum quam ut ipsum placerat ullamcorper. Morbi vel nibh at sem tincidunt scelerisque quis eu risus. Fusce vehicula urna nec sem euismod euismod. Suspendisse nunc diam, luctus sit amet nibh et, bibendum hendrerit eros. Maecenas at interdum orci, at ornare nunc. Vivamus mi mauris, viverra non dictum nec, commodo non neque. Nunc sit amet aliquet neque. Pellentesque volutpat sem in lacus vestibulum, vitae aliquet arcu gravida. Vestibulum in suscipit purus. Phasellus consequat, enim in fringilla aliquet, ipsum metus tempor ligula, nec pretium libero dolor eget tortor. Praesent ac lectus elementum, ullamcorper velit quis, viverra neque. Nulla sit amet elementum ante. Nam et lectus sed dui lobortis convallis sit amet non quam.</p>

      <p class="nhsd-t-body">Mauris aliquet nisi eget purus blandit, quis tempor eros tincidunt. Sed viverra mauris sit amet ex pulvinar, eu dignissim massa viverra. In ut luctus quam. Phasellus placerat, justo vitae semper porta, felis est commodo augue, eu efficitur ligula eros sit amet mi. Cras eu maximus ligula, dapibus aliquet leo. Ut non luctus risus. Duis tempor odio dui, et commodo nisi mollis ac. Donec dignissim non urna id ornare. Aliquam viverra scelerisque nisl, ut luctus mi hendrerit non. Proin tristique lorem et quam gravida lobortis. Nulla ut ipsum tincidunt, sodales ante eu, porta lorem.</p>
    </div>
  </div>
</div>`;
StickyComponent.storyName = 'Sticky token';
StickyComponent.parameters = {
  docs: {
    description: {
      story: `- The display token \`nhsd-!t-display-sticky\` is applied to the \`box\` atom to stick it to the top of the window when the grid leaves the page.
- The modifier token \`nhsd-!t-display-sticky--offset\` is then applied to add top margin when sticking to page.
- **Please Note**: This will only work in canvas view on storybook.`,
    },
    source: {
      code: `${sourceCode}\n${StickyComponent()}`,
    },
  },
};
