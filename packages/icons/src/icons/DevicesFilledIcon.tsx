import React from 'react';
import type { IconProps } from '../types';

const DevicesFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M20 3H7c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-1h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M10 19H4V9h6zm10-3h-8V9c0-1.1-.9-2-2-2H7V5h13z"/></svg>
);

export default DevicesFilledIcon;
