import React from 'react';
import type { IconProps } from '../types';

const AlignFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M21 6H3v2h18zM18 11H6v2h12zM15 16H9v2h6z"/></svg>
);

export default AlignFilledIcon;
