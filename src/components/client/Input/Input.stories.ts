import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
// import { fireEvent, userEvent, within } from "@storybook/test";

const meta = {
  title: "Components/client/atoms/Input",
  tags: ["autodocs"],
  component: Input,
  parameters: {
    layout: "centered",
  },
  args: {
    onChange: (event) => alert(event.target.value),
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InputInBasicStyle: Story = {
  args: {
    label: "Name :",
    state: "default",
    labelClassName: "pb-2",
    classNameInput: "w-full border-2 h-10 px-2 outline-none",
    feedbackMessageClassName: "text-danger-default",
  },
};
