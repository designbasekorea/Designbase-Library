import React from 'react';
import type { IconProps } from '../types';

const LastPageIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M17.75 5v14h-1.5V5zM10.94 12 5.47 6.53l1.06-1.06L13.06 12l-6.53 6.53-1.06-1.06z" clip-rule="evenodd"/></svg>
);

export default LastPageIcon;
