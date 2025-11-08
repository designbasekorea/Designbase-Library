import React from 'react';
import type { IconProps } from '../types';

const ResizableFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M20 12v7c0 .55-.45 1-1 1h-7v2h7c1.65 0 3-1.35 3-3v-7z"/></svg>
);

export default ResizableFilledIcon;
