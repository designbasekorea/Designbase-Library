import React from 'react';
import type { IconProps } from '../types';

const AccessibleFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m0 3c.83 0 1.5.67 1.5 1.5S12.83 8 12 8s-1.5-.67-1.5-1.5S11.17 5 12 5m3.86 12.49-1.71 1.03-2.14-3.57-2.14 3.57-1.71-1.03 2.86-4.76v-1.9l-4.2-.84.39-1.96 4.8.96 4.8-.96.39 1.96-4.2.84v1.9z"/></svg>
);

export default AccessibleFilledIcon;
