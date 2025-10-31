import React from 'react';
import type { IconProps } from '../types';

const BagAltFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M16 6V5c0-1.65-1.35-3-3-3h-2C9.35 2 8 3.35 8 5v1H1.92l.94 12.23A2.97 2.97 0 0 0 5.85 21h12.3c1.55 0 2.87-1.22 2.99-2.77L22.08 6zm-6-1c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1h-4z"/></svg>
);

export default BagAltFilledIcon;
