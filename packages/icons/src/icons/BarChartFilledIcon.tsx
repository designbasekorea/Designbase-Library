import React from 'react';
import type { IconProps } from '../types';

const BarChartFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M7 9H5v8h2zM11 11H9v6h2zM15 6h-2v11h2zM19 3h-2v14h2zM21 19H3v2h18z"/></svg>
);

export default BarChartFilledIcon;
