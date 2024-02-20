import { Text } from "../../Text/mod.ts";
import { ListItemPropsType } from "./types.ts";
import React from "react";

export const ListItem = ({ children, className }: ListItemPropsType) => {
	className = className ?? "";
	className += " " + "ml-4";

	return (
		<Text
			element={"li"}
			className={className}
		>
			{children}
		</Text>
	);
};
