import type { Meta, StoryObj } from '@storybook/react';

import Clock from './Clock';

const meta: Meta = {
  title: 'Components/Clock',
  component: Clock,
  argTypes: {
    font: {
      options: ['serif', 'sans-serif', 'arial', 'monospace'],
      control: { type: 'select' },
    },
  },
};

export default meta

type Story = StoryObj<typeof Clock>;

export const Default : Story = {};

export const SansSerif : Story = {
  args: {
    font: 'sans-serif',
  },
};

export const Arial : Story = {
  args: {
    font: 'arial',
  },
};

export const Monospace : Story = {
  args: {
    font: 'monospace',
  },
};
