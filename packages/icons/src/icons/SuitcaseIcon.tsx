import React from 'react';
import type { IconProps } from '../types';

const SuitcaseIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M17.25 8a.25.25 0 0 0-.25-.25H7a.25.25 0 0 0-.25.25v12c0 .138.112.25.25.25h10a.25.25 0 0 0 .25-.25zm1.5 12A1.75 1.75 0 0 1 17 21.75H7A1.75 1.75 0 0 1 5.25 20V8c0-.966.784-1.75 1.75-1.75h10c.966 0 1.75.784 1.75 1.75z"/><path fill="currentColor" d="M15.25 4c0-.69-.56-1.25-1.25-1.25h-4c-.69 0-1.25.56-1.25 1.25v2.25h6.5zm1.5 3.75h-9.5V4A2.75 2.75 0 0 1 10 1.25h4A2.75 2.75 0 0 1 16.75 4zM7.75 21v2h-1.5v-2zM17.75 21v2h-1.5v-2z"/></svg>
);

export default SuitcaseIcon;
