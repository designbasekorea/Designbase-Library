import React from 'react';
import type { IconProps } from '../types';

const ArrowUpRightIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M17.75 17h-1.5V8.81l-8.72 8.72-1.06-1.06 8.72-8.72H7v-1.5h10.75z"/></svg>
);

export default ArrowUpRightIcon;
