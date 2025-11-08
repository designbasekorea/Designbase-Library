import React from 'react';
import type { IconProps } from '../types';

const ShrinkFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M4 15h5v5h2v-7H4zM15 9V4h-2v7h7V9z"/></svg>
);

export default ShrinkFilledIcon;
