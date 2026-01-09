import React from 'react';
import type { IconProps } from '../types';

const MoveVerticalIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12 2 8 6h8zM12 22l4-4H8z"/><path fill="currentColor" fillRule="evenodd" d="M11.25 18V6h1.5v12z" clipRule="evenodd"/></svg>
);

export default MoveVerticalIcon;
