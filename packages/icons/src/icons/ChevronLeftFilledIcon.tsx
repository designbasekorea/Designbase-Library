import React from 'react';
import type { IconProps } from '../types';

const ChevronLeftFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m15.707 6.707-1.414-1.414L7.586 12l6.707 6.707 1.414-1.414L10.414 12z"/></svg>
);

export default ChevronLeftFilledIcon;
