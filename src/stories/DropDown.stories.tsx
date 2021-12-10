import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Diet } from "../Static/Icons";

import Dropdown from '../components/Dropdown';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Dropdown',
  component: Dropdown,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Dropdown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown  />;

export const Contained = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
// Contained.args = {
//   outlined: false,
//   Icon: Diet,
//   text: "Click Me"
// };

// export const Outlined = Template.bind({});
// Outlined.args = {
//   outlined: true
// };

// export const IconButton = Template.bind({});
// IconButton.args = {
//   Icon: Diet
// };

// export const Disable = Template.bind({});
// Disable.args = {
//   disable: true
// };
