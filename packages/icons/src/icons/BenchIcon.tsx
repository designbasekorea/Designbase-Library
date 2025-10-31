import React from 'react';
import type { IconProps } from '../types';

const BenchIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M21 9.75h-3.25v2.61H23v1.5h-2.25V19h-1.5v-5.14H4.75V19h-1.5v-5.14H1v-1.5h5.25V9.75H3v-1.5h18zM7.75 12.36h8.5V9.75h-8.5zM21 6.75H3v-1.5h18z"/></svg>
);

export default BenchIcon;
