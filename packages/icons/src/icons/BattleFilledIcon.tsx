import React from 'react';
import type { IconProps } from '../types';

const BattleFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m22.41 18-2.5-2.5 1.79-1.79-1.41-1.41-1.77 1.77-1.35-1.62L22 8.48V2h-6.47l-3.51 4.26L8.47 2H2v6.47l4.86 4.05-.94 1.14-.42.42-1.79-1.79L2.3 13.7l1.79 1.79-2.5 2.5L6 22.4l2.5-2.5 1.79 1.79 1.41-1.41-1.8-1.8.39-.39 1.64-1.35 2.12 1.76-1.77 1.77 1.41 1.41 1.79-1.79 2.5 2.5 4.41-4.41zM4 7.53V4h3.53l3.19 3.83 4.91 5.88 1.48 1.77-1.62 1.62zM16.91 18.5l1.59-1.59L19.59 18 18 19.59z"/></svg>
);

export default BattleFilledIcon;
