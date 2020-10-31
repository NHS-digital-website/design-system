// Load storybook config
import * as sbConfig from '../../storybook-config.js';

const componentName = 'Typography';
const storyDescription = `##Paragraph\n\nThe default paragraph font size is 18px (1.125rem) on large screens and 16px (1rem) on small screens.`;
const sourceCode = `// Sass import \n@use "nhsd/scss-core/base/typography";\n\n//HTML`;

// Component defaults
export default {
  title: `${sbConfig.title.designSystem} / ${sbConfig.title.foundations} / ${sbConfig.title.typography}`,
  parameters: {
    docs: {
      description: {
        component: storyDescription
      }
    },
  }
};

export const Paragraph = () => {
  const div = document.createElement('div');
  const p1 = document.createElement('p');
  p1.classList.add('nhsd-body');
  p1.innerHTML = `Proactively productivate out-of-the-box infomediaries whereas superior infrastructures. Globally orchestrate one-to-one deliverables without customer directed deliverables. Distinctively coordinate customized deliverables with tactical experiences. Competently cultivate extensible.`;
  div.appendChild(p1);
  const p2 = document.createElement('p');
  p2.classList.add('nhsd-body');
  p2.innerHTML = `Intrinsicly reconceptualize professional internal or "organic" sources with high-payoff "outside the box" thinking. Globally disseminate customer directed bandwidth.`;
  div.appendChild(p2);
  const p3 = document.createElement('p');
  p3.classList.add('nhsd-body');
  p3.innerHTML = `Energistically transition optimal bandwidth after dynamic catalysts for change. Completely syndicate client-focused best practices rather than global mindshare. Synergistically impact bleeding-edge web-readiness with resource maximizing experiences. Distinctively implement frictionless methodologies.`;
  div.appendChild(p3);
  return div;
};
Paragraph.storyName = 'Paragraph';
Paragraph.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n<p class="nhsd-body">This is a very ordinary paragraph.</p>`,
    },
  },
};
