import React from 'react';
import type { IconProps } from '../types';

const KeyAltFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M15.51 2.136c-3.309 0-6 2.69-6 6 0 1.294.416 2.49 1.115 3.47L2.783 19.45l1.414 1.414.707-.707 2.121 2.12 4.242-4.241-2.121-2.121 2.893-2.894a5.96 5.96 0 0 0 3.47 1.114c3.309 0 6-2.691 6-6s-2.691-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4"/></svg>
);

export default KeyAltFilledIcon;
