import React from 'react';
import type { IconProps } from '../types';

const ArrowBarUpIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M20 20.75H4v-1.5h16zM18.53 9.97l-1.06 1.06-4.72-4.72V16h-1.5V6.31l-4.72 4.72-1.06-1.06L12 3.44z"/></svg>
);

export default ArrowBarUpIcon;
