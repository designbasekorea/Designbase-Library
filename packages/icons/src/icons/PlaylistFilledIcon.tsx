import React from 'react';
import type { IconProps } from '../types';

const PlaylistFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M17 3h-1v10.556A3.96 3.96 0 0 0 14 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4V5.154c.89.263 2 .967 2 2.846 0 1.812-.939 4.655-.949 4.684l1.897.632C20.991 13.187 22 10.137 22 8c0-3.955-3.271-5-5-5M14 5H2v2h12z"/><path fill="currentColor" d="M14 9H2v2h12zM9 13H2v2h7z"/></svg>
);

export default PlaylistFilledIcon;
