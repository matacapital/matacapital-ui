import React from "react";
import { Text } from '../../atoms/Text/text.module.ts';
import { ListItemPropsType } from "./types.ts";

export const ListItem = ({ children, className }: ListItemPropsType) => {
  className = className ?? "";
  className += " " + "ml-4";

  return (
    <Text
      element={"li"}
      className={className}
    >
      {children}
    </Text>
  );
};
