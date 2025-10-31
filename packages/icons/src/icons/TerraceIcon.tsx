import React from 'react';
import type { IconProps } from '../types';

const TerraceIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M2.75 17.25h4V22h-1.5v-3.25h-2.5V22h-1.5v-9h1.5zm8.946-15.936a.75.75 0 0 1 .702.05l8 5A.75.75 0 0 1 20.75 7v2a.75.75 0 0 1-.75.75h-7.25v10.5H15v1.5h-2.25V22h-1.5v-.25H9v-1.5h2.25V9.75H4A.75.75 0 0 1 3.25 9V7l.006-.096a.75.75 0 0 1 .347-.54l8-5zM22.75 22h-1.5v-3.25h-2.5V22h-1.5v-4.75h4V13h1.5zm-18-14.585v.835h14.5v-.835L12 2.884z"/></svg>
);

export default TerraceIcon;
