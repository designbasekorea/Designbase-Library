import React from 'react';
import type { IconProps } from '../types';

const MoneyFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M20 5H4C2.346 5 1 6.346 1 8v8c0 1.654 1.346 3 3 3h16c1.654 0 3-1.346 3-3V8c0-1.654-1.346-3-3-3M7 13H5v-2h2zm5 3c-2.243 0-4-1.757-4-4s1.757-4 4-4 4 1.757 4 4-1.757 4-4 4m7-3h-2v-2h2z"/><path fill="currentColor" d="M12 10c-1.14 0-2 .86-2 2s.86 2 2 2 2-.859 2-2-.859-2-2-2"/></svg>
);

export default MoneyFilledIcon;
