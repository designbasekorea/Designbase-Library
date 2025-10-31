import React from 'react';
import type { IconProps } from '../types';

const ClosetFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M18 2H6c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2v2h2v-2h8v2h2v-2c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M6 4h5v15H6zm12 15h-5V4h5z"/></svg>
);

export default ClosetFilledIcon;
