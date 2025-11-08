import React from 'react';
import type { IconProps } from '../types';

const ResizableIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M20.25 19v-7h1.5v7A2.756 2.756 0 0 1 19 21.75h-7v-1.5h7c.686 0 1.25-.564 1.25-1.25"/></svg>
);

export default ResizableIcon;
