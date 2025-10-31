import React from 'react';
import type { IconProps } from '../types';

const BarChartIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M21 20.75H3v-1.5h18zM6.75 17h-1.5V9h1.5zM10.75 17h-1.5v-6h1.5zM14.75 17h-1.5V6h1.5zM18.75 17h-1.5V3h1.5z"/></svg>
);

export default BarChartIcon;
