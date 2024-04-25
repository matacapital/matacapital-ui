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
		footerClassName,
		close,
		isCancellable = true,
		onCancel,
	}: BaseDialogPropsType,
	ref: ForwardedRef<null>,
) => {
	className = className ?? "";
	className +=
		(className ? " " : "") +
		"backdrop:bg-grey-50 absolute w-[90%] sm:w-[575px] p-none";
	className = className.trim();

	return (
		<dialog
			ref={ref}
			className={className}
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
				className={footerClassName}
			/>
		</dialog>
	);
};

const BaseDialog = React.forwardRef(Dialog);
export { BaseDialog };
