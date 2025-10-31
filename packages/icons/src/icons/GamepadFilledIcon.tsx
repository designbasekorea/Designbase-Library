import React from 'react';
import type { IconProps } from '../types';

const GamepadFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M19 5H5C2.794 5 1 6.794 1 9v6c0 2.206 1.794 4 4 4h14c2.206 0 4-1.794 4-4V9c0-2.206-1.794-4-4-4m-8 8H9v2H7v-2H5v-2h2V9h2v2h2zm4 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2m2-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/></svg>
);

export default GamepadFilledIcon;
