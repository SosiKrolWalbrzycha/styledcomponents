import React from 'react';
import Card from './Card.js';


export default {
    title: 'Card',
    component: Card,
};

export const Note = () => <Card cardType='note'/>;
export const Twitter = () => <Card cardType='twitter'/>;
export const Article = () => <Card cardType='article'/>;