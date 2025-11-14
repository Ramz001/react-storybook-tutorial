import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/Button';
import Stack from '@/components/Stack';

type StoryProps = {
  orientation: 'horizontal' | 'vertical';
  count: number; // dynamic number of items
};

const meta: Meta<StoryProps> = {
  component: Stack,
  tags: ['autodocs'],
  argTypes: { count: { control: { type: 'number', min: 1, max: 10 } } },
  args: { count: 3 }, // default count
};

export default meta;
type Story = StoryObj<StoryProps>;

// Horizontal variant
export const Horizontal: Story = {
  args: { orientation: 'horizontal' },
  render: ({ count, ...args }) => (
    <Stack {...args}>{renderItems({ count })}</Stack>
  ),
};

// Vertical variant
export const Vertical: Story = {
  args: { orientation: 'vertical' },
  render: ({ count, ...args }) => (
    <Stack {...args}>{renderItems({ count })}</Stack>
  ),
};

const renderItems = ({ count }: { count: number }) =>
  Array.from({ length: count }).map((_, i) => (
    <Button key={i} variant={i % 2 === 0 ? 'primary' : 'secondary'} size="sm">
      Button {i + 1}
    </Button>
  ));
