
import { MouseEvent } from "react";
import { ChildrenComponents } from "../../server-deps";
import { ButtonContentType } from '../BaseDialog/Footer/types.ts';

export type BaseDialogPropsType = {
	title?: string;
	buttonsContent?: ButtonContentType[];
	className?: string;
	children: ChildrenComponents;
	close?: () => void;
	isCancellable?: boolean;
	onCancel?: (event: MouseEvent) => void;
};

export type DialogPropsType = {
  isOpened: boolean;
  close?: () => void;
};
