import React from "react";
import { IconPropsType } from "../types.ts";
import { SizedIconPenS } from "./SizedIconPenS.tsx";
import { SizedIconPenM } from "./SizedIconPenM.tsx";
import { SizedIconPenL } from "./SizedIconPenL.tsx";


export const IconPen = (
  {
    className,
    variant,
    size = "m",
  }: IconPropsType,
) => {
  className = className ?? "";
  switch (size) {
    case "s":
      return (
        <SizedIconPenS
          className={className}
          variant={variant}
        />
      );
    case "m":
      return (
        <SizedIconPenM
          className={className}
          variant={variant}
        />
      );
    case "l":
      return (
        <SizedIconPenL
          className={className}
          variant={variant}
        />
      );
  }
  return <></>;
};
