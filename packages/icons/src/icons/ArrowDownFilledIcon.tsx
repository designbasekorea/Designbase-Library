import React from 'react';
import type { IconProps } from '../types';

const ArrowDownFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M18.293 11.293 13 16.586V4h-2v12.586l-5.293-5.293-1.414 1.414L12 20.414l7.707-7.707z"/></svg>
);

export default ArrowDownFilledIcon;
