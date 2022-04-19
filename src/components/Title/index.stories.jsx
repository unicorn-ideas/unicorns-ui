import React from 'react';
import Title from './index';

export default {
  title: 'Components/Title',
  component: Title,
};

const Template = (args) => (
  <Title {...args}>The Life, The Universe, and Everything</Title>
);

export const Default = Template.bind({});
