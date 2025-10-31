import React from 'react';
import type { IconProps } from '../types';

const MobileFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M16 1H8C6.346 1 5 2.346 5 4v16c0 1.654 1.346 3 3 3h8c1.654 0 3-1.346 3-3V4c0-1.654-1.346-3-3-3m1 19a1 1 0 0 1-1 1H8c-.551 0-1-.448-1-1V4c0-.551.449-1 1-1h8c.552 0 1 .449 1 1z"/><path fill="currentColor" d="M12 18c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1"/></svg>
);

export default MobileFilledIcon;
