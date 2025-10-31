import React from 'react';
import type { IconProps } from '../types';

const ChevronDownIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="m5.47 9.53 1.06-1.06L12 13.94l5.47-5.47 1.06 1.06L12 16.06z" clip-rule="evenodd"/></svg>
);

export default ChevronDownIcon;
