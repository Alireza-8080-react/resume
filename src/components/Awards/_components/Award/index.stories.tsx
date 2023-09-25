import { Meta, StoryObj } from '@storybook/react';

import { Typography } from '@/components/Typography';
import { colorPalette } from '@/constants/colorPalette';

import { Award } from '.';

const meta = {
  component: Award,
  tags: ['autodocs'],
  title: 'Award'
} satisfies Meta<typeof Award>;

export default meta;
type Story = StoryObj<typeof Award>;

export const Primary: Story = {
  args: {
    backComponent: (
      <Typography color={colorPalette.light.foreground} variant='h5' textAlign='center'>
        I developed front-side of customized CRM, dynamic-form & ticketing panels solely.
      </Typography>
    ),
    frontComponent: (
      <Typography color={colorPalette.light.foreground} variant='h1'>
        #1
      </Typography>
    )
  }
};
