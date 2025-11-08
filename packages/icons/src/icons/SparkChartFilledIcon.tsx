import React from 'react';
import type { IconProps } from '../types';

const SparkChartFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M7.2 18.6c.19.25.49.4.8.4h.14c.36-.05.67-.3.79-.64l2.61-6.96 3.01 1.5c.43.21.94.1 1.24-.28l7-9-1.58-1.23-6.5 8.35-3.27-1.63a.995.995 0 0 0-1.38.54L7.7 15.94 5.8 13.4A1 1 0 0 0 5 13H2v2h2.5zM22 20H2v2h20z"/></svg>
);

export default SparkChartFilledIcon;
