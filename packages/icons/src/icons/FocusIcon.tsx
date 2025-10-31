import React from 'react';
import type { IconProps } from '../types';

const FocusIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M12 8.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5M7.25 12a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0M4 3.75a.25.25 0 0 0-.25.25v3h-1.5V4c0-.966.784-1.75 1.75-1.75h3v1.5zM20 3.75h-3v-1.5h3c.966 0 1.75.784 1.75 1.75v3h-1.5V4a.25.25 0 0 0-.25-.25M20.25 20v-3h1.5v3A1.75 1.75 0 0 1 20 21.75h-3v-1.5h3a.25.25 0 0 0 .25-.25M3.75 17v3c0 .138.112.25.25.25h3v1.5H4A1.75 1.75 0 0 1 2.25 20v-3z" clip-rule="evenodd"/></svg>
);

export default FocusIcon;
