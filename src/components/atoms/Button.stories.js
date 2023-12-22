import React from 'react';
import Button from './Button.js';

export default {
    title: 'Button',
    component: Button,
};



export const Note = () => <Button note>No 1</Button>;
export const Twitter = () => <Button twitter>No 2</Button>;
export const Article = () => <Button article>No 3</Button>;