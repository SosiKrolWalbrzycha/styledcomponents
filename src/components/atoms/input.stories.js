import React from 'react';
import Input from './input.js'; // Ścieżka do Twojego komponentu Input

export default {
    title: 'Components/Input',
    component: Input,
};

const Template = (args) => <Input {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    type: 'text',
    placeholder: 'Wpisz tekst...',
};

export const Search = Template.bind({});
Search.args = {
    type: 'text',
    placeholder: 'Szukaj...',
    search: true,
};
