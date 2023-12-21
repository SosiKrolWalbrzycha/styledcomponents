import React from 'react';
import Button from './Button.js';

export default {
    title: 'Button',
    component: Button,
};

// Definicja szablonu dla Button
const Template = (args) => <Button {...args} />;

// Użycie szablonu do tworzenia historii dla Primary Button
export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    children: 'Click me no1',
};

// Użycie szablonu do tworzenia historii dla Secondary Button
export const Secondary = Template.bind({});
Secondary.args = {
    secondary: true,
    children: 'Click me too no2',
};