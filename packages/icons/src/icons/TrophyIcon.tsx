import React from 'react';
import type { IconProps } from '../types';

const TrophyIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M16 21.75H8v-1.5h8z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M12 16.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M5.25 4A.75.75 0 0 1 6 3.25h12a.75.75 0 0 1 .75.75v6.7c0 1.86-.654 3.666-2.02 4.93-1.256 1.357-3.054 2.02-4.73 2.02-1.714 0-3.5-.79-4.73-2.02l-.023-.023C6.038 14.287 5.25 12.512 5.25 10.7zm1.5.75v5.95c0 1.382.607 2.802 1.592 3.881.97.964 2.377 1.569 3.658 1.569 1.315 0 2.705-.53 3.647-1.557l.046-.046c1.019-.934 1.557-2.319 1.557-3.847V4.75z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M2.07 6.07A2.72 2.72 0 0 1 4 5.25h2a.75.75 0 0 1 0 1.5H4c-.295 0-.606.116-.87.38s-.38.575-.38.87.116.606.38.87.575.38.87.38h2a.75.75 0 0 1 0 1.5H4a2.72 2.72 0 0 1-1.93-.82A2.72 2.72 0 0 1 1.25 8c0-.705.284-1.394.82-1.93M17.25 6a.75.75 0 0 1 .75-.75h2c.705 0 1.394.284 1.93.82.537.536.82 1.225.82 1.93s-.284 1.394-.82 1.93a2.72 2.72 0 0 1-1.93.82h-2a.75.75 0 0 1 0-1.5h2c.295 0 .606-.116.87-.38s.38-.575.38-.87-.116-.606-.38-.87a1.23 1.23 0 0 0-.87-.38h-2a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/></svg>
);

export default TrophyIcon;
