"use client";

import { Button } from "../../../Button/mod.ts";
import React, { useEffect, useState, MouseEvent } from "react";
import { Loader } from "./Loader.tsx";
import { OneButtonType } from "./types.ts";

export const OneButton = ({
	primaryButton,
	toggleModal,
	isOpened = false,
}: OneButtonType) => {
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		setIsLoading(false);
	}, [isOpened]);

	const onClickOnPrimaryButtonHandler = (event: MouseEvent) => {
		if (!primaryButton.isManualToggle) {
			toggleModal && toggleModal();
		} else {
			setIsLoading(true);
		}
		primaryButton.onClick && primaryButton.onClick(event);
	};

	if (isLoading) {
		return <Loader />;
	}
	return (
		<div className={"flex flex-col sm:flex-row sm:justify-between"}>
			<div></div>
			<div className={"grid grid-cols-1 gap-none sm:grid-cols-none"}>
				<div></div>
				<Button
					variant={"primary"}
					leadingIcon={primaryButton.leadingIcon}
					trailingIcon={primaryButton.trailingIcon}
					onClick={onClickOnPrimaryButtonHandler}
				>
					{primaryButton.text}
				</Button>
			</div>
		</div>
	);
};
