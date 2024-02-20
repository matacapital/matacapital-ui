import { definition } from "../../definition.ts";
import { TextPropsType } from "./types.ts";

export const Text = ({
	align,
	variant,
	size,
	element = "none",
	fontFamily = "primary",
	fontStyle = "regular",
	hover = false,
	focus = false,
	className,
	children,
}: TextPropsType) => {
	className = className ?? "";
	if (variant) {
		className += " " + definition.text.color[variant].content;
	}
	if (size) {
		className += " " + definition.text.size[size];
	}
	if (align) {
		className += " " + definition.text.align[align];
	}
	className += " " + definition.text.font[fontFamily][fontStyle];

	if (hover === true && variant) {
		className += " " + definition.text.color[variant].event.hover;
	}
	if (focus === true && variant) {
		className += " " + definition.text.color[variant].event.focus;
	}

	className = className.trim();

	switch (element) {
		case "blockquote":
			return <blockquote className={className}>{children}</blockquote>;
		case "q":
			return <q className={className}>{children}</q>;
		case "abbr":
			return <abbr className={className}>{children}</abbr>;
		case "address":
			return <address className={className}>{children}</address>;
		case "cite":
			return <cite className={className}>{children}</cite>;
		case "bdo":
			return <bdo className={className}>{children}</bdo>;
		case "span":
			return <span className={className}>{children}</span>;
		case "p":
			return <p className={className}>{children}</p>;
		case "li":
			return <li className={className}>{children}</li>;
		case "ul":
			return <ul className={className}>{children}</ul>;
		case "ol":
			return <ol className={className}>{children}</ol>;
		case "h1":
			return <h1 className={className}>{children}</h1>;
		case "h2":
			return <h2 className={className}>{children}</h2>;
		case "h3":
			return <h3 className={className}>{children}</h3>;
		case "h4":
			return <h4 className={className}>{children}</h4>;
		case "h5":
			return <h5 className={className}>{children}</h5>;
		case "h6":
			return <h6 className={className}>{children}</h6>;
		case "div":
			return <div className={className}>{children}</div>;
	}

	return <>{children}</>;
};
