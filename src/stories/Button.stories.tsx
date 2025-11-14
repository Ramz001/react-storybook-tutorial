import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';

import { Button } from '@/components/Button';

type StoryProps = ComponentProps<typeof Button> & { text: string };

const meta: Meta<StoryProps> = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: { type: 'select' }, options: ['primary', 'secondary'] },
    size: { control: { type: 'select' }, options: ['lg', 'sm', 'md'] },
  },
  args: { onClick: action('clicked') }, // <- replaced fn() with action
};

export default meta;
type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: { variant: 'primary', size: 'md', text: 'Test' },
  render: ({ text, ...args }) => <Button {...args}>{text}</Button>,
};

export const Secondary: Story = {
  args: { variant: 'secondary', size: 'lg', text: 'Secondary' },
  render: ({ text, ...args }) => <Button {...args}>{text}</Button>,
};
