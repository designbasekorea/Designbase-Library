import React from 'react';
import type { IconProps } from '../types';

const TrendingDownIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M16 19h6v-6"/><path fill="currentColor" fillRule="evenodd" d="m2.47 6.53 1.06-1.06L10 11.94l3-3 8.53 8.53-1.06 1.06L13 11.06l-3 3z" clipRule="evenodd"/></svg>
);

export default TrendingDownIcon;
