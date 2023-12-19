import Button from './Button.js';

export default {
    title: 'Button',
    component: Button,
};

export const Primary = () => <Button primary>Click me no1</Button>;
export const Secondary = () => <Button secondary>Click me too no2</Button>;