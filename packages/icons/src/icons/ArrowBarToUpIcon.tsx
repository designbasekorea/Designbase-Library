import React from 'react';
import type { IconProps } from '../types';

const ArrowBarToUpIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m18.53 14.97-1.06 1.06-4.72-4.72V21h-1.5v-9.69l-4.72 4.72-1.06-1.06L12 8.44zM20 4.75H4v-1.5h16z"/></svg>
);

export default ArrowBarToUpIcon;
