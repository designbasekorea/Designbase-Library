import React from 'react';
import type { IconProps } from '../types';

const LayoutAlignMiddleFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M22 11h-6V6c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v5H2v2h6v5c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-5h6z"/></svg>
);

export default LayoutAlignMiddleFilledIcon;
