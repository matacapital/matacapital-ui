import React from 'react';
import { IconPropsType, IconSizeType } from './types';
import { iconPathsMap } from './utils/iconPathsMap';
import { useSvgIconStyles } from './utils/useSvgIconStyles';

export const SvgIcon = ({
  icon,
  className,
  variant,
  size = 'm',
}: IconPropsType) => {
  const combinedClassName = useSvgIconStyles({
    variant,
    className,
  });

  const { width, height } = getSize(size);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={combinedClassName}
      width={width}
      height={height}
      viewBox="0 0 448 512"
    >
      <path d={iconPathsMap[icon]} />
    </svg>
  );
};

// TODO : Ajouter au dossier utils global celon les besoins
const getSize = (size: IconSizeType): { width: number; height: number } => {
  const sizeMap: Record<IconSizeType, number> = {
    xs: 8,
    s: 16,
    m: 24,
    l: 32,
  };

  return { width: sizeMap[size], height: sizeMap[size] };
};
