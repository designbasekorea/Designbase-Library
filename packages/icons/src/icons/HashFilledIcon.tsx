import React from 'react';
import type { IconProps } from '../types';

const HashFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M19 14h-3.47l1-4H19a1 1 0 1 0 0-2h-1.97l.939-3.757a.999.999 0 1 0-1.94-.485l-1.061 4.243h-3.939l.939-3.757a1 1 0 1 0-1.941-.485L8.966 8.002H4.997a1 1 0 0 0 0 2h3.469l-1 4H4.997a1 1 0 1 0 0 2h1.969l-.939 3.758a1 1 0 1 0 1.941.484l1.061-4.242h3.938l-.94 3.758a1 1 0 1 0 1.941.484l1.061-4.242h3.97a1 1 0 1 0 0-2zm-9.469 0 1-4h3.939l-1 4z"/></svg>
);

export default HashFilledIcon;
