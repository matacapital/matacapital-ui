import { definition } from "../../../definition.ts";
import { IconPropsType } from "../types.ts";
import React from "react";

export const IconCornerLT = ({
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
			<path d="m24,0H7S0,0,0,0v7s0,17,0,17h7s0-17,0-17h17s0-7,0-7Z" />
		</svg>
	);
};
