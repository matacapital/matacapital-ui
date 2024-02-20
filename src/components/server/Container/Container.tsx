import { ContainerPropsType } from "./types.ts";
import { definition } from "../../definition.ts";


export const Container = ({
	children,
	background,
	content,
	border,
	className,
	element,
	style,
}: ContainerPropsType) => {
	className = className ?? "";

	const { size = "xs", variant } = border ?? {};
	if (variant) {
		className += ` ${definition.border.color[variant].content}`;
		className += ` ${definition.border.size[size]}`;
	}

	if (content) {
		const { variant } = content ?? {};
		if (variant) {
			className += ` border-${variant}-content`;
		}
	}

	if (background) {
		const { variant } = background ?? {};

		if (variant) {
			className += ` ${definition.background.color[variant].default}`;
		}
		if (!content && variant) {
			className += ` ${definition.text.color[variant].content}`;
		}
	}

	className = className.trim();

	switch (element) {
		case "header":
			return (
				<header
					style={style}
					className={className}
				>
					{children}
				</header>
			);
		case "main":
			return (
				<main
					style={style}
					className={className}
				>
					{children}
				</main>
			);
		case "nav":
			return (
				<nav
					style={style}
					className={className}
				>
					{children}
				</nav>
			);
		case "section":
			return (
				<section
					style={style}
					className={className}
				>
					{children}
				</section>
			);
		case "article":
			return (
				<article
					style={style}
					className={className}
				>
					{children}
				</article>
			);
		case "aside":
			return (
				<aside
					style={style}
					className={className}
				>
					{children}
				</aside>
			);
		case "footer":
			return (
				<footer
					style={style}
					className={className}
				>
					{children}
				</footer>
			);
		case "details":
			return (
				<details
					style={style}
					className={className}
				>
					{children}
				</details>
			);
		case "summary":
			return (
				<summary
					style={style}
					className={className}
				>
					{children}
				</summary>
			);
		case "span":
			return (
				<span
					style={style}
					className={className}
				>
					{children}
				</span>
			);
		case "label":
			return (
				<label
					style={style}
					className={className}
				>
					{children}
				</label>
			);
		case "ul":
			return (
				<ul
					style={style}
					className={className}
				>
					{children}
				</ul>
			);
		case "ol":
			return (
				<ol
					style={style}
					className={className}
				>
					{children}
				</ol>
			);
		case "li":
			return (
				<li
					style={style}
					className={className}
				>
					{children}
				</li>
			);
	}

	return (
		<div
			style={style}
			className={className}
		>
			{children}
		</div>
	);
};
