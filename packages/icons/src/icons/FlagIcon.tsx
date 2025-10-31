import React from 'react';
import type { IconProps } from '../types';

const FlagIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M4.25 5A.75.75 0 0 1 5 4.25h14a.75.75 0 0 1 .53 1.28L15.56 9.5l3.97 3.97a.75.75 0 0 1-.53 1.28H5.75V22h-1.5zm1.5 8.25h11.44l-3.22-3.22a.75.75 0 0 1 0-1.06l3.22-3.22H5.75z" clip-rule="evenodd"/></svg>
);

export default FlagIcon;
