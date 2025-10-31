import React from 'react';
import type { IconProps } from '../types';

const FileManagerFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M6 16V8H4v8c0 3.309 2.691 6 6 6h5v-2h-5c-2.206 0-4-1.794-4-4"/><path fill="currentColor" d="M14.414 2H11C9.346 2 8 3.346 8 5v10c0 1.654 1.346 3 3 3h6c1.654 0 3-1.346 3-3V7.586zM17 16h-6c-.551 0-1-.448-1-1V5c0-.551.449-1 1-1h2v2c0 1.654 1.346 3 3 3h2v6a1 1 0 0 1-1 1"/></svg>
);

export default FileManagerFilledIcon;
