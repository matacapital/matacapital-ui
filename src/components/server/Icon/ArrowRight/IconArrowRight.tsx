import React from "react";
import { IconPropsType } from "../types.ts";

export const IconArrowRight = ({
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
      <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
    </svg>
  );
};
