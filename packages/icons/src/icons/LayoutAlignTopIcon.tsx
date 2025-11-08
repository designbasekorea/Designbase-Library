import React from 'react';
import type { IconProps } from '../types';

const LayoutAlignTopIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M22 2.25v1.5H2v-1.5zM14 20.25a.25.25 0 0 0 .25-.25V8a.25.25 0 0 0-.25-.25h-4a.25.25 0 0 0-.25.25v12c0 .138.112.25.25.25zm-4 1.5A1.75 1.75 0 0 1 8.25 20V8c0-.966.784-1.75 1.75-1.75h4c.966 0 1.75.784 1.75 1.75v12A1.75 1.75 0 0 1 14 21.75z"/></svg>
);

export default LayoutAlignTopIcon;
