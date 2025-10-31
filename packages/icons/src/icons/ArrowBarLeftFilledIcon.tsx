import React from 'react';
import type { IconProps } from '../types';

const ArrowBarLeftFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M21 4h-2v16h2zM11.207 6.707 9.793 5.293 3.086 12l6.707 6.707 1.414-1.414L6.914 13H16v-2H6.914z"/></svg>
);

export default ArrowBarLeftFilledIcon;
