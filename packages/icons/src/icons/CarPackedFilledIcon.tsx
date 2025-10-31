import React from 'react';
import type { IconProps } from '../types';

const CarPackedFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M23 13c0-1.103-.897-2-2-2h-2.279l-1.333-4H19V5h-2V3c0-1.103-.897-2-2-2h-5c-.748 0-1.393.417-1.736 1.027C8.177 2.015 8.091 2 8 2H4c-1.103 0-2 .897-2 2v1H1v2h1.613L1 11.838V19h2.184A3 3 0 0 0 6 21a3 3 0 0 0 2.816-2h5.369a3 3 0 0 0 2.816 2 3 3 0 0 0 2.816-2h3.184zm-6.387-2H11V7h4.28zM9 7v4H3.387L4.72 7zM6 19a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2m11 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2m4-2h-1.184a3 3 0 0 0-.596-1H21z"/></svg>
);

export default CarPackedFilledIcon;
