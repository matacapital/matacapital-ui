import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
// import { fireEvent, userEvent, within } from "@storybook/test";

const meta = {
  title: "Components/client/atoms/Button",
  tags: ["autodocs"],
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {
    onClick: (event) => alert(event.target),
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ButtonBasicStyle: Story = {
  args: {
    className: "",
    children: "Click me",
  },
};
