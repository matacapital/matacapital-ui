'use client';
import { Container } from "../../server/Container/mod.ts";
import { definition } from "../../definition.ts";
import { Text } from "../../server/Text/mod.ts";
import { ButtonPropsType } from "./types.ts";
import { useState } from "../../client-deps.ts";
import { MouseEvent } from "../../client-deps.ts";
import React from "react";

export const Button = ({
	type = "button",
	variant = "primary",
	isStyledAsLink = false,
	size = "m",
	children,
	onClick,
	className,
	style,
	leadingIcon,
	trailingIcon,
	isDisabled = false,
	href,
	isTargetedToANewTab = false,
}: ButtonPropsType) => {
	className = className ?? "";

	const [isClickAnimationPlaying, setIsClickAnimationPlaying] = useState(false);
	let classNameLink = "";
	let classNameIconArea = "";

	const {
		background: { color },
		svg,
	} = definition;
	//save current variant
	let usedVariant = variant;

	//default class
	className +=
		" " +
		"rounded-btn group leading-none inline-flex flex-row items-center border-none outline-none focus:outline-none";

	if (isDisabled) {
		usedVariant = "disabled";
		if (isStyledAsLink) {
			//todo : if ButtonLink are used with isDisabled=true, we have to find a better way to show disabled link whithout replace variant by base1 colors
			usedVariant = "base1";
			className += " " + "opacity-50";
		}
	}

	//link style
	if (isStyledAsLink) {
		classNameLink += ` underline`;
		if (!isDisabled) {
			classNameLink += ` group-hover:no-underline hover:no-underline`;
		}
	}

	//buttons style
	if (!isStyledAsLink) {
		className += ` ${color[usedVariant].default} p-4`;

		//add effects if not disabled
		if (!isDisabled) {
			className += ` ${color[usedVariant].event.hover} transition-transform ease-in-out duration-l`;

			if (isClickAnimationPlaying) {
				className += ` animate-button-click`;
			}
		}
	}

	className += ` ${svg.fill[usedVariant].content}`;
	if (size) {
		className += ` text-${size}`;
		classNameIconArea += ` h-${size}`;
	}

	let spacingLeft = "ml-s";
	let spacingRight = "mr-s";
	switch (size) {
		case "s":
			spacingLeft = "ml-xs";
			spacingRight = "mr-xs";
			break;
		case "m":
			spacingLeft = "ml-s";
			spacingRight = "mr-s";
			break;
		case "l":
			spacingLeft = "ml-m";
			spacingRight = "mr-m";
			break;
	}

	className = className.trim();
	const animateAndClick = (event: MouseEvent) => {
		setIsClickAnimationPlaying(true);
		if (onClick) {
			onClick(event);
		}
	};

	const buttonContent = (
		<>
			{leadingIcon ? (
				<Container
					element="span"
					className={children ? spacingRight : "none"}
				>
					{leadingIcon}
				</Container>
			) : (
				<span className={classNameIconArea}></span>
			)}
			{typeof children === "string" ? (
				<Text
					element="span"
					variant={usedVariant}
					size={size}
					fontStyle="bold"
					hover={false}
					focus={false}
					className={"m-auto " + classNameLink.trim()}
				>
					{children}
				</Text>
			) : (
				children
			)}
			{trailingIcon ? (
				<Container
					element="span"
					className={children || leadingIcon ? spacingLeft : ""}
				>
					{trailingIcon}
				</Container>
			) : (
				<span className={classNameIconArea}></span>
			)}
		</>
	);
	return (
		<>
			{href ? (
				<a
					type={type}
					href={href}
					onClick={animateAndClick}
					className={className}
					style={style}
					onAnimationEnd={() => setIsClickAnimationPlaying(false)}
					target={isTargetedToANewTab ? "_blank" : "_self"}
					rel={isTargetedToANewTab ? "noreferrer" : ""}
				>
					{buttonContent}
				</a>
			) : (
				<button
					type={type}
					onClick={animateAndClick}
					className={className}
					style={style}
					disabled={isDisabled}
					onAnimationEnd={() => setIsClickAnimationPlaying(false)}
				>
					{buttonContent}
				</button>
			)}
		</>
	);
};
