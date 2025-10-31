import React from 'react';
import type { IconProps } from '../types';

const RefreshFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M16 10h6V3h-2v3.013A9.96 9.96 0 0 0 12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10h-2c0 4.411-3.589 8-8 8s-8-3.589-8-8 3.589-8 8-8c2.87 0 5.471 1.526 6.909 4H16z"/></svg>
);

export default RefreshFilledIcon;
