import React from 'react';
import type { IconProps } from '../types';

const LayoutFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M18 3H6C4.346 3 3 4.346 3 6v12c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3V6c0-1.654-1.346-3-3-3M6 5h12c.552 0 1 .449 1 1v2H5V6c0-.551.449-1 1-1M5 18v-8h3v9H6c-.551 0-1-.448-1-1m13 1h-8v-9h9v8a1 1 0 0 1-1 1"/></svg>
);

export default LayoutFilledIcon;
