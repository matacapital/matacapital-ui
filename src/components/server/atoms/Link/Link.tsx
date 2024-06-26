import React from 'react';
import { Text } from '../Text/text.module.ts';
import { LinkPropsType } from './types.ts';

export const Link = ({
  variant,
  href = '#',
  isTargetedToANewTab = false,
  fontSize,
  fontFamily,
  fontStyle,
  className,
  children,
}: LinkPropsType) => (
  <a
    className={className}
    href={href}
    rel={isTargetedToANewTab ? 'noreferrer' : ''}
    target={isTargetedToANewTab ? '_blank' : '_self'}
  >
    <Text
      className={'underline hover:no-underline'}
      element={'span'}
      fontFamily={fontFamily}
      fontStyle={fontStyle}
      size={fontSize}
      variant={variant}
    >
      {children}
    </Text>
  </a>
);
