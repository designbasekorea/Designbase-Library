import React from 'react';
import type { IconProps } from '../types';

const LayoutAlignBottomFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M22 20H2v2h20zM10 18h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2"/></svg>
);

export default LayoutAlignBottomFilledIcon;
