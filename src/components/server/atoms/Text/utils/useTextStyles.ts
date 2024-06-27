import { definition } from '../../../../utils/styles-map/definition.ts';
import classNames from 'classnames';
import { TextPropsType } from '../types';

export const useTextStyles = ({
  variant,
  size,
  align,
  fontFamily,
  fontStyle,
  hover,
  focus,
  className,
}: Partial<TextPropsType>) => {
  return classNames(
    className,
    variant && definition.text.color[variant]?.content,
    size && definition.text.size[size],
    align && definition.text.align[align],
    fontFamily && fontStyle && definition.text.font[fontFamily]?.[fontStyle],
    hover && variant && definition.text.color[variant]?.event?.hover,
    focus && variant && definition.text.color[variant]?.event?.focus,
  ).trim();
};
