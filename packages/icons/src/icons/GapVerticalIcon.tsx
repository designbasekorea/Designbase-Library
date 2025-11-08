import React from 'react';
import type { IconProps } from '../types';

const GapVerticalIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M3.25 6V3h1.5v3c0 .686.564 1.25 1.25 1.25h12c.686 0 1.25-.564 1.25-1.25V3h1.5v3A2.756 2.756 0 0 1 18 8.75H6A2.756 2.756 0 0 1 3.25 6M19.25 18c0-.686-.564-1.25-1.25-1.25H6c-.686 0-1.25.564-1.25 1.25v3h-1.5v-3A2.756 2.756 0 0 1 6 15.25h12A2.756 2.756 0 0 1 20.75 18v3h-1.5zM19 11.25v1.5H5v-1.5z"/></svg>
);

export default GapVerticalIcon;
