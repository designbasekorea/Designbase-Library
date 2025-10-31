import React from 'react';
import type { IconProps } from '../types';

const DashboardFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M18 3H6a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3M9 13H6a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3M18 13h-1a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3"/></svg>
);

export default DashboardFilledIcon;
