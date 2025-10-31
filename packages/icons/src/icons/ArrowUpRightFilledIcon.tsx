import React from 'react';
import type { IconProps } from '../types';

const ArrowUpRightFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M7 6v2h7.586l-8.293 8.293 1.414 1.414L16 9.414V17h2V6z"/></svg>
);

export default ArrowUpRightFilledIcon;
