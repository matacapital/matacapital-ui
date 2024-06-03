import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { IconArrowRight, IconPen, IconEnvelope } from "../../../..";
// import { fireEvent, userEvent, within } from "@storybook/test";

const meta = {
  title: "Components/client/Button",
  tags: ["autodocs"],
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {
    onClick: (event) => alert("Hello World !"),
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

export const ButtonWithLeadingIconArrow: Story = {
  args: {
    leadingIcon: IconArrowRight({ className: "mr-2" }),
    className: "",
    children: "Click me",
  },
};

export const ButtonWithTrailingIconArrow: Story = {
  args: {
    trailingIcon: IconArrowRight({ className: "ml-2" }),
    className: "",
    children: "Click me",
  },
};

export const ButtonWithLeadingIconPen: Story = {
  args: {
    leadingIcon: IconPen({ className: "mr-2", size: "s" }),
    className: "",
    children: "Click me",
  },
};

export const ButtonWithTrailingIconPen: Story = {
  args: {
    trailingIcon: IconPen({ className: "ml-2", size: "s" }),
    className: "",
    children: "Click me",
  },
};

export const ButtonWithLeadingIconEnvelope: Story = {
  args: {
    leadingIcon: IconEnvelope({ className: "mr-2", size: "s" }),
    className: "",
    children: "Click me",
  },
};

export const ButtonWithTrailingIconEnvelope: Story = {
  args: {
    trailingIcon: IconEnvelope({ className: "ml-2", size: "s" }),
    className: "",
    children: "Click me",
  },
};
