import React from 'react';
import type { IconProps } from '../types';

const ShrinkAltFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m21.71 3.71-1.42-1.42L15 7.59V3h-2v8h8V9h-4.59zM3 15h4.59l-5.3 5.29 1.42 1.42L9 16.41V21h2v-8H3z"/></svg>
);

export default ShrinkAltFilledIcon;
