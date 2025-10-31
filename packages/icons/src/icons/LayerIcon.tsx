import React from 'react';
import type { IconProps } from '../types';

const LayerIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M11.636 2.344a.75.75 0 0 1 .728 0l9 5a.75.75 0 0 1 0 1.312l-9 5a.75.75 0 0 1-.728 0l-9-5a.75.75 0 0 1 0-1.312zM4.544 8 12 12.142 19.456 8 12 3.858z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M2.344 11.636a.75.75 0 0 1 1.02-.292L12 16.142l8.636-4.798a.75.75 0 1 1 .728 1.312l-9 5a.75.75 0 0 1-.728 0l-9-5a.75.75 0 0 1-.292-1.02" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M2.344 15.636a.75.75 0 0 1 1.02-.292L12 20.142l8.636-4.798a.75.75 0 1 1 .728 1.312l-9 5a.75.75 0 0 1-.728 0l-9-5a.75.75 0 0 1-.292-1.02" clip-rule="evenodd"/></svg>
);

export default LayerIcon;
