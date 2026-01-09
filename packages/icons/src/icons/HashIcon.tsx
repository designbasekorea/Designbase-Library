import React from 'react';
import type { IconProps } from '../types';

const HashIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M4.25 9A.75.75 0 0 1 5 8.25h14a.75.75 0 0 1 0 1.5H5A.75.75 0 0 1 4.25 9M4.25 15a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M11.182 3.272a.75.75 0 0 1 .546.91l-4 16a.75.75 0 0 1-1.456-.364l4-16a.75.75 0 0 1 .91-.546M17.182 3.272a.75.75 0 0 1 .546.91l-4 16a.75.75 0 0 1-1.456-.364l4-16a.75.75 0 0 1 .91-.546" clipRule="evenodd"/></svg>
);

export default HashIcon;
