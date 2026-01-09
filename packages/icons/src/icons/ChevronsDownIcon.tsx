import React from 'react';
import type { IconProps } from '../types';

const ChevronsDownIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="m6.47 13.53 1.06-1.06L12 16.94l4.47-4.47 1.06 1.06L12 19.06zM6.47 6.53l1.06-1.06L12 9.94l4.47-4.47 1.06 1.06L12 12.06z" clipRule="evenodd"/></svg>
);

export default ChevronsDownIcon;
