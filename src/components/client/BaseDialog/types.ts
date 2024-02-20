
import { MouseEvent } from "react";
import { ChildrenComponents } from "../../server-deps";
import { ButtonContentType } from '../BaseDialog/Footer/types.ts';

export type BaseDialogPropsType = {
  title?: string;
  buttonsContent?: ButtonContentType[];
  isOpened: boolean;
  className?: string;
  children: ChildrenComponents;
  toggleCallback?: () => void;
  isCancellable?: boolean;
  onCancel?: (event: MouseEvent) => void;
};

export type DialogPropsType = {
  isOpened: boolean;
  toggleCallback?: () => void;
};
