import { SizeType, VariantType } from '../../../utils/types/types';
export type IconName =
  | 'arrowRight'
  | 'calendar'
  | 'chevronDown'
  | 'circleExclamation'
  | 'circleInfo'
  | 'cornerLB'
  | 'cornerLT'
  | 'cornerRB'
  | 'cornerRT'
  | 'enveloppe'
  | 'floppyDisk'
  | 'sizedPenL'
  | 'sizedPenM'
  | 'sizedPenS'
  | 'play'
  | 'spacer'
  | 'syncAlt'
  | 'triangleExclamation';
export type IconSizeType = Exclude<SizeType, 'xl' | '2xl' | '3xl' | '4xl'>;
export type IconPropsType = {
  icon: IconName;
  size?: IconSizeType;
  variant?: VariantType;
  hover?: boolean;
  focus?: boolean;
  className?: string;
  invertVariant?: boolean;
};
