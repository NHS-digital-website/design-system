// Load storybook config
import * as sbConfig from '../../../.storybook/storybook-config.js';

// Load stylesheet file
require('../scss-core/tokens/_typography.scss');

const componentName = 'Typography';
const storyDescription = `${sbConfig.heading.lab}`;
const sourceCode = `// Sass import \n@use "nhsd/scss-core/tokens/typography";\n\n//HTML`;

// Component defaults
export default {
  title: `${sbConfig.title.designSystem} / ${sbConfig.title.tokens} / ${sbConfig.title.typography}`,
  parameters: {
    docs: {
      description: {
        component: storyDescription
      }
    },
  }
};
export const LabComponent = () => {
  const div = document.createElement('div');
  const titleEl = document.createElement('h1');
  titleEl.classList.add('nhsd-t-heading-xxl');
  titleEl.innerText = `Coronavirus (COVID-19): Shielded Patients List (SPL)`;
  div.appendChild(titleEl);

  const leadEl = document.createElement('p');
  leadEl.classList.add('nhsd-t-lead');
  leadEl.innerText = `At NHS Digital, we maintain the Shielded Patients List, helping Government and partner organisations to provide extra protection for people most at risk from COVID-19.`;
  div.appendChild(leadEl);

  const p1 = document.createElement('p');
  p1.classList.add('nhsd-t-body');
  p1.innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis. Elit sed vulputate mi sit amet mauris commodo quis. Semper feugiat nibh sed pulvinar proin.`;
  div.appendChild(p1);

  const p2 = document.createElement('p');
  p2.classList.add('nhsd-t-body');
  p2.innerText = `Vulputate mi sit amet mauris commodo quis. Egestas diam in arcu cursus euismod quis viverra nibh. Pharetra diam sit amet nisl suscipit. Pulvinar elementum integer enim neque. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Augue ut lectus arcu bibendum at varius vel pharetra. Porttitor lacus luctus accumsan tortor posuere.`;
  div.appendChild(p2);

  const hr1 = document.createElement('hr');
  hr1.classList.add(...['nhsd-a-horizontal-rule']);
  div.appendChild(hr1);

  const subTitle = document.createElement('h2');
  subTitle.classList.add('nhsd-t-heading-xl');
  subTitle.innerText = `About the Shielded Patients List`;
  div.appendChild(subTitle);

  const p3 = document.createElement('p');
  p3.classList.add('nhsd-t-body');
  p3.innerText = `The Shielded Patients List (SPL) is made up of three service components:`;
  div.appendChild(p3);

  const ul1 = document.createElement('ul');
  ul1.classList.add(...['nhsd-t-list', 'nhsd-t-list--bullet']);
  ul1.innerHTML = `<li>A clinical algorithm</li>
<li>A weekly publication</li>
<li>Our dissemination of the data</li>`;
  div.appendChild(ul1);

  const subTitle2 = document.createElement('h3');
  subTitle2.classList.add('nhsd-t-heading-l');
  subTitle2.innerText = `Known issues`;
  div.appendChild(subTitle2);

  const p4 = document.createElement('p');
  p4.classList.add('nhsd-t-body');
  p4.innerText = `We know there are some instances where the algorithm has identified patients as high risk where they may not be.`;
  div.appendChild(p4);

  const subTitle3 = document.createElement('h4');
  subTitle3.classList.add('nhsd-t-heading-m');
  subTitle3.innerText = `Stable HIV`;
  div.appendChild(subTitle3);

  const p5 = document.createElement('p');
  p5.classList.add('nhsd-t-body');
  p5.innerText = `Patients with stable HIV and no other medical conditions have not been allocated to the Shielded Patient List. Despite this, we know they’re being identified as high risk. This happens because the code "immunosuppressed" appears on their records, which triggers their entry onto the list.`;
  div.appendChild(p5);

  const subTitle4 = document.createElement('h5');
  subTitle4.classList.add('nhsd-t-heading-s');
  subTitle4.innerText = `High risk`;
  div.appendChild(subTitle4);

  const p6 = document.createElement('p');
  p6.classList.add(...['nhsd-t-body', 'nhsd-!t-font-weight-bold']);
  p6.innerText = `The algorithm looks to identify people:`;
  div.appendChild(p6);

  const ol1 = document.createElement('ol');
  ol1.classList.add(...['nhsd-t-list', 'nhsd-t-list--number', 'nhsd-t-list--loose']);
  ol1.innerHTML = `<li>Who've received solid organ transplants</li>
<li>With specific cancers:
  <ul class="nhsd-t-list nhsd-t-list--bullet">
    <li>Who are undergoing chemotherapy</li>
    <li>With lung cancer who are undergoing radical radiotherapy</li>
    <li>With cancers of the blood or bone marrow such as leukaemia, lymphoma or myeloma, at any stage of treatment</li>
    <li>Having immunotherapy or other antibody treatments for cancer</li>
    <li>Having other targeted cancer treatments which can affect the immune system, such as protein kinase inhibitors or PARP inhibitors</li>
  </ul>
</li>
<li>With severe respiratory conditions including cystic fibrosis, severe asthma and severe chronic obstructive pulmonary disease (COPD)</li>
<li>With rare diseases and inborn errors of metabolism that significantly increase the risk of infections (such as severe combined immunodeficiency (SCID), homozygous sickle cell)</li>
<li>Who are receiving immunosuppression therapies which could significantly increase the risk of infection.</li>
<li>Women who are pregnant with significant heart disease, congenital or acquired.</li>`;
  div.appendChild(ol1);

  const p7 = document.createElement('p');
  p7.classList.add('nhsd-t-body');
  p7.innerText = `Some specialist organisations have developed tools to help identify patients at risk. These are for guidance only and the decision to add a patient to the high risk group should always be made on a case by case basis`;
  div.appendChild(p7);

  const ul2 = document.createElement('ul');
  ul2.classList.add(...['nhsd-t-list', 'nhsd-t-list--bullet', 'nhsd-t-list--links']);
  ul2.innerHTML = `<li><a href="#" class="nhsd-a-link">Association of British Neurologists</a></li>
  <li><a href="#" class="nhsd-a-link">British Society of Gastroenterology</a></li>
  <li><a href="#" class="nhsd-a-link">The renal association</a></li>
  <li><a href="#" class="nhsd-a-link">British Society for Rheumatology</a></li>
  <li><a href="#" class="nhsd-a-link">British Association of Dermatologists</a></li>
  <li><a href="#" class="nhsd-a-link">British Thoracic Society</a></li>`;
  div.appendChild(ul2);

  const subTitle5 = document.createElement('h6');
  subTitle5.classList.add('nhsd-t-heading-xs');
  subTitle5.innerText = `Low risk of developing complications from coronavirus (COVID-19) infection`;
  div.appendChild(subTitle5);

  const p8 = document.createElement('p');
  p8.classList.add('nhsd-t-body');
  p8.innerText = `Patients are thought to be low risk if they don’t appear in the moderate or high risk groups.`;
  div.appendChild(p8);

  const hr2 = document.createElement('hr');
  hr2.classList.add(...['nhsd-a-horizontal-rule']);
  div.appendChild(hr2);

  const q = document.createElement('blockquote');
  q.classList.add('nhsd-t-quote');
  q.innerText = `Fusce id malesuada quam, sit amet tristique purus. Pellentesque quam augue, tincidunt sed dolor a, posuere laoreet mi. Quam augue`;
  div.appendChild(q);

  return div;
};
LabComponent.storyName = `${sbConfig.title.lab}`;
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent().innerHTML}`,
    },
  },
};

