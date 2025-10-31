import React from 'react';
import type { IconProps } from '../types';

const ResizableIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M18.465 18.465H9V20h11V9h-1.535z" clip-rule="evenodd"/></svg>
);

export default ResizableIcon;
