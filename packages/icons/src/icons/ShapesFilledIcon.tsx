import React from 'react';
import type { IconProps } from '../types';

const ShapesFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M6.5 22a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9M21 13h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1M7.5 11h9a1 1 0 0 0 .871-1.49l-4.499-8c-.354-.63-1.389-.63-1.743 0l-4.5 8A1 1 0 0 0 7.5 11"/></svg>
);

export default ShapesFilledIcon;
