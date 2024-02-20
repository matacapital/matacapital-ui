import { MouseEvent } from "react";

import { VariantType } from "../../../types.ts";
import { ChildrenComponents } from "../../../server-deps.ts";

export interface BaseDialogHeaderPropsType {
  children: ChildrenComponents;
  className?: string;
  variant?: VariantType;
  toggleModal?: () => void;
  isCancellable?: boolean;
  onCancel?: (event: MouseEvent) => void;
}
