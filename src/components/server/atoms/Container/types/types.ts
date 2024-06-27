import { CSSProperties, ChildrenComponents } from '../../../../server-deps.ts';

import {
  BorderSizeType,
  SizeType,
  SpacingType,
  VariantType,
} from '../../../../utils/types/types.ts';

export type ContainerBorderType = {
  size?: BorderSizeType;
  variant?: VariantType;
};

export type ContainerBackgroundType = {
  variant?: VariantType;
};

export type ContainerContentType = {
  variant?: VariantType;
};

export type SpacingPosition =
  | 'top'
  | 'bottom'
  | 'right'
  | 'left'
  | 'vertical'
  | 'horizontal';

export type ContainerSpacingType =
  | SpacingType
  | Partial<Record<SpacingPosition, SizeType>>;

export type ContainerElementType =
  | 'header'
  | 'main'
  | 'nav'
  | 'section'
  | 'article'
  | 'aside'
  | 'footer'
  | 'details'
  | 'summary'
  | 'span'
  | 'label'
  | 'div'
  | 'ul'
  | 'ol'
  | 'li'
  | 'label';

export type ContainerPropsType = {
  background?: ContainerBackgroundType;
  border?: ContainerBorderType;
  content?: ContainerContentType;
  className?: string;
  style?: CSSProperties;
  children?: ChildrenComponents;
  element?: ContainerElementType;
};
