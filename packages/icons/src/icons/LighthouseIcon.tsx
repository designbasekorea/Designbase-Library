import React from 'react';
import type { IconProps } from '../types';

const LighthouseIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m15.679 10.25 1.15 11.5H7.171l1.15-11.5zm-6.85 10h6.343l-.85-8.5H9.678zM12 2.25A3.75 3.75 0 0 1 15.75 6h-1.5a2.25 2.25 0 1 0-4.5 0h-1.5A3.75 3.75 0 0 1 12 2.25"/><path fill="currentColor" d="M17 5.25v1.5H7v-1.5zM19 20.25v1.5H5v-1.5z"/><path fill="currentColor" d="M9.75 6v5h-1.5V6zM15.75 7v5h-1.5V7z"/><path fill="currentColor" d="M17 10.25v1.5H7v-1.5z"/><path fill="currentColor" d="M12.75 7v5h-1.5V7zM12.75 1v2h-1.5V1z"/></svg>
);

export default LighthouseIcon;
