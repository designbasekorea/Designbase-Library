import React from 'react';
import type { IconProps } from '../types';

const BarChartSquareIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M2.25 2.25h19.5v19.5H2.25zm1.5 1.5v16.5h16.5V3.75z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M8.75 11v6h-1.5v-6zM12.75 9v8h-1.5V9zM16.75 7v10h-1.5V7z" clip-rule="evenodd"/></svg>
);

export default BarChartSquareIcon;
