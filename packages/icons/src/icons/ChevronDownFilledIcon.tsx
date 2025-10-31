import React from 'react';
import type { IconProps } from '../types';

const ChevronDownFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M17.293 8.293 12 13.586 6.707 8.293 5.293 9.707 12 16.414l6.707-6.707z"/></svg>
);

export default ChevronDownFilledIcon;
