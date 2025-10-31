import React from 'react';
import type { IconProps } from '../types';

const MoveHorizontalFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m22 12-4-4v3H6V8l-4 4 4 4v-3h12v3z"/></svg>
);

export default MoveHorizontalFilledIcon;
