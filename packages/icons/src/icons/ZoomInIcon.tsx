import React from 'react';
import type { IconProps } from '../types';

const ZoomInIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M2.25 11c0-4.814 3.936-8.75 8.75-8.75s8.75 3.936 8.75 8.75-3.936 8.75-8.75 8.75S2.25 15.814 2.25 11M11 3.75c-3.986 0-7.25 3.264-7.25 7.25s3.264 7.25 7.25 7.25 7.25-3.264 7.25-7.25S14.986 3.75 11 3.75" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="m17.13 16.07 4.4 4.4-1.06 1.06-4.4-4.4zM10.25 14V8h1.5v6z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M8 10.25h6v1.5H8z" clip-rule="evenodd"/></svg>
);

export default ZoomInIcon;
