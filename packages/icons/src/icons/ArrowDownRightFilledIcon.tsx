import React from 'react';
import type { IconProps } from '../types';

const ArrowDownRightFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M16 7v7.586L7.707 6.293 6.293 7.707 14.586 16H7v2h11V7z"/></svg>
);

export default ArrowDownRightFilledIcon;
