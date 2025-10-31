import React from 'react';
import type { IconProps } from '../types';

const TvTableIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M22.75 15.75h-2V18h-1.5v-2.25H4.75V18h-1.5v-2.25h-2v-9.5h21.5zm-20-1.5h8.5v-6.5h-8.5zm10 0h8.5v-6.5h-8.5zm-3-3.25h-1.5V9h1.5zm6 0h-1.5V9h1.5z"/></svg>
);

export default TvTableIcon;
