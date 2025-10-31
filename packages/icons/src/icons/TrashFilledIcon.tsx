import React from 'react';
import type { IconProps } from '../types';

const TrashFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M17 5V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v1H3v2h2v13c0 1.654 1.346 3 3 3h8c1.654 0 3-1.346 3-3V7h2V5zm-6 11H9V9h2zm4 0h-2V9h2zm0-11H9V4h6z"/></svg>
);

export default TrashFilledIcon;
