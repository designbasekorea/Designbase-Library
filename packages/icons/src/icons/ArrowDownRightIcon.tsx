import React from 'react';
import type { IconProps } from '../types';

const ArrowDownRightIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M16.25 15.19V7h1.5v10.75H7v-1.5h8.19L6.47 7.53l1.06-1.06z"/></svg>
);

export default ArrowDownRightIcon;
