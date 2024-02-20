import { ComponentChildren } from "../../deps.ts";
import { VariantType } from "../../types.ts";

export type BaseDialogBodyPropsType = {
  children: ComponentChildren;
  className?: string;
  variant?: VariantType;
};
