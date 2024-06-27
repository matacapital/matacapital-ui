import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link";

const meta = {
  title: 'Components/server/Atoms/Link',
  tags: ['autodocs'],
  component: Link,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LinkInBasicStyle: Story = {
  args: {
    children: "See more",
  },
};
