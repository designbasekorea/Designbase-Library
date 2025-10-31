import React from 'react';
import type { IconProps } from '../types';

const TrendingDownFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M19.707 15.293 13 8.586l-3 3-6.293-6.293-1.414 1.414L10 14.414l3-3 5.293 5.293L16 19h6v-6z"/></svg>
);

export default TrendingDownFilledIcon;
