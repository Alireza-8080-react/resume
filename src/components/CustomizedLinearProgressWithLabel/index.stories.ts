import { Meta, StoryObj } from '@storybook/react';

import { CustomizedLinearProgressWithLabel } from '.';

const meta = {
  component: CustomizedLinearProgressWithLabel,
  tags: ['autodocs'],
  title: 'Linear progress'
} satisfies Meta<typeof CustomizedLinearProgressWithLabel>;

export default meta;
type Story = StoryObj<typeof CustomizedLinearProgressWithLabel>;

export const Primary: Story = {
  args: {
    label: 'react',
    value: 70
  }
};
