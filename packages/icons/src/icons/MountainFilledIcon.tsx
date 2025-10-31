import React from 'react';
import type { IconProps } from '../types';

const MountainFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m22.832 18.445-6-9A1 1 0 0 0 16.027 9a.95.95 0 0 0-.827.4l-2.18 2.905-3.239-4.86c-.371-.557-1.293-.557-1.664 0l-7.332 11A.998.998 0 0 0 1.617 20H22a1 1 0 0 0 .832-1.554M3.485 18l5.464-8.197L14.413 18zM19 8c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3 1.346 3 3 3m0-4a1.001 1.001 0 0 1 0 2 1.001 1.001 0 0 1 0-2"/></svg>
);

export default MountainFilledIcon;
