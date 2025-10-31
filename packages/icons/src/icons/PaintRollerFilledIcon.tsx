import React from 'react';
import type { IconProps } from '../types';

const PaintRollerFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M21 5h-1c0-1.654-1.346-3-3-3H7C5.346 2 4 3.346 4 5v2c0 1.654 1.346 3 3 3h10c1.654 0 3-1.346 3-3h1v4h-8c-1.103 0-2 .897-2 2v1h-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-1v-1h8c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2m-8 16h-2v-5h2z"/></svg>
);

export default PaintRollerFilledIcon;
