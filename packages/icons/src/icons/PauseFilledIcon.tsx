import React from 'react';
import type { IconProps } from '../types';

const PauseFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M10 3H5v18h5zM19 3h-5v18h5z"/></svg>
);

export default PauseFilledIcon;
