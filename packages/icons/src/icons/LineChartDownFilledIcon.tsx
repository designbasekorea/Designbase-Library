import React from 'react';
import type { IconProps } from '../types';

const LineChartDownFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M5 3.1V19h16v2H3V3.1zm8 8.486 3-3 5.707 5.707-1.414 1.414L16 11.414l-3 3-5.707-5.707 1.414-1.414z"/></svg>
);

export default LineChartDownFilledIcon;
