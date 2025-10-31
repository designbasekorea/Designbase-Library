import React from 'react';
import type { IconProps } from '../types';

const LineChartUpIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M4.75 19.25H21v1.5H3.25V3.1h1.5z"/><path fill="currentColor" d="M21.53 8.53 16 14.06l-3-3-4.47 4.47-1.06-1.06L13 8.94l3 3 4.47-4.47z"/></svg>
);

export default LineChartUpIcon;
