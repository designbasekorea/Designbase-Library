import React from 'react';
import type { IconProps } from '../types';

const MouseIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M11.25 9V4h1.5v5z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M12 3.75A4.75 4.75 0 0 0 7.25 8.5v7a4.75 4.75 0 1 0 9.5 0v-7A4.75 4.75 0 0 0 12 3.75M5.75 8.5a6.25 6.25 0 1 1 12.5 0v7a6.25 6.25 0 1 1-12.5 0z" clipRule="evenodd"/></svg>
);

export default MouseIcon;
