import React from 'react';
import type { IconProps } from '../types';

const ArrowLeftIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m12.53 5.53-5.72 5.72H20v1.5H6.81l5.72 5.72-1.06 1.06L3.94 12l7.53-7.53z"/></svg>
);

export default ArrowLeftIcon;
