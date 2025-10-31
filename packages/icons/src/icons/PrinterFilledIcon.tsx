import React from 'react';
import type { IconProps } from '../types';

const PrinterFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M19 4h-1c0-1.654-1.346-3-3-3H9C7.346 1 6 2.346 6 4H5C3.346 4 2 5.346 2 7v7c0 1.654 1.346 3 3 3v4h14v-4c1.654 0 3-1.346 3-3V7c0-1.654-1.346-3-3-3m-2 15H7v-4h10zm0-9a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/></svg>
);

export default PrinterFilledIcon;
