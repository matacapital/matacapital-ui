import React from 'react';
import { useTextStyles } from './utils/useTextStyles.ts';
import { TextPropsType } from './types.ts';
import { elementMap, additionalClasses } from './utils/elementMap.ts';
import classNames from 'classnames';

export const Text = ({
  align,
  variant,
  size,
  element = 'none',
  fontFamily = 'primary',
  fontStyle = 'regular',
  hover = false,
  focus = false,
  className,
  children,
}: TextPropsType) => {
  const baseClassName = useTextStyles({
    variant,
    size,
    align,
    fontFamily,
    fontStyle,
    hover,
    focus,
    className,
  });

  const Element = elementMap[element] || 'p';
  const combinedClassName = classNames(
    baseClassName,
    additionalClasses[element],
  );

  return <Element className={combinedClassName}>{children}</Element>;
};
