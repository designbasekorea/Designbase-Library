import React from 'react';
import type { IconProps } from '../types';

const BarChartSquareFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M2 2v20h20V2zm7 15H7v-6h2zm4 0h-2V9h2zm4 0h-2V7h2z"/></svg>
);

export default BarChartSquareFilledIcon;
