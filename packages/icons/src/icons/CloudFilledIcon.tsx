import React from 'react';
import type { IconProps } from '../types';

const CloudFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M20.707 9.593a5.4 5.4 0 0 0-3.027-1.536C16.906 5.79 14.534 3 11 3 7.218 3 4.127 6.015 4.004 9.768 2.379 10.606 1 11.926 1 15c0 3.364 2.636 6 6 6h9.5c3.584 0 6.5-2.916 6.5-6.5a6.4 6.4 0 0 0-2.293-4.907"/></svg>
);

export default CloudFilledIcon;
