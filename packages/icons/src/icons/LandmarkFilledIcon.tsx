import React from 'react';
import type { IconProps } from '../types';

const LandmarkFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M21 20H3v2h18zM7 13H5v6h2zM11 13H9v6h2zM15 13h-2v6h2zM19 13h-2v6h2zM21 10H3v2h18zM19.321 7l-6.74-4.814a1 1 0 0 0-1.162 0L4.679 7H3v2h18V7z"/></svg>
);

export default LandmarkFilledIcon;
