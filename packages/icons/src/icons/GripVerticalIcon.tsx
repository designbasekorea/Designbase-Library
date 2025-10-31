import React from 'react';
import type { IconProps } from '../types';

const GripVerticalIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M9.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M9.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M9.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M14.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M14.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M14.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/></svg>
);

export default GripVerticalIcon;
