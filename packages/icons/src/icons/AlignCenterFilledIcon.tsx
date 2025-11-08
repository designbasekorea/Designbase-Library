import React from 'react';
import type { IconProps } from '../types';

const AlignCenterFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M21 6H3v2h18zM16 11H8v2h8zM18 16H6v2h12z"/></svg>
);

export default AlignCenterFilledIcon;
