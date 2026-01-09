import React from 'react';
import type { IconProps } from '../types';

const DropboxIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="m2 6.689 5.004 3.186 5.002-3.186L7.004 3.5zm10.006 0 5.003 3.186 5.003-3.186L17.009 3.5zm-5.002 9.56 5.002-3.187-5.002-3.187L2 13.062zm5.002-3.187 5.003 3.187 5.003-3.187-5.003-3.187zm0 7.438 5.003-3.189-5.003-3.186-5.002 3.186z" clipRule="evenodd"/></svg>
);

export default DropboxIcon;
