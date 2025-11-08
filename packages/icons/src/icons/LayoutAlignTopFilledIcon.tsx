import React from 'react';
import type { IconProps } from '../types';

const LayoutAlignTopFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M22 2H2v2h20zM14 6h-4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2"/></svg>
);

export default LayoutAlignTopFilledIcon;
