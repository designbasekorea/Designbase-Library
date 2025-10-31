import React from 'react';
import type { IconProps } from '../types';

const TextIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M21.75 7h-1.5V4.75h-7.5v14.5H15v1.5H9v-1.5h2.25V4.75h-7.5V7h-1.5V3.25h19.5z"/></svg>
);

export default TextIcon;
