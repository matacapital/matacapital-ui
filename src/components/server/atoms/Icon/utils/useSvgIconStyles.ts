import { definition } from '../../../../utils/styles-map/definition.ts';
import classNames from 'classnames';
import { IconPropsType } from '../types.ts';

export const useSvgIconStyles = ({
  variant,
  className = '',
}: Partial<IconPropsType>) => {
  const computedClassName = classNames(
    className,
    variant && definition.svg.fill[variant].content,
  );

  return computedClassName.trim();
};
