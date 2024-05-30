import type { Meta, StoryObj } from "@storybook/react";
import { EmailForm } from "./EmailForm";

const meta = {
  title: "Scenarios/landing/EmailForm",
  component: EmailForm,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof EmailForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Connexion: Story = {
  args: {
    platformTitle: "Matacapital",
  },
};
