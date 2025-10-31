import React from 'react';
import type { IconProps } from '../types';

const WindowTerminalIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M5 4.75c-.69 0-1.25.56-1.25 1.25v12c0 .69.56 1.25 1.25 1.25h14c.69 0 1.25-.56 1.25-1.25V6c0-.69-.56-1.25-1.25-1.25zM2.25 6A2.75 2.75 0 0 1 5 3.25h14A2.75 2.75 0 0 1 21.75 6v12A2.75 2.75 0 0 1 19 20.75H5A2.75 2.75 0 0 1 2.25 18z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M8.94 12 6.47 9.53l1.06-1.06L11.06 12l-3.53 3.53-1.06-1.06zM18 15.75h-5v-1.5h5z" clip-rule="evenodd"/></svg>
);

export default WindowTerminalIcon;
