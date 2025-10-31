import React from 'react';
import type { IconProps } from '../types';

const ClosetIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M18.25 4a.25.25 0 0 0-.25-.25H6a.25.25 0 0 0-.25.25v15c0 .138.112.25.25.25h12a.25.25 0 0 0 .25-.25zm1.5 15A1.75 1.75 0 0 1 18 20.75H6A1.75 1.75 0 0 1 4.25 19V4c0-.966.784-1.75 1.75-1.75h12c.966 0 1.75.784 1.75 1.75z"/><path fill="currentColor" d="M7.75 20v3h-1.5v-3zM17.75 20v3h-1.5v-3zM12.75 3v17h-1.5V3z"/></svg>
);

export default ClosetIcon;
