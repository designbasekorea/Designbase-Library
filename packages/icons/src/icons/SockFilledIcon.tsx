import React from 'react';
import type { IconProps } from '../types';

const SockFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M19 6V1h-9v7.55l-5.5 4.88c-1.96 1.94-1.99 5.11-.05 7.07A5 5 0 0 0 8 21.98c1.18 0 2.37-.42 3.33-1.26l6.74-6.41c.59-.56.93-1.36.93-2.17V6m-2.01-3v2h-5V3zm-.31 9.87-6.71 6.38c-1.19 1.04-3 .98-4.11-.15-1.16-1.18-1.15-3.08 0-4.21l6.13-5.44V7h5v5.14c0 .27-.11.54-.31.72z"/></svg>
);

export default SockFilledIcon;
