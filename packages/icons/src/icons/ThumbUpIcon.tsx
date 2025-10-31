import React from 'react';
import type { IconProps } from '../types';

const ThumbUpIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M10.75 2.572V9a.75.75 0 0 1-.75.75H8.75V17c0 .77.235 1.314.586 1.664.35.35.895.586 1.664.586h6.26a2.25 2.25 0 0 0 2.241-2.046l.554-6.09A1.25 1.25 0 0 0 18.81 9.75H15a.75.75 0 0 1-.75-.75V5c0-1.339-1.296-2.891-3.5-2.428M7.25 19.25v-9.5h-3.5v9.5zM3 8.25a.75.75 0 0 0-.75.75v11c0 .414.336.75.75.75h5a.75.75 0 0 0 .742-.639c.627.428 1.403.639 2.258.639h6.26a3.75 3.75 0 0 0 3.735-3.41l.554-6.091A2.75 2.75 0 0 0 18.81 8.25h-3.06V5c0-2.462-2.501-4.874-5.987-3.712A.75.75 0 0 0 9.25 2v6.25z" clip-rule="evenodd"/></svg>
);

export default ThumbUpIcon;
