import React from 'react';
import type { IconProps } from '../types';

const SunsetIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M23 11.25v1.5H1v-1.5zM20 15.25v1.5H4v-1.5zM16 19.25v1.5H8v-1.5zM12 2.25A8.75 8.75 0 0 1 20.75 11h-1.5a7.25 7.25 0 0 0-14.5 0h-1.5A8.75 8.75 0 0 1 12 2.25"/></svg>
);

export default SunsetIcon;
