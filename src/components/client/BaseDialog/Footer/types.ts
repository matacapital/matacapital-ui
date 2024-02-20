
import { MouseEvent } from "react";
import { ChildrenComponents } from "../../../server-deps.ts";
import { VariantType } from "../../../types.ts";


export type ButtonContentType = {
  text: string;
  leadingIcon?: ChildrenComponents;
  trailingIcon?: ChildrenComponents;
  onClick?: (event: MouseEvent) => void;
  isManualToggle?: boolean;
};

export type BaseDialogFooterPropsType = {
  buttonsContent?: ButtonContentType[];
  className?: string;
  variant?: VariantType;
  isOpened: boolean;
  toggleModal?: () => void;
};
