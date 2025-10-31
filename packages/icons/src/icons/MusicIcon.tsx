import React from 'react';
import type { IconProps } from '../types';

const MusicIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M6.5 15.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M3.25 17.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M15.5 13.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m-3.25 1.75a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M18.75 3.065V15.5h-1.5V4.935l-7.5 1.667V17.52h-1.5V5.398z" clip-rule="evenodd"/></svg>
);

export default MusicIcon;
