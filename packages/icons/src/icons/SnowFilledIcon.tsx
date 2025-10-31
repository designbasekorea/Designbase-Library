import React from 'react';
import type { IconProps } from '../types';

const SnowFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M13.3 20.2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M9.9 23.1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M9.8 17.2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/><path fill="currentColor" d="M20.71 8.59a5.4 5.4 0 0 0-3.03-1.54c-.77-2.27-3.15-5.06-6.68-5.06-3.78 0-6.87 3.02-7 6.77-1.62.84-3 2.16-3 5.23 0 3.36 2.64 6 6 6 .55 0 1-.45 1-1s-.45-1-1-1c-2.24 0-4-1.76-4-4s.78-2.96 2.41-3.69l.59-.26V8.99c0-2.76 2.24-5 5-5s4.58 2.43 4.92 4.19l.16.81h.83c.89 0 1.74.36 2.46 1.07 1.04.87 1.64 2.12 1.64 3.43 0 2.48-2.02 4.5-4.5 4.5-.55 0-1 .45-1 1s.45 1 1 1c3.58 0 6.5-2.92 6.5-6.5 0-1.91-.86-3.72-2.29-4.91z"/></svg>
);

export default SnowFilledIcon;
