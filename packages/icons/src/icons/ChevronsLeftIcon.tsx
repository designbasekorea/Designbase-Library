import React from 'react';
import type { IconProps } from '../types';

const ChevronsLeftIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="m7.06 12 4.47-4.47-1.06-1.06L4.94 12l5.53 5.53 1.06-1.06zM14.06 12l4.47-4.47-1.06-1.06L11.94 12l5.53 5.53 1.06-1.06z" clipRule="evenodd"/></svg>
);

export default ChevronsLeftIcon;
