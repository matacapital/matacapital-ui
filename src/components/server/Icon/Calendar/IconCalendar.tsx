import { definition } from "../../../definition.ts";
import { IconPropsType } from "../types.ts";
import React from "react";

export const IconCalendar = ({
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
			className={className.trim()}
			width={width}
			height={height}
			viewBox="0 0 448 512"
		>
			<path d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" />
		</svg>
	);
};
