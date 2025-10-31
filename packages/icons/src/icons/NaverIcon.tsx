import React from 'react';
import type { IconProps } from '../types';

const NaverIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M14.86 4v8.073L9.162 4H3v16h6.14v-8.073L14.84 20H21V4z"/></svg>
);

export default NaverIcon;
