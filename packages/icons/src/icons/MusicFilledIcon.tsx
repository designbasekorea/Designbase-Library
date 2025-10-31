import React from 'react';
import type { IconProps } from '../types';

const MusicFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M8 5.198v9.153a3.45 3.45 0 0 0-1.5-.35C4.57 14 3 15.57 3 17.5S4.57 21 6.5 21s3.487-1.56 3.498-3.48H10V6.801l7-1.556v7.104a3.45 3.45 0 0 0-1.5-.35c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5V2.752z"/></svg>
);

export default MusicFilledIcon;
