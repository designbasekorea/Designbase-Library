import React from 'react';
import type { IconProps } from '../types';

const GlobeIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M18.895 2.105c3.807 3.808 3.807 9.983 0 13.79a9.7 9.7 0 0 1-6.145 2.824v1.531H17v1.5H7v-1.5h4.25v-1.531a9.7 9.7 0 0 1-6.145-2.824l1.061-1.061A8.25 8.25 0 1 0 17.833 3.167zM12 2.625a6.375 6.375 0 1 1 0 12.75 6.375 6.375 0 0 1 0-12.75m0 1.5a4.875 4.875 0 1 0 0 9.75 4.875 4.875 0 0 0 0-9.75"/></svg>
);

export default GlobeIcon;
