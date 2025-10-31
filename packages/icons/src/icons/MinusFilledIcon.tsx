import React from 'react';
import type { IconProps } from '../types';

const MinusFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 25" width={size} height={size} {...props}><path fill="currentColor" d="M18 11H6v2h12z"/></svg>
);

export default MinusFilledIcon;
