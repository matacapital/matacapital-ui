import React from "react";
import { Text, TextElementType } from '../atoms/Text/text.module.ts';
import { ListElementType, ListPropsType } from "./types.ts";

const listStyles: ListElementType = {
  type: {
    ordered: "ol",
    unordered: "ul",
    none: "ul",
  },
  style: {
    ordered: "decimal",
    unordered: "disc",
    none: "none",
  },
};

export const List = ({
  size = "m",
  style = "unordered",
  children,
  className = "",
}: ListPropsType) => {
  className += ` text-${size}`;
  className += ` list-${listStyles.style[style]}`;
  return (
    <Text
      element={listStyles.type[style] as TextElementType}
      className={className}
      size={size}
    >
      {children}
    </Text>
  );
};
