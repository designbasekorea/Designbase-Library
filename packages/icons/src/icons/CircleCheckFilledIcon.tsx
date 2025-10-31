import React from 'react';
import type { IconProps } from '../types';

const CircleCheckFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12 1C5.935 1 1 5.935 1 12s4.935 11 11 11 11-4.935 11-11S18.065 1 12 1m-1.691 15.751-4.021-4.077 1.424-1.404 2.608 2.645 5.974-5.957 1.412 1.416z"/></svg>
);

export default CircleCheckFilledIcon;
