import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Input> = {
    title: 'Input',
    component: Input,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        error: false,
        placeholder: 'This is an input'
    },
};

export const Error: Story = {
    args: {
        error: true,
        label: 'Input',
    },
};