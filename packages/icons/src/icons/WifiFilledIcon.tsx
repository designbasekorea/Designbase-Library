import React from 'react';
import type { IconProps } from '../types';

const WifiFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12 3.9A16.23 16.23 0 0 0 .283 8.847l1.434 1.396A14.24 14.24 0 0 1 12 5.9c3.907 0 7.559 1.542 10.283 4.34l1.434-1.394A16.22 16.22 0 0 0 12 3.9"/><path fill="currentColor" d="m3.869 12.442 1.442 1.386A9.32 9.32 0 0 1 12 10.976a9.33 9.33 0 0 1 6.689 2.852l1.441-1.386a11.33 11.33 0 0 0-8.131-3.466 11.33 11.33 0 0 0-8.13 3.466M7.531 16.14l1.478 1.348A4.05 4.05 0 0 1 12 16.177c1.141 0 2.231.478 2.992 1.312l1.477-1.35A6.06 6.06 0 0 0 12 14.177a6.06 6.06 0 0 0-4.469 1.963M12 21.21a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>
);

export default WifiFilledIcon;
