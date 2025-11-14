import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';

import { Button } from '@/components/Button';

type StoryProps = ComponentProps<typeof Button>;

const meta: Meta<StoryProps> = { component: Button };

export default meta;
type Story = StoryObj<StoryProps>;
export const Primary: Story = {};
