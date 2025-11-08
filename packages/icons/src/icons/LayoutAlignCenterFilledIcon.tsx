import React from 'react';
import type { IconProps } from '../types';

const LayoutAlignCenterFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M18 8h-5V2h-2v6H6c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h5v6h2v-6h5c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2"/></svg>
);

export default LayoutAlignCenterFilledIcon;
