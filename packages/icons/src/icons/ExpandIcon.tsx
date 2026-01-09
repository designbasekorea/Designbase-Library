import React from 'react';
import type { IconProps } from '../types';

const ExpandIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M17.25 6.75H12v-1.5h6.75V12h-1.5zM6.75 17.25V12h-1.5v6.75H12v-1.5z" clipRule="evenodd"/></svg>
);

export default ExpandIcon;
