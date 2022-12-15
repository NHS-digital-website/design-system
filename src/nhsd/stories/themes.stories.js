/* global document */

// Load storybook config
import * as sbConfig from '../../../.storybook/storybook-config';

import { HeaderBannerSimpleComponent } from '../components/organisms/hero/hero.stories';

const storyDescription = `
**Warning**: Support for theming is still experimental and isn't fully supported by all components. Variables and usage is likely to change in future versions.

When using NHSD components for your own projects you may wish to use different colours palettes and styling rules.
Themes enable this via configurable CSS variables which override the default colours and styling set by the NHSD design system.

The following variables are currently avaliable:

- \`--primary-colour\` (default: blue)
- \`--heading-colour\` (default: black)
- \`--content-colour\` (default: dark-grey)
- \`--link-colour\` (default: primary-colour)
- \`--bg-colour\` (default: white)
- \`--border-colour\` (default: pale-grey)

These variables work along side tokens and components. For example, to change the colour of text content the token, \`nhsd-!t-colour\` can be used along with the variable, \`--content-colour\`.
Or alternatively, one of the theme colour could be specified, \`nhsd-!t-colour-primary-colour\`.

Other tokens which support theming include, \`nhsd-!t-bg\` (--bg-colour) and \`nhsd-!t-border\` (--border-colour).
`;

// Component defaults
export default {
  title: `${sbConfig.title.designSystem} / ${sbConfig.title.themes}`,
  parameters: {
    docs: {
      description: {
        component: storyDescription,
      },
    },
  },
};

export const Theme = () => {
  const div = document.createElement('div');
  div.innerHTML = `<div class="nhsd-t-grid nhsd-!t-border nhsd-!t-bg" style="--border-colour: red; --link-colour: black; --bg-colour: #ffcccc;">
  <div class="nhsd-t-row">
    <div class="nhsd-t-col nhsd-!t-colour nhsd-!t-padding-4" style="--content-colour: #aa0000;">
      <b>Warning: <span class="nhsd-!t-colour-primary-colour">themes</span> are experimental.</b> <a class="nhsd-a-link" href="#">An example black link</a>
    </div>
  </div>
</div>`;
  return div;
};
Theme.storyName = 'Basic usage';
Theme.parameters = {
  docs: {
    source: {
      code: Theme().innerHTML,
    },
  },
};

export const ThemedHero = (args) => `<div class="nhsd-!t-colour" style="--primary-colour: #335033; --content-colour: white; --heading-colour: white">
    ${HeaderBannerSimpleComponent(args)}
  </div>`;
ThemedHero.storyName = 'Green Themed hero';
ThemedHero.args = {
  ...HeaderBannerSimpleComponent.args,
  classes: 'nhsd-!t-bg-primary-colour',
  digiblocks: [{
    classes: 'nhsd-a-digiblocks--pos-tr nhsd-a-digiblocks--col-white',
  }],
  leftAlign: true,
};
ThemedHero.parameters = {
  docs: {
    source: {
      code: ThemedHero(ThemedHero.args).innerHTML,
    },
  },
};
