import React from 'react';
import type { IconProps } from '../types';

const PlaycardFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m14.89 11.55-2-4c-.34-.68-1.45-.68-1.79 0l-2 4c-.14.28-.14.61 0 .89l2 4a1 1 0 0 0 .89.55c.37 0 .73-.21.89-.55l2-4c.14-.28.14-.61 0-.89z"/><path fill="currentColor" d="M17 1H7C5.35 1 4 2.35 4 4v16c0 1.65 1.35 3 3 3h10c1.65 0 3-1.35 3-3V4c0-1.65-1.35-3-3-3m1 19c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h10c.55 0 1 .45 1 1z"/><path fill="currentColor" d="M8 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2M16 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>
);

export default PlaycardFilledIcon;
