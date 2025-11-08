import React from 'react';
import type { IconProps } from '../types';

const ShrinkAltIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M10.75 21h-1.5v-5.19l-5.72 5.72-1.06-1.06 5.72-5.72H3v-1.5h7.75zM21.53 3.53l-5.72 5.72H21v1.5h-7.75V3h1.5v5.19l5.72-5.72z"/></svg>
);

export default ShrinkAltIcon;
