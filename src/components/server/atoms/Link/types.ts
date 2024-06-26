import { ChildrenComponents } from '../../../server-deps.ts';
import { SizeType, VariantType } from '../../../types.ts';
import { FontFamilyType, FontStyleType } from '../../Text/types.ts';

export type LinkPropsType = {
  variant?: VariantType;
  href?: string;
  isTargetedToANewTab?: boolean;
  fontSize?: SizeType;
  fontFamily?: FontFamilyType;
  fontStyle?: FontStyleType;
  className?: string;
  children: ChildrenComponents;
};
