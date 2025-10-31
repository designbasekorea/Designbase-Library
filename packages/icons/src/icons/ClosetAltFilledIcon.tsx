import React from 'react';
import type { IconProps } from '../types';

const ClosetAltFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2v2h2v-2h12v2h2v-2c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-6 2v15h-4V4zM4 4h4v15H4zm16 15h-4V4h4z"/></svg>
);

export default ClosetAltFilledIcon;
