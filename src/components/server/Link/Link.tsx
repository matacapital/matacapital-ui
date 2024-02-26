import React from "react";
import { Text } from "../Text/mod.ts";
import { LinkPropsType } from "./types.ts";


export const Link = ({
	variant,
	href = "#",
	isTargetedToANewTab = false,
	fontSize,
	fontFamily,
	fontStyle,
	className,
	children,
}: LinkPropsType) => {
	return (
		<a
			href={href}
			target={isTargetedToANewTab ? "_blank" : "_self"}
			rel={isTargetedToANewTab ? "noreferrer" : ""}
			className={className}
		>
			<Text
				element={"span"}
				variant={variant}
				size={fontSize}
				fontStyle={fontStyle}
				fontFamily={fontFamily}
				className={"underline hover:no-underline"}
			>
				{children}
			</Text>
		</a>
	);
};
