import React from "react";
import { Container } from "../../../../components/server/Container/Container";
import { OneButton } from "./FooterWithButtons/mod.ts";
import { BaseDialogFooterPropsType } from "./types.ts";

export const BaseDialogFooter = ({
	buttonsContent = [],
	className,
	variant = "base1",
	toggleModal,
	isOpened = false,
}: BaseDialogFooterPropsType) => {
	className = className ?? "";
	className += " px-4 py-2 rounded-b-2 md:rounded-b-4";
	className = className.trim();

	if (buttonsContent.length > 3) {
		throw new Error("To much button for modal (3 max)");
	}

	let content = <div />;

	if (buttonsContent.length === 1 && buttonsContent[0]) {
		content = (
			<OneButton
				isOpened={isOpened}
				primaryButton={buttonsContent[0]}
				toggleModal={toggleModal}
			/>
		);
	}

	return (
		<Container
			className={className}
			element={"footer"}
			background={{ variant }}
		>
			{content}
		</Container>
	);
};
