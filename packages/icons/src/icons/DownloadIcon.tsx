import React from 'react';
import type { IconProps } from '../types';

const DownloadIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M2.25 15h1.5v4.25h16.5V15h1.5v5.75H2.25z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="m6.47 11.53 1.06-1.06L12 14.94l4.47-4.47 1.06 1.06L12 17.06z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M11.25 16V3h1.5v13z" clip-rule="evenodd"/></svg>
);

export default DownloadIcon;
