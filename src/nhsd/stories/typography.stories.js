// Load storybook config
import * as sbConfig from '../../../.storybook/storybook-config.js';

const componentName = 'Typography';
const storyDescription = `##Paragraph\n\nThe default paragraph font size is 18px (1rem) on large screens and 16px (0.89rem) on small screens. There is a 20px (1.11rem) vertical space between paragraphs.`;
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

export const List = () => {
  const div = document.createElement('div');
  div.innerHTML = `<ul class="nhsd-list">
  <li>collaboratively maintain one-to-one applications</li>
  <li>synergistically grow integrated experiences through cooperative mindshare</li>
  <li>competently matrix revolutionary experiences through</li>
  <li>efficiently morph alternative innovation with</li>
</ul>`;
  return div;
};
List.storyName = 'List';
List.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${List().innerHTML}`,
    },
  },
};

export const BulletList = () => {
  const div = document.createElement('div');
  div.innerHTML = `<ul class="nhsd-list nhsd-list--bullet">
  <li>collaboratively maintain one-to-one applications</li>
  <li>synergistically grow integrated experiences through cooperative mindshare</li>
  <li>competently matrix revolutionary experiences through</li>
  <li>efficiently morph alternative innovation with</li>
</ul>`;
  return div;
};
BulletList.storyName = 'Bullet list';
BulletList.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${BulletList().innerHTML}`,
    },
  },
};

export const NumberedList = () => {
  const div = document.createElement('div');
  div.innerHTML = `<ol class="nhsd-list nhsd-list--number">
  <li>collaboratively maintain one-to-one applications</li>
  <li>synergistically grow integrated experiences through cooperative mindshare</li>
  <li>competently matrix revolutionary experiences through</li>
  <li>efficiently morph alternative innovation with</li>
</ol>`;
  return div;
};
NumberedList.storyName = 'Numbered list';
NumberedList.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${NumberedList().innerHTML}`,
    },
  },
};
