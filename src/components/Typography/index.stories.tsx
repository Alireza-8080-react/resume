import { Meta, StoryObj } from '@storybook/react';

import { Typography } from '.';

const meta = {
  component: Typography,
  tags: ['autodocs'],
  title: 'Typography'
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof Typography>;

export const H2: Story = {
  args: {
    children: 'Hi',
    color: 'primary',
    textAlign: 'left',
    variant: 'h2'
  }
};

export const Subtitle1: Story = {
  args: {
    children: 'Hi',
    color: 'primary',
    textAlign: 'left',
    variant: 'subtitle1'
  }
};

export const Center: Story = {
  args: {
    children: 'Hi',
    color: 'primary',
    textAlign: 'center'
  }
};
