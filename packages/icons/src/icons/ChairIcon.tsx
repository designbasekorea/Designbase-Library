import React from 'react';
import type { IconProps } from '../types';

const ChairIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m12.75 18.423 5 1.334V22h-1.5v-1.09l-3.5-.935V21h-1.5v-1.025l-3.5.934V22h-1.5v-2.243l5-1.334V17h1.5zM3.75 13c0 .138.112.25.25.25h.356a2.75 2.75 0 0 1 2.644-2h10c1.259 0 2.317.846 2.644 2H20a.25.25 0 0 0 .25-.25v-2h1.5v2A1.75 1.75 0 0 1 20 14.75h-.356a2.75 2.75 0 0 1-2.644 2H7a2.75 2.75 0 0 1-2.644-2H4A1.75 1.75 0 0 1 2.25 13v-2h1.5zM7 12.75a1.25 1.25 0 1 0 0 2.5h10a1.25 1.25 0 1 0 0-2.5zm-2-2H1v-1.5h4zm18 0h-4v-1.5h4zm-8-9.5A2.75 2.75 0 0 1 17.75 4v6h-1.5V4c0-.69-.56-1.25-1.25-1.25H9c-.69 0-1.25.56-1.25 1.25v6h-1.5V4A2.75 2.75 0 0 1 9 1.25z"/></svg>
);

export default ChairIcon;
