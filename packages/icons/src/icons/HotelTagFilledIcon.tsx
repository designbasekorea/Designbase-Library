import React from 'react';
import type { IconProps } from '../types';

const HotelTagFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/><path fill="currentColor" d="M12 1C8.691 1 6 3.691 6 7a1 1 0 0 0 2 0c0-2.206 1.794-4 4-4s4 1.794 4 4v3H9c-1.654 0-3 1.346-3 3v4c0 3.309 2.691 6 6 6s6-2.691 6-6V7c0-3.309-2.691-6-6-6m0 19c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3"/></svg>
);

export default HotelTagFilledIcon;
