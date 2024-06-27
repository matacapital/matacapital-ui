import { definition } from '../../../../utils/styles-map/definition.ts';
import classNames from 'classnames';
import { ContainerPropsType } from '../types/types.ts';

export const useContainerStyles = ({
  background,
  content,
  border,
  className = '',
}: Partial<ContainerPropsType>) => {
  const { size = 'xs', variant: borderVariant } = border ?? {};
  const contentVariant = content?.variant;
  const backgroundVariant = background?.variant;

  const computedClassName = classNames(
    className,
    borderVariant && {
      [definition.border.color[borderVariant].content]: true,
      [definition.border.size[size]]: true,
    },
    contentVariant && {
      [`border-${contentVariant}-content`]: true,
    },
    backgroundVariant && {
      [definition.background.color[backgroundVariant].default]: true,
      [definition.text.color[backgroundVariant].content]: !content,
    },
  );

  return computedClassName.trim();
};
