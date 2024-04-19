import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "./Form";

const meta = {
  title: "Example/Form",
  component: Form,
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
  }
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Text: Story = {
  args: {
    firstname: "Prénom :",
    lastname: "Nom :"
  },
};
