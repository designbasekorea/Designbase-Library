import React from 'react';
import type { IconProps } from '../types';

const ArrowUpCircleFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1m3.3 11.7L13 10.4V16h-2v-5.6l-2.3 2.3-1.4-1.4L12 6.6l4.7 4.7z"/></svg>
);

export default ArrowUpCircleFilledIcon;
