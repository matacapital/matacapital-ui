'use client';

import { Container } from '../../server/atoms/Container/container.module.ts';
import { definition } from '../../styles-map/definition.ts';
import { Text } from '../../server/atoms/Text/text.module.ts';
import { ButtonPropsType } from './types.ts';
import { useState, MouseEvent } from '../../client-deps.ts';
import React from 'react';

export const Button = ({
  type = 'button',
  variant = 'primary',
  isStyledAsLink = false,
  size = 'm',
  children,
  onClick,
  className,
  style,
  leadingIcon,
  trailingIcon,
  isDisabled = false,
  href,
  isTargetedToANewTab = false,
}: ButtonPropsType) => {
  className = className ?? '';

  const [isClickAnimationPlaying, setIsClickAnimationPlaying] = useState(false);
  let classNameLink = '';
  let classNameIconArea = '';

  const {
    background: { color },
    svg,
  } = definition;
  //save current variant
  let usedVariant = variant;

  //default class
  className +=
    ' ' +
    'rounded-btn group leading-none inline-flex flex-row items-center border-none outline-none focus:outline-none';

  if (isDisabled) {
    usedVariant = 'disabled';
    if (isStyledAsLink) {
      //todo : if ButtonLink are used with isDisabled=true, we have to find a better way to show disabled link whithout replace variant by base1 colors
      usedVariant = 'base1';
      className += ' ' + 'opacity-50';
    }
  }

  //link style
  if (isStyledAsLink) {
    classNameLink += ` underline`;
    if (!isDisabled) {
      classNameLink += ` group-hover:no-underline hover:no-underline`;
    }
  }

  //buttons style
  if (!isStyledAsLink) {
    className += ` ${color[usedVariant].default} p-4`;

    //add effects if not disabled
    if (!isDisabled) {
      className += ` ${color[usedVariant].event.hover} transition-transform ease-in-out duration-l`;

      if (isClickAnimationPlaying) {
        className += ` animate-button-click`;
      }
    }
  }

  className += ` ${svg.fill[usedVariant].content}`;
  if (size) {
    className += ` text-${size}`;
    classNameIconArea += ` h-${size}`;
  }

  let spacingLeft = 'ml-s';
  let spacingRight = 'mr-s';
  switch (size) {
    case 's':
      spacingLeft = 'ml-xs';
      spacingRight = 'mr-xs';
      break;
    case 'm':
      spacingLeft = 'ml-s';
      spacingRight = 'mr-s';
      break;
    case 'l':
      spacingLeft = 'ml-m';
      spacingRight = 'mr-m';
      break;
  }

  className = className.trim();
  const animateAndClick = (event: MouseEvent) => {
    setIsClickAnimationPlaying(true);
    if (onClick) {
      onClick(event);
    }
  };

  const buttonContent = (
    <>
      {leadingIcon ? (
        <Container
          className={children ? spacingRight : 'none'}
          element="span"
        >
          {leadingIcon}
        </Container>
      ) : (
        <span className={classNameIconArea}></span>
      )}
      {typeof children === 'string' ? (
        <Text
          className={'m-auto ' + classNameLink.trim()}
          element="span"
          focus={false}
          fontStyle="bold"
          hover={false}
          size={size}
          variant={usedVariant}
        >
          {children}
        </Text>
      ) : (
        children
      )}
      {trailingIcon ? (
        <Container
          className={children || leadingIcon ? spacingLeft : ''}
          element="span"
        >
          {trailingIcon}
        </Container>
      ) : (
        <span className={classNameIconArea}></span>
      )}
    </>
  );
  return (
    <>
      {href ? (
        <a
          className={className}
          href={href}
          rel={isTargetedToANewTab ? 'noreferrer' : ''}
          style={style}
          target={isTargetedToANewTab ? '_blank' : '_self'}
          type={type}
          onAnimationEnd={() => setIsClickAnimationPlaying(false)}
          onClick={animateAndClick}
        >
          {buttonContent}
        </a>
      ) : (
        <button
          className={className}
          disabled={isDisabled}
          style={style}
          type={type}
          onAnimationEnd={() => setIsClickAnimationPlaying(false)}
          onClick={animateAndClick}
        >
          {buttonContent}
        </button>
      )}
    </>
  );
};
