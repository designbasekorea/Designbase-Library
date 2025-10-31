import React from 'react';
import type { IconProps } from '../types';

const BagFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M19.936 5H16V4c0-1.654-1.346-3-3-3h-2C9.346 1 8 2.346 8 4v1H4.064L2.931 22h18.138L19.935 5zM10 4c0-.551.449-1 1-1h2c.552 0 1 .449 1 1v1h-4z"/></svg>
);

export default BagFilledIcon;