export const Headings = () => {
  const div = document.createElement('div');
  const h1 = document.createElement('h1');
  h1.classList.add('nhsd-t-heading-xxl');
  h1.innerText = `Coronavirus (COVID-19): Shielded Patients List (SPL)`;
  div.appendChild(h1);

  const h2 = document.createElement('h2');
  h2.classList.add('nhsd-t-heading-xl');
  h2.innerText = `Coronavirus (COVID-19): Shielded Patients List (SPL)`;
  div.appendChild(h2);

  const h3 = document.createElement('h3');
  h3.classList.add('nhsd-t-heading-l');
  h3.innerText = `Coronavirus (COVID-19): Shielded Patients List (SPL)`;
  div.appendChild(h3);

  const h4 = document.createElement('h4');
  h4.classList.add('nhsd-t-heading-m');
  h4.innerText = `Coronavirus (COVID-19): Shielded Patients List (SPL)`;
  div.appendChild(h4);

  const h5 = document.createElement('h5');
  h5.classList.add('nhsd-t-heading-s');
  h5.innerText = `Coronavirus (COVID-19): Shielded Patients List (SPL)`;
  div.appendChild(h5);

  const h6 = document.createElement('h6');
  h6.classList.add('nhsd-t-heading-xs');
  h6.innerText = `Coronavirus (COVID-19): Shielded Patients List (SPL)`;
  div.appendChild(h6);
  return div;
};
Headings.storyName = 'Headings';
Headings.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${Headings().innerHTML}`,
    },
  },
};

export const Lead = () => {
  const div = document.createElement('div');
  const p = document.createElement('p');
  p.classList.add('nhsd-t-lead');
  p.innerText = `At NHS Digital, we maintain the Shielded Patients List, helping Government and partner organisations to provide extra protection for people most at risk from COVID-19.`;
  div.appendChild(p);
  return div;
};
Lead.storyName = 'Lead';
Lead.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${Lead().innerHTML}`,
    },
  },
};

