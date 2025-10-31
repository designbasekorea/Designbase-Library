import React from 'react';
import type { IconProps } from '../types';

const CupboardIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M18.25 5a.25.25 0 0 0-.25-.25H6a.25.25 0 0 0-.25.25v12c0 .138.112.25.25.25h12a.25.25 0 0 0 .25-.25zm1.5 12A1.75 1.75 0 0 1 18 18.75H6A1.75 1.75 0 0 1 4.25 17V5c0-.966.784-1.75 1.75-1.75h12c.966 0 1.75.784 1.75 1.75z"/><path fill="currentColor" d="M7.75 18v3h-1.5v-3zM17.75 18v3h-1.5v-3zM12.75 9v9h-1.5V9z"/><path fill="currentColor" d="M19 8.25v1.5H5v-1.5z"/></svg>
);

export default CupboardIcon;
