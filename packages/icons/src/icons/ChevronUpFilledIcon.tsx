import React from 'react';
import type { IconProps } from '../types';

const ChevronUpFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m12 7.586-6.707 6.707 1.414 1.414L12 10.414l5.293 5.293 1.414-1.414z"/></svg>
);

export default ChevronUpFilledIcon;
