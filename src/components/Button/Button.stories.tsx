import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Button>Click me</Button>,
};

/**
 * 2 Variants supported
 */
export const Variants: Story = {
  render: (args) => (
    <>
      <Button {...args} variant="filled">
        Click me
      </Button>
      <Button {...args} variant="outlined">
        Click me
      </Button>
    </>
  ),
};
