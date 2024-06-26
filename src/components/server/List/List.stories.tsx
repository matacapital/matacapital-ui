import type { Meta, StoryObj } from "@storybook/react";
import { List } from "./List";
import { ListItem } from './list.module';
import React from "react";

const meta = {
  title: "Components/server/List",
  tags: ["autodocs"],
  component: List,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof List>;

export default meta;

type Story = StoryObj<typeof meta>;

const children = (
  <>
    <ListItem children={"item 1"} />
    <ListItem children={"item 2"} />
    <ListItem children={"item 3"} />
  </>
);

export const ListNonOrdered: Story = {
  args: {
    children,
  },
};

export const ListOrdered: Story = {
  args: {
    style: "ordered",
    children,
  },
};
