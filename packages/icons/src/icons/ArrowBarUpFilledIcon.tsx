import React from 'react';
import type { IconProps } from '../types';

const ArrowBarUpFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M20 19H4v2h16zM11 6.914V16h2V6.914l4.293 4.293 1.414-1.414L12 3.086 5.293 9.793l1.414 1.414z"/></svg>
);

export default ArrowBarUpFilledIcon;
