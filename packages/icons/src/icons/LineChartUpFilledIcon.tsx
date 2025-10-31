import React from 'react';
import type { IconProps } from '../types';

const LineChartUpFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M5 3.1V19h16v2H3V3.1zm16.707 5.607L16 14.414l-3-3-4.293 4.293-1.414-1.414L13 8.586l3 3 4.293-4.293z"/></svg>
);

export default LineChartUpFilledIcon;
