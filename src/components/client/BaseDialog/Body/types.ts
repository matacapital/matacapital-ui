import { ChildrenComponents } from "../../../server-deps.ts";
import { VariantType } from "../../../types.ts";

export type BaseDialogBodyPropsType = {
	children: ChildrenComponents;
	className?: string;
	variant?: VariantType;
};
