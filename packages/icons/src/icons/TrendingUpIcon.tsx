import React from 'react';
import type { IconProps } from '../types';

const TrendingUpIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M22 11V5h-6"/><path fill="currentColor" fill-rule="evenodd" d="M21.53 6.53 13 15.06l-3-3-6.47 6.47-1.06-1.06L10 9.94l3 3 7.47-7.47z" clip-rule="evenodd"/></svg>
);

export default TrendingUpIcon;