export const Paragraphs = () => {
  const div = document.createElement('div');
  const p1 = document.createElement('p');
  p1.classList.add('nhsd-t-body');
  p1.innerText = `Proactively productivate out-of-the-box infomediaries whereas superior infrastructures. Globally orchestrate one-to-one deliverables without customer directed deliverables. Distinctively coordinate customized deliverables with tactical experiences. Competently cultivate extensible.`;
  div.appendChild(p1);
  const p2 = document.createElement('p');
  p2.classList.add('nhsd-t-body');
  p2.innerText = `Intrinsicly reconceptualize professional internal or "organic" sources with high-payoff "outside the box" thinking. Globally disseminate customer directed bandwidth.`;
  div.appendChild(p2);
  const p3 = document.createElement('p');
  p3.classList.add('nhsd-t-body');
  p3.innerText = `Energistically transition optimal bandwidth after dynamic catalysts for change. Completely syndicate client-focused best practices rather than global mindshare. Synergistically impact bleeding-edge web-readiness with resource maximizing experiences. Distinctively implement frictionless methodologies.`;
  div.appendChild(p3);
  return div;
};
Paragraphs.storyName = 'Paragraphs';
Paragraphs.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${Paragraphs().innerHTML}`,
    },
  },
};

export const UnorderedList = () => {
  const div = document.createElement('div');
  const ul = document.createElement('ul');
  ul.classList.add(...['nhsd-t-list', 'nhsd-t-list--bullet']);
  ul.innerHTML = `<li>A clinical algorithm</li>
<li>A weekly publication</li>
<li>Our dissemination of the data</li>`;
  div.appendChild(ul);
  return div;
};
UnorderedList.storyName = 'Unordered list';
UnorderedList.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${UnorderedList().innerHTML}`,
    },
  },
};

export const UnorderedListLoose = () => {
  const div = document.createElement('div');
  const ul = document.createElement('ul');
  ul.classList.add(...['nhsd-t-list', 'nhsd-t-list--bullet', 'nhsd-t-list--loose']);
  ul.innerHTML = `<li>A clinical algorithm</li>
<li>A weekly publication</li>
<li>Our dissemination of the data</li>`;
  div.appendChild(ul);
  return div;
};
UnorderedListLoose.storyName = 'Unordered list (loose)';
UnorderedListLoose.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${UnorderedListLoose().innerHTML}`,
    },
  },
};

export const OrderedList = () => {
  const div = document.createElement('div');
  const ul = document.createElement('ol');
  ul.classList.add(...['nhsd-t-list', 'nhsd-t-list--number']);
  ul.innerHTML = `<li>A clinical algorithm</li>
