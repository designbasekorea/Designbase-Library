import React from 'react';
import type { IconProps } from '../types';

const WifiIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M12 5.6a14.55 14.55 0 0 0-10.463 4.416L.463 8.97A16.05 16.05 0 0 1 12 4.1c4.525 0 8.611 1.864 11.538 4.871l-1.076 1.046A14.54 14.54 0 0 0 12 5.6" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M12 10.675a9.52 9.52 0 0 0-6.87 2.929l-1.08-1.04a11.02 11.02 0 0 1 15.9 0l-1.08 1.04A9.52 9.52 0 0 0 12 10.675M12 15.876c-1.257 0-2.389.53-3.176 1.393l-1.108-1.011A5.78 5.78 0 0 1 12 14.376c1.687 0 3.219.714 4.284 1.882l-1.108 1.01A4.28 4.28 0 0 0 12 15.877" clip-rule="evenodd"/><path fill="currentColor" d="M12 21.16a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>
);

export default WifiIcon;
