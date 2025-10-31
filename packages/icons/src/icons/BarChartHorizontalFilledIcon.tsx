import React from 'react';
import type { IconProps } from '../types';

const BarChartHorizontalFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M5 3v18H3V3zM21 19H7v-2h14zM18 15H7v-2h11zM13 11H7V9h6zM15 7H7V5h8z"/></svg>
);

export default BarChartHorizontalFilledIcon;
