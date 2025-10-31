import React from 'react';
import type { IconProps } from '../types';

const MoveIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12 2 8 6h8zM12 22l4-4H8zM22 12l-4-4v8zM2 12l4 4V8z"/><path fill="currentColor" fill-rule="evenodd" d="M11.25 18V6h1.5v12z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M6 11.25h12v1.5H6z" clip-rule="evenodd"/></svg>
);

export default MoveIcon;
