import React from 'react';
import type { IconProps } from '../types';

const LayoutAlignLeftIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M3.75 22h-1.5V2h1.5zM20 8.25c.966 0 1.75.784 1.75 1.75v4A1.75 1.75 0 0 1 20 15.75H8A1.75 1.75 0 0 1 6.25 14v-4c0-.966.784-1.75 1.75-1.75zM8 9.75a.25.25 0 0 0-.25.25v4c0 .138.112.25.25.25h12a.25.25 0 0 0 .25-.25v-4a.25.25 0 0 0-.25-.25z"/></svg>
);

export default LayoutAlignLeftIcon;
