import { Meta, StoryObj } from '@storybook/react';

import { LinearProgress } from '.';

const meta = {
  component: LinearProgress,
  tags: ['autodocs'],
  title: 'Linear progress'
} satisfies Meta<typeof LinearProgress>;

export default meta;
type Story = StoryObj<typeof LinearProgress>;

export const Primary: Story = {
  args: {
    label: 'react',
    value: 70
  }
};
