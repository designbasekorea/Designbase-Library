import React from 'react';
import type { IconProps } from '../types';

const PlusFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 25" width={size} height={size} {...props}><path fill="currentColor" d="M18 11h-5V6h-2v5H6v2h5v5h2v-5h5z"/></svg>
);

export default PlusFilledIcon;
