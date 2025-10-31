import React from 'react';
import type { IconProps } from '../types';

const DashboardIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M6 4.75c-.69 0-1.25.56-1.25 1.25v2c0 .69.56 1.25 1.25 1.25h12c.69 0 1.25-.56 1.25-1.25V6c0-.69-.56-1.25-1.25-1.25zM3.25 6A2.75 2.75 0 0 1 6 3.25h12A2.75 2.75 0 0 1 20.75 6v2A2.75 2.75 0 0 1 18 10.75H6A2.75 2.75 0 0 1 3.25 8zM6 14.75c-.69 0-1.25.56-1.25 1.25v2c0 .69.56 1.25 1.25 1.25h3c.69 0 1.25-.56 1.25-1.25v-2c0-.69-.56-1.25-1.25-1.25zM3.25 16A2.75 2.75 0 0 1 6 13.25h3A2.75 2.75 0 0 1 11.75 16v2A2.75 2.75 0 0 1 9 20.75H6A2.75 2.75 0 0 1 3.25 18zM17 14.75c-.69 0-1.25.56-1.25 1.25v2c0 .69.56 1.25 1.25 1.25h1c.69 0 1.25-.56 1.25-1.25v-2c0-.69-.56-1.25-1.25-1.25zM14.25 16A2.75 2.75 0 0 1 17 13.25h1A2.75 2.75 0 0 1 20.75 16v2A2.75 2.75 0 0 1 18 20.75h-1A2.75 2.75 0 0 1 14.25 18z" clip-rule="evenodd"/></svg>
);

export default DashboardIcon;
