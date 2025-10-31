import React from 'react';
import type { IconProps } from '../types';

const BinocularFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m22.595 13.034-2.285-7.27-.041-.107a4.01 4.01 0 0 0-3.77-2.656 4.006 4.006 0 0 0-3.873 3h-1.253a4.01 4.01 0 0 0-3.874-3 4.02 4.02 0 0 0-3.765 2.647l-2.313 7.357A5 5 0 0 0 1 15c0 2.757 2.243 5 5 5 1.627 0 3.061-.793 3.974-2h4.051c.914 1.207 2.348 2 3.974 2 2.757 0 5-2.243 5-5 0-.698-.145-1.362-.404-1.966M6 18c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3m7.101-2h-2.202a5 5 0 0 0 0-2h2.202a5 5 0 0 0 0 2M18 18c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3"/></svg>
);

export default BinocularFilledIcon;
