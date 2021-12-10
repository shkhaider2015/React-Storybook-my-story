// Button.stories.ts|tsx

import React, { useState } from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import TextField from '../components/InputField';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Basics/TextField',
  component: TextField
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = () => {
  const [value, setValue] = useState<string>('');
  return <TextField
             onChange={(e:React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} 
             onBlur={() => ''} 
             value={value} />
};

export const TF = Template.bind({})