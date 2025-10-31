import React from 'react';
import type { IconProps } from '../types';

const AirpodsFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M18 2c-2.632 0-4.875 2.132-5 4.8v9.7c0 1.355 1.145 2.5 2.5 2.5s2.5-1.145 2.5-2.5V12c2.632 0 4.875-2.132 5-4.8V7c0-2.757-2.243-5-5-5m0 8h-1a1 1 0 0 0-1 1v3h-1V6.847C15.073 5.277 16.42 4 18 4c1.654 0 3 1.346 3 3v.153C20.927 8.723 19.58 10 18 10M11 17.999V9.752C10.874 7.132 8.631 5 6 5c-2.757 0-5 2.243-5 5v.248C1.126 12.868 3.369 15 6 15v4.5C6 20.855 7.145 22 8.5 22s2.5-1.145 2.5-2.5v-1.5010000000000001M9 17H8v-3a1 1 0 0 0-1-1H6c-1.58 0-2.926-1.277-3-2.8V10c0-1.654 1.346-3 3-3 1.58 0 2.926 1.277 3 2.8z"/></svg>
);

export default AirpodsFilledIcon;
