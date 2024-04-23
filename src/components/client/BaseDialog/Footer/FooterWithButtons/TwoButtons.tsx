"use client";

import { Button } from "../../../Button/mod.ts";
import React, { useEffect, useState, MouseEvent } from "react";
import { Loader } from "./Loader.tsx";
import { TwoButtonType } from "./types.ts";

export const TwoButtons = ({
	primaryButton,
  secondaryButton,
	toggleModal,
	isOpened = false,
}: TwoButtonType) => {
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
		<div className={"flex gap-4 justify-end"}>
			<div></div>
			<div className={"grid grid-cols-1 gap-none"}>
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
			<div className={"grid grid-cols-1 gap-none"}>
				<div></div>
				<Button
					variant={"primary"}
					leadingIcon={secondaryButton.leadingIcon}
					trailingIcon={secondaryButton.trailingIcon}
				>
					{secondaryButton.text}
				</Button>
			</div>
		</div>
	);
};
