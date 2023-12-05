import type { Meta, StoryObj } from '@storybook/react';

import Clock from './Clock';

const meta: Meta = {
  title: 'Components/Clock',
  component: Clock,
  argTypes: {
    font: {
      options: ['serif', 'sans-serif', 'arial', 'monospace'],
      control: { type: 'radio' },
    },
  },
};

export default meta

type Story = StoryObj<typeof Clock>;

export const Default : Story = {
  args: {
    font: 'serif',
  },
};
