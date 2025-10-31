import React from 'react';
import type { IconProps } from '../types';

const ShrinkFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M4 15h5v5h2v-7H4zM14 10V5h-2v7h7v-2z"/></svg>
);

export default ShrinkFilledIcon;
