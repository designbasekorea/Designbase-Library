import React from 'react';
import type { IconProps } from '../types';

const MapIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M21.394 2.362A.75.75 0 0 1 21.75 3v14a.75.75 0 0 1-.415.67l-6 3a.75.75 0 0 1-.67 0L9 17.839l-5.665 2.833A.75.75 0 0 1 2.25 20V6a.75.75 0 0 1 .415-.67l6-3a.75.75 0 0 1 .67 0L15 5.16l5.665-2.832a.75.75 0 0 1 .73.033M3.75 6.464v12.323l4.915-2.458a.75.75 0 0 1 .67 0L15 19.161l5.25-2.625V4.215L15.335 6.67a.75.75 0 0 1-.67 0L9 3.839z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M8.25 17V3h1.5v14zM14.25 20V6h1.5v14z" clip-rule="evenodd"/></svg>
);

export default MapIcon;
