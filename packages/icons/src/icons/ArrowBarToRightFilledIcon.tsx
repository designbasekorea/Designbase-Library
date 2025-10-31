import React from 'react';
import type { IconProps } from '../types';

const ArrowBarToRightFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M21 4h-2v16h2zM7.793 6.707 12.086 11H3v2h9.086l-4.293 4.293 1.414 1.414L15.914 12 9.207 5.293z"/></svg>
);

export default ArrowBarToRightFilledIcon;
