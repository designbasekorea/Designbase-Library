import React from 'react';
import type { IconProps } from '../types';

const RewindForwardIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="m19.94 6-3.47-3.47 1.06-1.06L22.06 6l-4.53 4.53-1.06-1.06zM14.25 13.75H13v-1.5h2.75V20h-1.5zM17.91 12.908a2.253 2.253 0 0 1 3.181 0l.001.002c.42.422.658.993.658 1.59v3a2.25 2.25 0 0 1-.659 1.591v.001a2.253 2.253 0 0 1-3.182 0l-.001-.002a2.25 2.25 0 0 1-.658-1.59v-3c0-.597.237-1.17.659-1.591zm1.059 1.062a.75.75 0 0 0-.219.53v3a.753.753 0 0 0 .75.75.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75.75.75 0 0 0-.531.22" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M8.998 5.25H21v1.5H9.001a5.25 5.25 0 0 0-4.138 8.468C5.663 16.25 7.265 17.25 9 17.25h2v1.5H9c-2.265 0-4.282-1.27-5.323-2.614A6.753 6.753 0 0 1 8.998 5.25" clipRule="evenodd"/></svg>
);

export default RewindForwardIcon;
