import React from 'react';
import type { IconProps } from '../types';

const LogOutIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M8.25 3.25h12.5v17.5H8.25V17h1.5v2.25h9.5V4.75h-9.5V7h-1.5z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M16 12.75H3v-1.5h13z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="m14.69 12-3.47-3.47 1.06-1.06L16.81 12l-4.53 4.53-1.06-1.06z" clipRule="evenodd"/></svg>
);

export default LogOutIcon;
