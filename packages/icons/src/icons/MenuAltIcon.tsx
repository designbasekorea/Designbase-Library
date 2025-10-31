import React from 'react';
import type { IconProps } from '../types';

const MenuAltIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M21 16.75H3v-1.5h18zM21 8.75H3v-1.5h18z" clip-rule="evenodd"/></svg>
);

export default MenuAltIcon;
