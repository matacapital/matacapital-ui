import { ContainerPropsType } from './types/types.ts';
import { useContainerStyles } from './utils/useContainerStyles.ts';
import elementsMap from './utils/elementsMap.ts';
import React from 'react';

export const Container = ({
  children,
  background,
  content,
  border,
  className,
  element,
  style,
}: ContainerPropsType) => {
  const combinedClassName = useContainerStyles({
    background,
    content,
    border,
    className,
  });

  const Element = element ? elementsMap[element] : 'div';

  return (
    <Element
      style={style}
      className={combinedClassName}
    >
      {children}
    </Element>
  );
};
