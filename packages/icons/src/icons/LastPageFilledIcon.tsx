import React from 'react';
import type { IconProps } from '../types';

const LastPageFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M18 5h-2v14h2zM5.293 6.707 10.586 12l-5.293 5.293 1.414 1.414L13.414 12 6.707 5.293z"/></svg>
);

export default LastPageFilledIcon;
