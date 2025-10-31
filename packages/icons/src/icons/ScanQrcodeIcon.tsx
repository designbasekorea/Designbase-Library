import React from 'react';
import type { IconProps } from '../types';

const ScanQrcodeIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M2.25 4c0-.964.786-1.75 1.75-1.75h3v1.5H4a.253.253 0 0 0-.25.25v3h-1.5zM20.25 4a.253.253 0 0 0-.25-.25h-3v-1.5h3c.964 0 1.75.786 1.75 1.75v3h-1.5zM20.25 20v-3h1.5v3c0 .964-.786 1.75-1.75 1.75h-3v-1.5h3c.136 0 .25-.114.25-.25M2.25 20v-3h1.5v3c0 .136.114.25.25.25h3v1.5H4c-.964 0-1.75-.786-1.75-1.75M9.5 7.5v2h-2v-2zM11 6H6v5h5zM16.5 7.5v2h-2v-2zM18 6h-5v5h5zM9.5 14.5v2h-2v-2zM11 13H6v5h5zM14.5 16.5H13V18h1.5zM18 15h-1.5v3H18z"/><path fill="currentColor" d="M18 15h-3v1.5h3zM14.5 13H13v1.5h1.5z"/></svg>
);

export default ScanQrcodeIcon;
