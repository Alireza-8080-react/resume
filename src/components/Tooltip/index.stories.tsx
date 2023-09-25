import { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from '.';
import classes from './index.module.scss';

const meta = {
  component: Tooltip,
  tags: ['autodocs'],
  title: 'Tooltip'
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Primary: Story = {
  args: {
    children: <h1 className={classes.tooltip_children}>Hi</h1>,
    title: 'tooltip title'
  }
};
