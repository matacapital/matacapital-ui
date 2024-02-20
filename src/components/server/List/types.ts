import { ChildrenComponents } from "../../server-deps.ts";
import { TextElementType } from "../Text/mod.ts";

export type ListStyleType = "ordered" | "unordered" | "none";
export type ListElementStyleType = "decimal" | "disc" | "none";

export type ListElementType<T extends "type" | "style" = "type" | "style"> = (
  Record<
    T,
    Record<ListStyleType, T extends "type" ? TextElementType : ListElementStyleType>
  >
);

export type ListPropsType = {
  children: ChildrenComponents;
  size?: "s" | "m";
  style?: ListStyleType;
  className?: string;
};
