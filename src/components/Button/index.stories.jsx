import React from 'react';
import Button from './index';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => <Button {...args}>Everything</Button>;

export const Default = Template.bind({});
