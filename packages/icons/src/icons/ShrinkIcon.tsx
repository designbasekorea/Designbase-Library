import React from 'react';
import type { IconProps } from '../types';

const ShrinkIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M9.25 14.75H4v-1.5h6.75V20h-1.5zM13.75 10.25V5h-1.5v6.75H19v-1.5z" clip-rule="evenodd"/></svg>
);

export default ShrinkIcon;
