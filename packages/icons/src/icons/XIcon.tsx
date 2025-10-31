import React from 'react';
import type { IconProps } from '../types';

const XIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M17.801 3h3.066l-6.731 7.638L22 21h-6.171l-4.832-6.297L5.466 21H2.4l7.13-8.17L2 3h6.325l4.365 5.752zm-1.073 16.207h1.7L7.432 4.727H5.605z"/></svg>
);

export default XIcon;
