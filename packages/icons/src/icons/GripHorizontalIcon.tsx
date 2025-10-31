import React from 'react';
import type { IconProps } from '../types';

const GripHorizontalIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M17.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M12 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M6.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M17.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M12 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M6.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/></svg>
);

export default GripHorizontalIcon;
