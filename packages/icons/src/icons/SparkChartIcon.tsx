import React from 'react';
import type { IconProps } from '../types';

const SparkChartIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M22 21.75H2v-1.5h20zm.592-18.29-7 9a.75.75 0 0 1-.927.21l-3.256-1.627-2.707 7.22a.75.75 0 0 1-1.302.187l-2.775-3.7H2v-1.5h3a.75.75 0 0 1 .6.3l2.178 2.904 2.52-6.718.031-.072a.75.75 0 0 1 1.006-.335l3.45 1.725 6.623-8.515z"/></svg>
);

export default SparkChartIcon;
