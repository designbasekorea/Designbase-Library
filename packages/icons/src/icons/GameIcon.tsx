import React from 'react';
import type { IconProps } from '../types';

const GameIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12 2.25a9.74 9.74 0 0 1 8.19 4.474.75.75 0 0 1-.1.936L15.75 12l4.34 4.34c.25.25.292.64.1.936A9.743 9.743 0 0 1 2.25 12c0-5.384 4.366-9.75 9.75-9.75m0 1.5a8.25 8.25 0 0 0 0 16.5 8.23 8.23 0 0 0 6.584-3.295L14.16 12.53a.75.75 0 0 1 0-1.06l4.424-4.426A8.23 8.23 0 0 0 12 3.75M12 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/></svg>
);

export default GameIcon;
