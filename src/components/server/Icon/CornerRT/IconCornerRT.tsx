import React from "react";
import { IconPropsType } from "../types.ts";

export const IconCornerRT = ({
	className,
	variant,
	size = "m",
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
			<path d="m24,24V7s0-7,0-7h-7S0,0,0,0v7s17,0,17,0v17s7,0,7,0Z" />
		</svg>
	);
};
