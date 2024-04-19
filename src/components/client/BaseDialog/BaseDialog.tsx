"use client";

import { BaseDialogHeader } from "./Header/BaseDialogHeader.tsx";
import { BaseDialogBody } from "./Body/BaseDialogBody.tsx";
import { BaseDialogFooter } from "./Footer/BaseDialogFooter.tsx";
import { BaseDialogPropsType } from "./types.ts";
import { Paragraph } from "../../server/Paragraph/Paragraph";
import React, { ForwardedRef } from "react";

const Dialog = (
	{
		title,
		buttonsContent,
		className,
		children,
		close,
		isCancellable = true,
		onCancel,
	}: BaseDialogPropsType,
	ref: ForwardedRef<null>,
) => {
	className = className ?? "";
	className += "absolute w-[90%] sm:w-[575px] p-none";
	className = className.trim();

	let classNameBackdrop = " h-screen w-full";
	classNameBackdrop += " fixed top-none left-none";
	classNameBackdrop += " bg-base1-content";
	classNameBackdrop = classNameBackdrop.trim();

	return (
		<dialog
			ref={ref}
			className={className}
			style={{ top: "100px" }}
		>
			<BaseDialogHeader
				toggleModal={close}
				onCancel={onCancel}
				isCancellable={isCancellable}
				variant={"primary"}
			>
				{title}
			</BaseDialogHeader>
			<BaseDialogBody>
				{typeof children === "string" ? (
					<Paragraph>{children}</Paragraph>
				) : (
					children
				)}
			</BaseDialogBody>
			<BaseDialogFooter
				buttonsContent={buttonsContent}
				toggleModal={close}
				variant={"secondary"}
			/>
		</dialog>
	);
};

const BaseDialog = React.forwardRef(Dialog);
export { BaseDialog };
