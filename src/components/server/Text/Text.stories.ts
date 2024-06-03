import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";
import { TextElementType } from "./mod";

const meta = {
  title: "Components/server/Text",
  tags: ["autodocs"],
  component: Text,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

const elements = ["h1", "h2", "h3", "h4"];
const objects: Story[] = [];

for (const element of elements) {
  objects.push({
    args: {
      children: "See more",
      element: element as TextElementType,
    },
  });
}

export const TextHeading1: Story = objects[0] as Story;
export const TextHeading2: Story = objects[1] as Story;
export const TextHeading3: Story = objects[2] as Story;
export const TextHeading4: Story = objects[3] as Story;
