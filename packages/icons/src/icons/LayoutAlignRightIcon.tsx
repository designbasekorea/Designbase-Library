import React from 'react';
import type { IconProps } from '../types';

const LayoutAlignRightIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M21.75 2v20h-1.5V2zM16.25 10a.25.25 0 0 0-.25-.25H4a.25.25 0 0 0-.25.25v4c0 .138.112.25.25.25h12a.25.25 0 0 0 .25-.25zm1.5 4A1.75 1.75 0 0 1 16 15.75H4A1.75 1.75 0 0 1 2.25 14v-4c0-.966.784-1.75 1.75-1.75h12c.966 0 1.75.784 1.75 1.75z"/></svg>
);

export default LayoutAlignRightIcon;
