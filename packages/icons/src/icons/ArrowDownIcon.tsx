import React from 'react';
import type { IconProps } from '../types';

const ArrowDownIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M11.25 19V4h1.5v15z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="m12 17.94-6.47-6.47-1.06 1.06L12 20.06l7.53-7.53-1.06-1.06z" clipRule="evenodd"/></svg>
);

export default ArrowDownIcon;
