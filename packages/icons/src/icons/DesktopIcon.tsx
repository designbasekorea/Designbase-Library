import React from 'react';
import type { IconProps } from '../types';

const DesktopIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M5 4.75c-.69 0-1.25.56-1.25 1.25v9c0 .69.56 1.25 1.25 1.25h14c.69 0 1.25-.56 1.25-1.25V6c0-.69-.56-1.25-1.25-1.25zM2.25 6A2.75 2.75 0 0 1 5 3.25h14A2.75 2.75 0 0 1 21.75 6v9A2.75 2.75 0 0 1 19 17.75H5A2.75 2.75 0 0 1 2.25 15zM16 20.75H8v-1.5h8z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M11.25 20v-3h1.5v3z" clipRule="evenodd"/></svg>
);

export default DesktopIcon;
