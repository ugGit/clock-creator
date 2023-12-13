import type { Meta, StoryObj } from '@storybook/react';

import Clock from './Clock';

const meta: Meta = {
  title: 'Components/Clock',
  component: Clock,
  tags: ['autodocs'],
  argTypes: {
    font: {
      options: ['sans-serif', 'serif', 'arial', 'monospace'],
      control: { type: 'select' },
    },
  },
};

export default meta

type Story = StoryObj<typeof Clock>;

export const Serif : Story = {
  args: {
    font: 'serif',
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


export const RomanNumerals : Story = {
  args: {
    romanNumerals: true,
  },
};
