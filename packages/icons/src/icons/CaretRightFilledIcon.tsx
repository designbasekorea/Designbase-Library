import React from 'react';
import type { IconProps } from '../types';

const CaretRightFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m14.5 12-5-5v10z"/></svg>
);

export default CaretRightFilledIcon;
