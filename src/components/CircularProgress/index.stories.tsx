import { Meta, StoryObj } from '@storybook/react';

import { CircularProgress } from '.';

const meta = {
  component: CircularProgress,
  tags: ['autodocs'],
  title: 'CircularProgress'
} satisfies Meta<typeof CircularProgress>;

export default meta;
type Story = StoryObj<typeof CircularProgress>;

export const Small: Story = {
  args: {
    size: 10
  }
};

export const Medium: Story = {
  args: {
    size: 50
  }
};

export const Large: Story = {
  args: {
    size: 200
  }
};
