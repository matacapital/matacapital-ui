
import { MouseEvent } from "react";
import { ChildrenComponents } from "../../server-deps.ts";
import { VariantType } from "../../types.ts";

export type ButtonSizeType = "s" | "m" | "l";

export type ButtonType = "button" | "submit" | "reset";

export type ButtonPropsType = {
	type?: ButtonType;
	children: string | ChildrenComponents;
	isStyledAsLink?: boolean;
	size?: ButtonSizeType;
	variant?: VariantType;
	onClick?: (event: MouseEvent) => void;
	leadingIcon?: ChildrenComponents;
	trailingIcon?: ChildrenComponents;
	className?: string;
	isDisabled?: boolean;
	style?: {
		width?: string;
	};
	href?: string;
	isTargetedToANewTab?: boolean;
};