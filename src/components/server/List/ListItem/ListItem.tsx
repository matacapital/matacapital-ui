import React from "react";
import { Text } from "../../Text/mod.ts";
import { ListItemPropsType } from "./types.ts";


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
