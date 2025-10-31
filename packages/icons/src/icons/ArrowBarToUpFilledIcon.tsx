import React from 'react';
import type { IconProps } from '../types';

const ArrowBarToUpFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M20 3H4v2h16zM5.293 14.793l1.414 1.414L11 11.914V21h2v-9.086l4.293 4.293 1.414-1.414L12 8.086z"/></svg>
);

export default ArrowBarToUpFilledIcon;
