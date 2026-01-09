import React from 'react';
import type { IconProps } from '../types';

const ChevronsUpIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="m12 4.94 5.53 5.53-1.06 1.06L12 7.06l-4.47 4.47-1.06-1.06zM12 11.94l5.53 5.53-1.06 1.06L12 14.06l-4.47 4.47-1.06-1.06z" clipRule="evenodd"/></svg>
);

export default ChevronsUpIcon;
