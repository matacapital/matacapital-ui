import { SizeType, VariantType } from "../../types.ts";

export type IconPropsType = {
  size?: Exclude<SizeType, "3xl" | "4xl">;
  variant?: VariantType;
  onClick?: (event: MouseEvent) => void;
  hover?: boolean;
  focus?: boolean;
  className?: string;
  invertVariant?: boolean;
};
