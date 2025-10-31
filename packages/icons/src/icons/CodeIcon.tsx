import React from 'react';
import type { IconProps } from '../types';

const CodeIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="m6.47 7.47 1.06 1.06L4.06 12l3.47 3.47-1.06 1.06L1.94 12zM19.94 12l-3.47-3.47 1.06-1.06L22.06 12l-4.53 4.53-1.06-1.06zM8.31 18.705l6-14 1.38.59-6 14z" clip-rule="evenodd"/></svg>
);

export default CodeIcon;
