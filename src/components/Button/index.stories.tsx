import { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

const meta = {
  component: Button,
  tags: ['autodocs'],
  title: 'Button'
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Contained: Story = {
  args: {
    children: 'contained (check color prop)',
    variant: 'contained'
  }
};

export const Outlined: Story = {
  args: {
    children: 'outlined',
    variant: 'outlined'
  }
};

export const Text: Story = {
  args: {
    children: 'text',
    variant: 'text'
  }
};
