import React from 'react';
import type { IconProps } from '../types';

const SwitchHorizontalIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M20 14.25a.75.75 0 0 1 .53 1.28l-4.99 4.99-1.06-1.06 3.71-3.71H3v-1.5zM9.52 4.54 5.81 8.25H21v1.5H4a.75.75 0 0 1-.53-1.28l4.99-4.99z"/></svg>
);

export default SwitchHorizontalIcon;
