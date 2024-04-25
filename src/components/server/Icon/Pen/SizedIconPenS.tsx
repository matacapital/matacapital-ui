import React from "react";
import { IconPropsType } from "../types.ts";


export const SizedIconPenS = ({
	className,
	variant,
}: Exclude<IconPropsType, "size">) => {
	className = className ?? "";
	if (variant) {
		/*  className += " " + definition.svg.fill[variant].content; */
	}

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			viewBox="0 0 512 512"
			className={className.trim()}
		>
			<path d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z" />
		</svg>
	);
};
