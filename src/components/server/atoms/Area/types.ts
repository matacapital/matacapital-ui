import { ChildrenComponents } from "../../server-deps.ts";
import { VariantType } from "../../types.ts";

export type AreaPropsType = {
  variant?: VariantType;
  children: ChildrenComponents;
  fluid?: "mobile" | "all" | "none";
  mobileFluid?: boolean;
  className?: string;
  element?:
    | "header"
    | "main"
    | "nav"
    | "section"
    | "article"
    | "aside"
    | "footer"
    | "details"
    | "summary"
    | "div";
};