<li>A weekly publication</li>
<li>Our dissemination of the data</li>`;
  div.appendChild(ul);
  return div;
};
OrderedList.storyName = 'Ordered list';
OrderedList.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${OrderedList().innerHTML}`,
    },
  },
};

export const OrderedListLoose = () => {
  const div = document.createElement('div');
  const ol = document.createElement('ol');
  ol.classList.add(...['nhsd-t-list', 'nhsd-t-list--number', 'nhsd-t-list--loose']);
  ol.innerHTML = `<li>A clinical algorithm</li>
<li>A weekly publication</li>
<li>Our dissemination of the data</li>`;
  div.appendChild(ol);
  return div;
};
OrderedListLoose.storyName = 'Ordered list (loose)';
OrderedListLoose.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${OrderedListLoose().innerHTML}`,
    },
  },
};

export const UnorderedListLinks = () => {
  const div = document.createElement('div');
  const ul = document.createElement('ul');
  ul.classList.add(...['nhsd-t-list', 'nhsd-t-list--bullet', 'nhsd-t-list--links']);
  ul.innerHTML = `<li><a href="#" class="nhsd-a-link">Association of British Neurologists</a></li>
  <li><a href="#" class="nhsd-a-link">British Society of Gastroenterology</a></li>
  <li><a href="#" class="nhsd-a-link">The renal association</a></li>
  <li><a href="#" class="nhsd-a-link">British Society for Rheumatology</a></li>
  <li><a href="#" class="nhsd-a-link">British Association of Dermatologists</a></li>
  <li><a href="#" class="nhsd-a-link">British Thoracic Society</a></li>`;
  div.appendChild(ul);
  return div;
};
UnorderedListLinks.storyName = 'Unordered list with links';
UnorderedListLinks.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${UnorderedListLinks().innerHTML}`,
    },
  },
};

export const OrderedListLooseNested = () => {
  const div = document.createElement('div');
  const ol = document.createElement('ol');
  ol.classList.add(...['nhsd-t-list', 'nhsd-t-list--number', 'nhsd-t-list--loose']);
  ol.innerHTML = `<li>Who've received solid organ transplants</li>
<li>With specific cancers:
  <ul class="nhsd-t-list nhsd-t-list--bullet">
    <li>Who are undergoing chemotherapy</li>
    <li>With lung cancer who are undergoing radical radiotherapy</li>
    <li>With cancers of the blood or bone marrow such as leukaemia, lymphoma or myeloma, at any stage of treatment</li>
    <li>Having immunotherapy or other antibody treatments for cancer</li>
    <li>Having other targeted cancer treatments which can affect the immune system, such as protein kinase inhibitors or PARP inhibitors</li>
  </ul>
</li>
<li>With severe respiratory conditions including cystic fibrosis, severe asthma and severe chronic obstructive pulmonary disease (COPD)</li>
<li>With rare diseases and inborn errors of metabolism that significantly increase the risk of infections (such as severe combined immunodeficiency (SCID), homozygous sickle cell)</li>`;
  div.appendChild(ol);
  return div;
};
OrderedListLooseNested.storyName = 'Ordered list (loose, nested)';
OrderedListLooseNested.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${OrderedListLooseNested().innerHTML}`,
    },
  },
};

export const BlockQuote = () => {
  const div = document.createElement('div');
  const q = document.createElement('blockquote');
  q.classList.add('nhsd-t-quote');
  q.innerText = `Fusce id malesuada quam, sit amet tristique purus. Pellentesque quam augue, tincidunt sed dolor a, posuere laoreet mi. Quam augue`;
  div.appendChild(q);
  return div;
};
BlockQuote.storyName = 'Block Quote';
BlockQuote.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${BlockQuote().innerHTML}`,
    },
  },
};

