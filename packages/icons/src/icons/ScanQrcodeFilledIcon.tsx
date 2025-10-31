import React from 'react';
import type { IconProps } from '../types';

const ScanQrcodeFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M4 4h3V2H4c-1.1 0-2 .9-2 2v3h2zM20 2h-3v2h3v3h2V4c0-1.1-.9-2-2-2M20 20h-3v2h3c1.1 0 2-.9 2-2v-3h-2zM4 17H2v3c0 1.1.9 2 2 2h3v-2H4zM6 11h5V6H6zm2-3h1v1H8zM18 6h-5v5h5zm-2 3h-1V8h1zM6 18h5v-5H6zm2-3h1v1H8zM15 16h-2v2h2z"/><path fill="currentColor" d="M18 18v-5h-5v2h3v3z"/></svg>
);

export default ScanQrcodeFilledIcon;
