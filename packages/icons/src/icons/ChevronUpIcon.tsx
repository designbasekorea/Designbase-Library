import React from 'react';
import type { IconProps } from '../types';

const ChevronUpIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="m12 7.94 6.53 6.53-1.06 1.06L12 10.06l-5.47 5.47-1.06-1.06z" clip-rule="evenodd"/></svg>
);

export default ChevronUpIcon;
