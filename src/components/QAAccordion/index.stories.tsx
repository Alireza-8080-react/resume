import { Meta, StoryObj } from '@storybook/react';

import { QAAccordion } from '.';

const meta = {
  component: QAAccordion,
  tags: ['autodocs'],
  title: 'QA Accordion'
} satisfies Meta<typeof QAAccordion>;

export default meta;
type Story = StoryObj<typeof QAAccordion>;

export const Closed: Story = {
  args: {
    children: <p>Qa accordion answer</p>,
    question: 'Qa accordion question'
  }
};

export const Opened: Story = {
  args: {
    children: <p>Qa accordion answer</p>,
    isExpanded: true,
    question: 'Qa accordion question'
  }
};
