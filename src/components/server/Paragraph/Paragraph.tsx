import React from "react";
import { Text } from '../atoms/Text/text.module.ts';
import { ParagraphPropsType } from "./types.ts";

export const Paragraph = ({
  size = "m",
  fontFamily = "primary",
  fontStyle = "regular",
  className,
  align,
  children,
  variant = "base1",
}: ParagraphPropsType) => {
  return (
    <Text
      size={size}
      fontFamily={fontFamily}
      fontStyle={fontStyle}
      element={"p"}
      align={align}
      className={className}
      variant={variant}
    >
      {children}
    </Text>
  );
};
