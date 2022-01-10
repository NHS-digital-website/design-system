// Load storybook config
import * as sbConfig from '../../../../../.storybook/storybook-config';

// Load template file
import template from './template.njk';

const componentName = 'Box';
const storyDescription = `${sbConfig.heading.lab}

Box is a generic container used by other molecules and organisms such as the <a href="/docs/design-system-components-molecules-card--lab-component">Card molecule</a>.`;
const sourceCode = `// Sass import \n@use "nhsd/components/atoms/box";

// HTML`;

// Component defaults
export default {
  title: `${sbConfig.title.designSystem} / ${sbConfig.title.components} / ${sbConfig.title.atoms} / ${componentName}`,
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
  classes: 'nhsd-a-box--border-grey',
};
LabComponent.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LabComponent(LabComponent.args)}`,
    },
  },
};

export const WhiteBox = Template.bind({});
WhiteBox.storyName = 'Background / White';
WhiteBox.parameters = {
  backgrounds: {
    default: 'dim',
  },
  docs: {
    source: {
      code: `${sourceCode}\n${WhiteBox(WhiteBox.args)}`,
    },
  },
};

export const LightGreyBox = Template.bind({});
LightGreyBox.storyName = 'Background / Light grey';
LightGreyBox.args = {
  classes: 'nhsd-a-box--bg-light-grey',
};
LightGreyBox.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LightGreyBox(LightGreyBox.args)}`,
    },
  },
};

export const MidGreyBox = Template.bind({});
MidGreyBox.storyName = 'Background / Mid grey';
MidGreyBox.args = {
  classes: 'nhsd-a-box--bg-mid-grey',
};
MidGreyBox.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${MidGreyBox(MidGreyBox.args)}`,
    },
  },
};

export const DarkGreyBox = Template.bind({});
DarkGreyBox.storyName = 'Background / Dark grey';
DarkGreyBox.args = {
  classes: 'nhsd-a-box--bg-dark-grey',
};
DarkGreyBox.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${DarkGreyBox(DarkGreyBox.args)}`,
    },
  },
};

export const BlackBackground = Template.bind({});
BlackBackground.storyName = 'Background / Black';
BlackBackground.args = {
  classes: 'nhsd-a-box--bg-black',
};
BlackBackground.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${BlackBackground(BlackBackground.args)}`,
    },
  },
};

export const LightYellowBox = Template.bind({});
LightYellowBox.storyName = 'Background / Light yellow';
LightYellowBox.args = {
  classes: 'nhsd-a-box--bg-light-yellow',
};
LightYellowBox.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LightYellowBox(LightYellowBox.args)}`,
    },
  },
};

export const YellowBox = Template.bind({});
YellowBox.storyName = 'Background / Yellow';
YellowBox.args = {
  classes: 'nhsd-a-box--bg-yellow',
};
YellowBox.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${YellowBox(YellowBox.args)}`,
    },
  },
};

export const LightBlue10Box = Template.bind({});
LightBlue10Box.storyName = 'Background / Light Blue Tint 10';
LightBlue10Box.args = {
  classes: 'nhsd-a-box--bg-light-blue-10',
};
LightBlue10Box.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LightBlue10Box(LightBlue10Box.args)}`,
    },
  },
};

export const LightBlueBox = Template.bind({});
LightBlueBox.storyName = 'Background / Light Blue';
LightBlueBox.args = {
  classes: 'nhsd-a-box--bg-light-blue',
};
LightBlueBox.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${LightBlueBox(LightBlueBox.args)}`,
    },
  },
};

export const BlueBox = Template.bind({});
BlueBox.storyName = 'Background / Blue';
BlueBox.args = {
  classes: 'nhsd-a-box--bg-blue',
};
BlueBox.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${BlueBox(BlueBox.args)}`,
    },
  },
};

export const DarkBlueBox = Template.bind({});
DarkBlueBox.storyName = 'Background / Dark blue';
DarkBlueBox.args = {
  classes: 'nhsd-a-box--bg-dark-blue',
};
DarkBlueBox.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${DarkBlueBox(DarkBlueBox.args)}`,
    },
  },
};

export const DarkGreenBox = Template.bind({});
DarkGreenBox.storyName = 'Background / Dark green';
DarkGreenBox.args = {
  classes: 'nhsd-a-box--bg-dark-green',
};
DarkGreenBox.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${DarkGreenBox(DarkGreenBox.args)}`,
    },
  },
};

export const RedBox = Template.bind({});
RedBox.storyName = 'Background / Dark red';
RedBox.args = {
  classes: 'nhsd-a-box--bg-red',
};
RedBox.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${RedBox(RedBox.args)}`,
    },
  },
};

export const YellowOutlineBox = Template.bind({});
YellowOutlineBox.storyName = 'Outline / Yellow';
YellowOutlineBox.args = {
  classes: 'nhsd-a-box--border-yellow',
};
YellowOutlineBox.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${YellowOutlineBox(YellowOutlineBox.args)}`,
    },
  },
};

export const BlueOutlineBox = Template.bind({});
BlueOutlineBox.storyName = 'Outline / Blue';
BlueOutlineBox.args = {
  classes: 'nhsd-a-box--border-blue',
};
BlueOutlineBox.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${BlueOutlineBox(BlueOutlineBox.args)}`,
    },
  },
};

export const GreyOutlineBox = Template.bind({});
GreyOutlineBox.storyName = 'Outline / Grey';
GreyOutlineBox.args = {
  classes: 'nhsd-a-box--border-grey',
};
GreyOutlineBox.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${GreyOutlineBox(GreyOutlineBox.args)}`,
    },
  },
};

export const RedOutlineBox = Template.bind({});
RedOutlineBox.storyName = 'Outline / Red';
RedOutlineBox.args = {
  classes: 'nhsd-a-box--border-red',
};
RedOutlineBox.parameters = {
  docs: {
    source: {
      code: `${sourceCode}\n${RedOutlineBox(RedOutlineBox.args)}`,
    },
  },
};
