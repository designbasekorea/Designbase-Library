import React from 'react';
import type { IconProps } from '../types';

const BootsFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M22 15v-.27c0-2.32-1.58-4.32-3.77-4.85l-5.72-1.77c-.21-.47-.43-1.86-.5-3.16-.03-.53-.47-.95-1-.95H3c-.55 0-1 .45-1 1v10c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h20c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1M4 6h6.07c.18 2.03.56 3 .92 3.48l-1.04.69c-.46.31-.58.93-.28 1.39.19.29.51.45.83.45.19 0 .38-.05.55-.17l2.13-1.42 1.29.4-.53.35c-.46.31-.58.93-.28 1.39.19.29.51.45.83.45.19 0 .38-.05.55-.17l1.88-1.26.76.24c1.36.32 2.3 1.52 2.3 2.92v.27H4z"/></svg>
);

export default BootsFilledIcon;
