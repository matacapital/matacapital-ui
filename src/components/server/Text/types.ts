import { SizeType, VariantType } from "../../types.ts";

import { ChildrenComponents } from "../../server-deps.ts";

export type TextPropsType = {
  align?: TextAlignType;
  variant?: VariantType;
  size?: SizeType;
  fontFamily?: FontFamilyType;
  fontStyle?: FontStyleType;
  hover?: boolean;
  focus?: boolean;
  className?: string;
  element?: TextElementType;
  children: ChildrenComponents;
};

export type FontStyleType =
  | "light"
  | "light-italic"
  | "regular"
  | "italic"
  | "medium"
  | "medium-italic"
  | "bold"
  | "bold-italic";

export type TextAlignType =
  | "right"
  | "left"
  | "center"
  | "justify"
  | "start"
  | "end";

export type TextElementType =
  | "none"
  | "blockquote"
  | "q"
  | "abbr"
  | "address"
  | "cite"
  | "bdo"
  | "p"
  | "span"
  | "ul"
  | "ol"
  | "li"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "div";

export type FontFamilyType = "primary" | "secondary";
