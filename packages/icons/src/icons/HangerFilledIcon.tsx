import React from 'react';
import type { IconProps } from '../types';

const HangerFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m21.41 13.6-8.62-4.31c0-.14.15-.27.61-.62.64-.5 1.6-1.26 1.6-2.66 0-1.74-1.26-3-3-3s-3 1.32-3 3c0 .55.45 1 1 1s1-.45 1-1 .43-1 1-1c.64 0 1 .36 1 1 0 .39-.24.62-.84 1.09-.55.43-1.49 1.17-1.36 2.39l-8.22 4.1A2.855 2.855 0 0 0 3.85 19h16.29c1.57 0 2.85-1.28 2.85-2.85 0-1.08-.62-2.08-1.58-2.55M20.14 17H3.85a.85.85 0 0 1-.85-.85c0-.33.18-.62.47-.77l8.52-4.26 8.53 4.27a.85.85 0 0 1-.38 1.61"/></svg>
);

export default HangerFilledIcon;
