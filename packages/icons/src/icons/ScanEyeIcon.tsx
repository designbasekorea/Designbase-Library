import React from 'react';
import type { IconProps } from '../types';

const ScanEyeIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/><path fill="currentColor" fillRule="evenodd" d="M4 3.75a.25.25 0 0 0-.25.25v3h-1.5V4c0-.966.784-1.75 1.75-1.75h3v1.5zM20 3.75h-3v-1.5h3c.966 0 1.75.784 1.75 1.75v3h-1.5V4a.25.25 0 0 0-.25-.25M20.25 20v-3h1.5v3A1.75 1.75 0 0 1 20 21.75h-3v-1.5h3a.25.25 0 0 0 .25-.25M3.75 17v3c0 .138.112.25.25.25h3v1.5H4A1.75 1.75 0 0 1 2.25 20v-3zM5.298 11.736C6.287 9.104 8.927 7.25 12 7.25s5.713 1.854 6.702 4.486l.1.264-.1.264c-.989 2.632-3.629 4.486-6.702 4.486s-5.713-1.854-6.702-4.486l-.1-.264zM6.81 12c.836 1.89 2.828 3.25 5.19 3.25s4.355-1.36 5.19-3.25c-.835-1.89-2.828-3.25-5.19-3.25S7.646 10.11 6.81 12" clipRule="evenodd"/></svg>
);

export default ScanEyeIcon;
