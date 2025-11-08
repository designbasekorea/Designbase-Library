import React from 'react';
import type { IconProps } from '../types';

const AlignRightFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M21 6H3v2h18zM21 11h-9v2h9zM21 16H7v2h14z"/></svg>
);

export default AlignRightFilledIcon;
