// Load icons
import nhsdIcon from '@/helpers/icons/inline-icon';

// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';

import fibreImage from '../../../assets/images/fibre.jpg';

const componentName = 'Infographic';
const storyDescription = `${sbConfig.heading.lab}

${sbConfig.heading.basicRules}

### Components used
- <a href="/docs/design-system-components-atoms-icon--lab-component">Icon</a>
- <a href="/docs/design-system-components-atoms-box--lab-component">Box</a>
- <a href="/docs/design-system-components-atoms-image--lab-component">Image</a>

### Tokens used
- Spacing
- Colours
- Typography

### Developer notes

- If no box class is specified, it will default to a light grey background
- an SVG icon or an image can be used for the graphic at the top of the infographic`;

const sourceCode = `// Sass import \n@use "nhsd/components/molecules/infographic";

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
};

// Component template
const Template = (args) => template.render({ params: { ...args } });

export const LabComponent = Template.bind({});
LabComponent.storyName = sbConfig.title.lab;
LabComponent.args = {
  box: {
    classes: 'nhsd-a-box--bg-light-grey',
  },
  icon: {
    svgSource: nhsdIcon('chart'),
    classes: 'nhsd-a-icon--size-xxl',
  },
  headline: '29,625 new complaints between July and September 2019',
  explanatoryLine: 'in NHS hospital and community health services',
  qualifyingInfo: 'up from 28,849 in the previous quarter',
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};

export const LightBlue = Template.bind({});
LightBlue.storyName = 'Light Blue background';
LightBlue.args = {
  box: {
    classes: 'nhsd-a-box--bg-light-blue',
  },
  icon: {
    svgSource: nhsdIcon('arrow_down'),
    classes: 'nhsd-a-icon--size-xxl',
  },
  headline: '603,766 babies delivered',
  explanatoryLine: 'in NHS hospitals during 2018-19',
  qualifyingInfo: 'This is 3.6% less than in the previous year',
};
LightBlue.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LightBlue(LightBlue.args)}`,
    },
  },
};

export const LightYellow = Template.bind({});
LightYellow.storyName = 'Light Yellow background';
LightYellow.args = {
  box: {
    classes: 'nhsd-a-box--bg-light-yellow',
  },
  icon: {
    svgSource: nhsdIcon('chart'),
    classes: 'nhsd-a-icon--size-xxl',
  },
  headline: '29,625 new complaints between July and September 2019',
  explanatoryLine: 'in NHS hospital and community health services',
  qualifyingInfo: 'up from 28,849 in the previous quarter',
};
LightYellow.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LightYellow(LightYellow.args)}`,
    },
  },
};

export const NoQualifyingText = Template.bind({});
NoQualifyingText.storyName = 'No Qualifying Text';
NoQualifyingText.args = {
  box: {
    classes: 'nhsd-a-box--bg-light-grey',
  },
  icon: {
    svgSource: nhsdIcon('arrow_up'),
    classes: 'nhsd-a-icon--size-xxl',
  },
  headline: '63,288 more patients registered with a GP',
  explanatoryLine: 'at 1 December 2019, compared to 1 November 2019',
};
NoQualifyingText.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${NoQualifyingText(NoQualifyingText.args)}`,
    },
  },
};

export const WithImage = Template.bind({});
WithImage.storyName = 'Infographic with Image';
WithImage.args = {
  box: {
    classes: 'nhsd-a-box--bg-light-grey',
  },
  image: {
    src: fibreImage,
    alt: 'Abstract lights',
  },
  headline: '29,625 new complaints between July and September 2019',
  explanatoryLine: 'in NHS hospital and community health services',
  qualifyingInfo: 'up from 28,849 in the previous quarter',
};
WithImage.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${WithImage(WithImage.args)}`,
    },
  },
};
