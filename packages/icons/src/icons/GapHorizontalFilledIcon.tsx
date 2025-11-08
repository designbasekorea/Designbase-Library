import React from 'react';
import type { IconProps } from '../types';

const GapHorizontalFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M6 3H3v2h3c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1H3v2h3c1.65 0 3-1.35 3-3V6c0-1.65-1.35-3-3-3M18 5h3V3h-3c-1.65 0-3 1.35-3 3v12c0 1.65 1.35 3 3 3h3v-2h-3c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1M13 5h-2v14h2z"/></svg>
);

export default GapHorizontalFilledIcon;
