"use client";

import React from "react";
import { IconSyncAlt } from "../../../../../components/server/Icon/mod";
import { Button } from "../../../Button/Button";

export const Loader = () => {
	const iconLoader = (
		<IconSyncAlt
			className="animate-spin-slow"
			variant={"disabled"}
			size="s"
		/>
	);
	return (
		<div className={"flex flex-row-reverse items-center"}>
			<Button
				isDisabled={true}
				trailingIcon={iconLoader}
			>
				Merci de patienter
			</Button>
		</div>
	);
};
