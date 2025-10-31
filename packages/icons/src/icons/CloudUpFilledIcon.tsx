import React from 'react';
import type { IconProps } from '../types';

const CloudUpFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M20.324 10.354A8.01 8.01 0 0 0 12.5 4C9.205 4 6.232 6.065 5.048 9.099A5.48 5.48 0 0 0 .5 14.5C.5 17.532 2.967 20 6 20h12.5c2.757 0 5-2.243 5-5a4.98 4.98 0 0 0-3.176-4.646m-6.031 2.317L13 11.378V16h-2v-4.622l-1.293 1.293-1.414-1.414L12 7.55l3.707 3.707z"/></svg>
);

export default CloudUpFilledIcon;
