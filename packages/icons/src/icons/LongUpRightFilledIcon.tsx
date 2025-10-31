import React from 'react';
import type { IconProps } from '../types';

const LongUpRightFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M11 4v2h5.586L3.793 18.793l1.414 1.414L18 7.414V13h2V4z"/></svg>
);

export default LongUpRightFilledIcon;
