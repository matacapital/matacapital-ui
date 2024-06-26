import { SizeType, VariantType } from "../../types.ts";
import { ChildrenComponents } from "../../server-deps.ts";
import {
  FontFamilyType,
  FontStyleType,
  TextAlignType,
} from '../atoms/Text/types.ts';

export type ParagraphPropsType = {
  size?: SizeType;
  variant?: VariantType;
  fontFamily?: FontFamilyType;
  fontStyle?: FontStyleType;
  className?: string;
  align?: TextAlignType;
  children: ChildrenComponents;
};
