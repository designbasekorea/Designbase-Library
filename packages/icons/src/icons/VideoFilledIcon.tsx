import React from 'react';
import type { IconProps } from '../types';

const VideoFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M21.493 6.13a1 1 0 0 0-1.008.013L17 8.234V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-2.234l3.485 2.091A1 1 0 0 0 22 17V7a1 1 0 0 0-.507-.87"/></svg>
);

export default VideoFilledIcon;
