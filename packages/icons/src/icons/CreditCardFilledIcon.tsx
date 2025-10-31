import React from 'react';
import type { IconProps } from '../types';

const CreditCardFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M20 4H4C2.346 4 1 5.346 1 7v10c0 1.654 1.346 3 3 3h16c1.654 0 3-1.346 3-3V7c0-1.654-1.346-3-3-3M9 15H5v-2h4zm6 0h-4v-2h4zm6-6H3V7c0-.551.449-1 1-1h16c.552 0 1 .449 1 1z"/></svg>
);

export default CreditCardFilledIcon;
