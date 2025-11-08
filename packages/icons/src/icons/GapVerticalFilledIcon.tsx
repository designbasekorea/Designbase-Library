import React from 'react';
import type { IconProps } from '../types';

const GapVerticalFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M19 3v3c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V3H3v3c0 1.65 1.35 3 3 3h12c1.65 0 3-1.35 3-3V3zM18 15H6c-1.65 0-3 1.35-3 3v3h2v-3c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v3h2v-3c0-1.65-1.35-3-3-3M19 11H5v2h14z"/></svg>
);

export default GapVerticalFilledIcon;
