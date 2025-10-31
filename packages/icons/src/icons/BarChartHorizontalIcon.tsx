import React from 'react';
import type { IconProps } from '../types';

const BarChartHorizontalIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M4.75 21h-1.5V3h1.5zM21 18.75H7v-1.5h14zM18 14.75H7v-1.5h11zM13 10.75H7v-1.5h6zM15 6.75H7v-1.5h8z"/></svg>
);

export default BarChartHorizontalIcon;
