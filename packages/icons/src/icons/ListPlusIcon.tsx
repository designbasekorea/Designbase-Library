import React from 'react';
import type { IconProps } from '../types';

const ListPlusIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M16 7.75H2v-1.5h14zM14 12.75H2v-1.5h12zM12 17.75H2v-1.5h10zM22 17.75h-8v-1.5h8z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M17.25 21v-8h1.5v8z" clip-rule="evenodd"/></svg>
);

export default ListPlusIcon;
