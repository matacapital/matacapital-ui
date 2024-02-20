"use client";

import { BaseDialogHeader } from "./Header/BaseDialogHeader.tsx";
import { BaseDialogBody } from "./Body/BaseDialogBody.tsx";
import { BaseDialogFooter } from "./Footer/BaseDialogFooter.tsx";
import { BaseDialogPropsType } from "./types.ts";
import { Paragraph } from "../../server/Paragraph/Paragraph";

export const BaseDialog = ({
	title,
	buttonsContent,
	isOpened = false,
	className,
	children,
	toggleCallback,
	isCancellable = true,
	onCancel,
}: BaseDialogPropsType) => {
	className = className ?? "";
	className += "absolute w-[90%] sm:w-[575px] p-none";
	className = className.trim();

	let classNameBackdrop = " h-screen w-full";
	classNameBackdrop += " fixed top-none left-none";
	classNameBackdrop += " bg-base1-content";
	classNameBackdrop = classNameBackdrop.trim();

	return (
		<div className={isOpened ? "" : "hidden"}>
			<div
				className={classNameBackdrop}
				style={{ opacity: 0.75 }}
			></div>
			<dialog
				open={isOpened}
				className={className}
				style={{ top: "100px" }}
			>
				<BaseDialogHeader
					toggleModal={toggleCallback}
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
					isOpened={isOpened}
					buttonsContent={buttonsContent}
					toggleModal={toggleCallback}
					variant={"secondary"}
				/>
			</dialog>
		</div>
	);
};
