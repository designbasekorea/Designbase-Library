import React from 'react';
import type { IconProps } from '../types';

const ChairAltIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M15 2.25A2.75 2.75 0 0 1 17.75 5v4a2.75 2.75 0 0 1-2 2.643v1.607H16A2.75 2.75 0 0 1 18.75 16v6h-1.5v-6c0-.69-.56-1.25-1.25-1.25H8c-.69 0-1.25.56-1.25 1.25v6h-1.5v-6A2.75 2.75 0 0 1 8 13.25h.25v-1.607A2.75 2.75 0 0 1 6.25 9V5A2.75 2.75 0 0 1 9 2.25zm-5.25 11h4.5v-1.5h-4.5zM9 3.75c-.69 0-1.25.56-1.25 1.25v4c0 .69.56 1.25 1.25 1.25h6c.69 0 1.25-.56 1.25-1.25V5c0-.69-.56-1.25-1.25-1.25z"/></svg>
);

export default ChairAltIcon;
