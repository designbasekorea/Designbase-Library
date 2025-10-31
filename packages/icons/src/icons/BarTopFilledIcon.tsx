import React from 'react';
import type { IconProps } from '../types';

const BarTopFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M18 3H6C4.346 3 3 4.346 3 6v12c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3V6c0-1.654-1.346-3-3-3M6 5h12c.552 0 1 .449 1 1v2H5V6c0-.551.449-1 1-1"/></svg>
);

export default BarTopFilledIcon;
