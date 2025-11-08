import React from 'react';
import type { IconProps } from '../types';

const SwitchDiagonalIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M15.54 3.47a.75.75 0 0 1 .53 1.28L4.04 16.77l-1.06-1.06L13.729 4.97h-5.25v-1.5zM21.01 8.29 10.272 19.03h5.249v1.5H8.46a.75.75 0 0 1-.53-1.28L19.95 7.23z"/></svg>
);

export default SwitchDiagonalIcon;
