import React from 'react';
import type { IconProps } from '../types';

const CakeFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M21 19v-8c0-1.654-1.346-3-3-3h-5V6h-2v2H6c-1.654 0-3 1.346-3 3v8H2v2h20v-2zm-2 0H5v-2.177c.3.106.627.177 1 .177 1.218 0 2.042-.988 2.768-1.859C9.123 14.714 9.718 14 10 14s.876.714 1.232 1.141C11.958 16.012 12.782 17 14 17s2.042-.988 2.769-1.859C17.124 14.714 17.719 14 18 14c.589 0 .889.474 1 .701zM12 5.5A1.5 1.5 0 0 0 13.5 4c0-.828-1.5-3-1.5-3s-1.5 2.172-1.5 3A1.5 1.5 0 0 0 12 5.5"/></svg>
);

export default CakeFilledIcon;
