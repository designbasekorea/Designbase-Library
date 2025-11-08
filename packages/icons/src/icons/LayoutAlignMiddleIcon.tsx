import React from 'react';
import type { IconProps } from '../types';

const LayoutAlignMiddleIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M14 4.25c.966 0 1.75.784 1.75 1.75v5.25H22v1.5h-6.25V18A1.75 1.75 0 0 1 14 19.75h-4A1.75 1.75 0 0 1 8.25 18v-5.25H2v-1.5h6.25V6c0-.966.784-1.75 1.75-1.75zm-4 1.5a.25.25 0 0 0-.25.25v12c0 .138.112.25.25.25h4a.25.25 0 0 0 .25-.25V6a.25.25 0 0 0-.25-.25z"/></svg>
);

export default LayoutAlignMiddleIcon;
