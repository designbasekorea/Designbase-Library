import React from 'react';
import type { IconProps } from '../types';

const CoinIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m11.902-2.298a3.25 3.25 0 1 0 0 4.597.75.75 0 1 1 1.06 1.06 4.75 4.75 0 1 1 0-6.717.75.75 0 0 1-1.06 1.06" clipRule="evenodd"/></svg>
);

export default CoinIcon;
