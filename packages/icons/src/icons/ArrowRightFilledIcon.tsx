import React from 'react';
import type { IconProps } from '../types';

const ArrowRightFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m12.707 4.293-1.414 1.414L16.586 11H4v2h12.586l-5.293 5.293 1.414 1.414L20.414 12z"/></svg>
);

export default ArrowRightFilledIcon;
