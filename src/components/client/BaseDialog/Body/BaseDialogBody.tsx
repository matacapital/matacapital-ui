import React from "react";
import { Container } from "../../../../components/server/Container/mod.ts";
import { BaseDialogBodyPropsType } from "./types.ts";


export const BaseDialogBody = ({
	children,
	className,
	variant = "base1",
}: BaseDialogBodyPropsType) => {
	className = className ?? "";
	className += " p-4 ";
	className = className.trim();

	return (
		<Container
			className={className}
			element={"div"}
			background={{ variant }}
		>
			{children}
		</Container>
	);
};
