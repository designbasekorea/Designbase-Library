import React from 'react';
import type { IconProps } from '../types';

const ArrowBarRightFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M5 4H3v16h2zM14.207 5.293l-1.414 1.414L17.086 11H8v2h9.086l-4.293 4.293 1.414 1.414L20.914 12z"/></svg>
);

export default ArrowBarRightFilledIcon;
