import React from 'react';
import type { IconProps } from '../types';

const ListUlIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M4 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0M4 12a1 1 0 1 0-2 0 1 1 0 0 0 2 0M4 17a1 1 0 1 0-2 0 1 1 0 0 0 2 0"/><path fill="currentColor" fill-rule="evenodd" d="M22 7.75H6v-1.5h16zM22 12.75H6v-1.5h16zM22 17.75H6v-1.5h16z" clip-rule="evenodd"/></svg>
);

export default ListUlIcon;
