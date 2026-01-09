import React from 'react';
import type { IconProps } from '../types';

const WatchIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M8.25 2.25h7.5v4.5h-7.5zm1.5 1.5v1.5h4.5v-1.5zM8.25 17.25h7.5v4.5h-7.5zm1.5 1.5v1.5h4.5v-1.5z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M9 6.75A2.25 2.25 0 0 0 6.75 9v6A2.25 2.25 0 0 0 9 17.25h6A2.25 2.25 0 0 0 17.25 15V9A2.25 2.25 0 0 0 15 6.75zM5.25 9A3.75 3.75 0 0 1 9 5.25h6A3.75 3.75 0 0 1 18.75 9v6A3.75 3.75 0 0 1 15 18.75H9A3.75 3.75 0 0 1 5.25 15z" clipRule="evenodd"/></svg>
);

export default WatchIcon;
