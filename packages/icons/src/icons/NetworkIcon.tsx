import React from 'react';
import type { IconProps } from '../types';

const NetworkIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M12.75 9v3h-1.5V9zM2.25 14.25h7.5v7.5h-7.5zm1.5 1.5v4.5h4.5v-4.5zM14.25 14.25h7.5v7.5h-7.5zm1.5 1.5v4.5h4.5v-4.5z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M5.25 11.25h13.5V15h-1.5v-2.25H6.75V15h-1.5zM8.25 2.25h7.5v7.5h-7.5zm1.5 1.5v4.5h4.5v-4.5z" clip-rule="evenodd"/></svg>
);

export default NetworkIcon;
