import React from 'react';
import type { IconProps } from '../types';

const PuzzleFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M18.39 12.3h2.55c.55 0 1-.45 1-1V5.77c0-.55-.45-1-1-1h-4.53v-.55c0-1.77-1.44-3.21-3.21-3.21S9.99 2.45 9.99 4.22v.55H5.46c-.55 0-1 .45-1 1v4.53h-1c-1.77 0-3.21 1.44-3.21 3.21s1.44 3.21 3.21 3.21h1v4.53c0 .55.45 1 1 1h5.53c.55 0 1-.45 1-1V18.7c0-.67.54-1.21 1.21-1.21s1.21.54 1.21 1.21v2.55c0 .55.45 1 1 1h5.53c.55 0 1-.45 1-1v-5.53c0-.55-.45-1-1-1h-2.55c-.67 0-1.21-.54-1.21-1.21s.54-1.21 1.21-1.21"/></svg>
);

export default PuzzleFilledIcon;
