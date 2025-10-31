import React from 'react';
import type { IconProps } from '../types';

const ArrowBarToLeftFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M5 3.8H3v16h2zM21 11h-9.086l4.293-4.293-1.414-1.414L8.086 12l6.707 6.707 1.414-1.414L11.914 13H21z"/></svg>
);

export default ArrowBarToLeftFilledIcon;
