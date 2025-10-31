import React from 'react';
import type { IconProps } from '../types';

const FolderMinusFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M19 5h-7.586l-1.121-1.121A2.98 2.98 0 0 0 8.172 3H5C3.346 3 2 4.346 2 6v12c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V8c0-1.654-1.346-3-3-3m-3 9H8v-2h8z"/></svg>
);

export default FolderMinusFilledIcon;
