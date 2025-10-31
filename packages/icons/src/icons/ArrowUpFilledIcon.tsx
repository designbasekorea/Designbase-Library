import React from 'react';
import type { IconProps } from '../types';

const ArrowUpFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M19.707 11.293 12 3.586l-7.707 7.707 1.414 1.414L11 7.414V20h2V7.414l5.293 5.293z"/></svg>
);

export default ArrowUpFilledIcon;
