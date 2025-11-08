import React from 'react';
import type { IconProps } from '../types';

const LayoutAlignCenterIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12.75 8.25H18c.966 0 1.75.784 1.75 1.75v4A1.75 1.75 0 0 1 18 15.75h-5.25V22h-1.5v-6.25H6A1.75 1.75 0 0 1 4.25 14v-4c0-.966.784-1.75 1.75-1.75h5.25V2h1.5zM6 9.75a.25.25 0 0 0-.25.25v4c0 .138.112.25.25.25h12a.25.25 0 0 0 .25-.25v-4a.25.25 0 0 0-.25-.25z"/></svg>
);

export default LayoutAlignCenterIcon;
