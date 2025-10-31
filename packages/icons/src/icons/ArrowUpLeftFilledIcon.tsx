import React from 'react';
import type { IconProps } from '../types';

const ArrowUpLeftFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M17.707 16.293 9.414 8H17V6H6v11h2V9.414l8.293 8.293z"/></svg>
);

export default ArrowUpLeftFilledIcon;
