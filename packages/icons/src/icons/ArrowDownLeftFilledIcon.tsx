import React from 'react';
import type { IconProps } from '../types';

const ArrowDownLeftFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m17.707 7.707-1.414-1.414L8 14.586V7H6v11h11v-2H9.414z"/></svg>
);

export default ArrowDownLeftFilledIcon;
