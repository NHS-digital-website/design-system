/* global document */

// Load storybook config
import * as sbConfig from '../../../.storybook/storybook-config.js';

const storyDescription = `${sbConfig.heading.lab}`;

// Component defaults
export default {
  title: `${sbConfig.title.designSystem} / ${sbConfig.title.latestVersion}`,
  parameters: {
    docs: {
      description: {
        component: storyDescription,
      },
    },
  },
};

// Component template
const Template = () => {
  const div = document.createElement('div');

  const Title = document.createElement('h1');
  Title.classList.add('nhsd-t-heading-xl');
  Title.innerText = 'Latest version: v0.4.0.4';
  div.appendChild(Title);

  const subTitle = document.createElement('h2');
  subTitle.classList.add('nhsd-t-heading-l');
  subTitle.innerText = 'Date: 3/2/2021';
  div.appendChild(subTitle);

  return div;
};

export const Component1 = Template.bind({});
Component1.storyName = 'Info';
