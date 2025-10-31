import React from 'react';
import type { IconProps } from '../types';

const HotelIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M19.75 4.25v18.5H4.25V4.25zm-14 17h12.5V5.75H5.75z"/><path fill="currentColor" d="M17.75 1.25v4.5H6.25v-4.5zm-10 3h8.5v-1.5h-8.5zM19 8.25v1.5H5v-1.5zM19 12.25v1.5H5v-1.5zM14.75 16.25v6.5h-5.5v-6.5zm-4 5h2.5v-3.5h-2.5z"/></svg>
);

export default HotelIcon;
