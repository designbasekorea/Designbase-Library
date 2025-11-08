import React from 'react';
import type { IconProps } from '../types';

const SwitchHorizontalFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M20 14H3v2h14.59l-3.28 3.28 1.41 1.41 4.99-4.99c.29-.29.37-.72.22-1.09s-.52-.62-.92-.62zM6.41 8l3.28-3.28-1.41-1.41L3.29 8.3c-.29.29-.37.72-.22 1.09s.52.62.92.62h17v-2H6.41z"/></svg>
);

export default SwitchHorizontalFilledIcon;
