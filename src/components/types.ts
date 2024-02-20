import { ChildrenComponents } from "./server-deps.ts";

export type BasePropsType = {
  children: ChildrenComponents;
  fluid?: "none" | "mobile" | "all";
};

export type CallbackType = (arg: string) => void;

export type EventType =
  | "focus"
  | "hover";

export type VariantStateType = "content" | "default" | "focus";

export type VariantType =
  | "base1"
  | "base2"
  | "base3"
  | "base4"
  | "danger"
  | "info"
  | "primary"
  | "accent"
  | "secondary"
  | "neutral"
  | "success"
  | "warning"
  | "chart1"
  | "chart2"
  | "chart3"
  | "chart4"
  | "chart5"
  | "chart6"
  | "chart7"
  | "chart8"
  | "chart9"
  | "chartothers"
  | "disabled";

export type RadiusCornerType = "all" | "top" | "right" | "bottom" | "left";

export type RadiusType =
  | "none"
  | "full"
  | Partial<
    Record<RadiusCornerType, "none" | "xs" | "s" | "m" | "l" | "xl">
  >;

export type BorderSizeType =
  | "none"
  | "xs"
  | "s"
  | "m"
  | "l"
  | "xl";

export type SizeType =
  | "xs"
  | "s"
  | "m"
  | "l"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl";

export type TransitionDurationType =
  | "none"
  | Exclude<SizeType, "xl" | "2xl" | "3xl" | "4xl">;

export type SpacingType = "none" | SizeType;
