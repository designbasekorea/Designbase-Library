import React from 'react';
import type { IconProps } from '../types';

const MoveVerticalFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M13 6h3l-4-4-4 4h3v12H8l4 4 4-4h-3z"/></svg>
);

export default MoveVerticalFilledIcon;
