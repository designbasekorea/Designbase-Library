import React from 'react';
import type { IconProps } from '../types';

const ArrowUpLeftIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="m7.53 6.47 10 10-1.06 1.06-10-10z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M6.25 6.25H17v1.5H7.75V17h-1.5z" clip-rule="evenodd"/></svg>
);

export default ArrowUpLeftIcon;
