import React from "react";
import { IconPropsType } from "../types.ts";

export const IconSpacer = ({
  className,
  variant,
  size = "s",
}: IconPropsType) => {
  className = className ?? "";
  if (variant) {
    /*  className += " " + definition.svg.fill[variant].content; */
  }

  let width = 32;
  let height = 32;
  switch (size) {
    case "s":
      width = 16;
      height = 16;
      break;
    case "m":
      width = 24;
      height = 24;
      break;
    case "l":
      width = 32;
      height = 32;
      break;
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 448 512"
      className={className.trim()}
    >
      <path d="" />
    </svg>
  );
};
