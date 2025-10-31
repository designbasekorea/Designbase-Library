import React from 'react';
import type { IconProps } from '../types';

const ArrowBarToRightIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M20.75 20h-1.5V4h1.5zm-5.19-8-6.53 6.53-1.06-1.06 4.72-4.72H3v-1.5h9.69L7.97 6.53l1.06-1.06z"/></svg>
);

export default ArrowBarToRightIcon;
