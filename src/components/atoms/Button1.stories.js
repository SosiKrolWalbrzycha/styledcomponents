import React from 'react';
import Button1 from './Button1.js';

export default {
    title: 'Button1',
    component: Button1,
    args: {
        backgroundColor: 'red',
        color:'white',
        value: 'jebac',
        label: 'Press me',
      },
};

const Template = (args) => <Button1 {...args}>jebac slask</Button1>;

export const Primary = Template.bind({});
Primary.args = {
  backgroundColor: 'blue',
  label: 'Primary Button',
};