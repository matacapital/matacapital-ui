import React from "react";
import { Container } from "../Container/mod.ts";
import { AreaPropsType } from "./types.ts";


export const Area = ({
	children,
	variant = "base1",
	fluid = "none",
	className,
	element = "div",
	directChildStyle,
}: AreaPropsType & {
	directChildStyle?: string;
}) => {
	className = className ?? "";

	let classNameChild = "";

	if (directChildStyle) {
		classNameChild = directChildStyle;
	}

	if (fluid === "mobile") {
		classNameChild = classNameChild + " m-auto lg:container";
	} else if (fluid === "none") {
		classNameChild = classNameChild + " m-auto container";
	}
	return (
		<Container
			background={{ variant: variant }}
			element={element}
			className={className.trim()}
		>
			<Container className={classNameChild.trim()}>{children}</Container>
		</Container>
	);
};
