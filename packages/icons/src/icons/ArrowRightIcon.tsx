import React from 'react';
import type { IconProps } from '../types';

const ArrowRightIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m20.06 12-7.53 7.53-1.06-1.06 5.72-5.72H4v-1.5h13.19l-5.72-5.72 1.06-1.06z"/></svg>
);

export default ArrowRightIcon;
