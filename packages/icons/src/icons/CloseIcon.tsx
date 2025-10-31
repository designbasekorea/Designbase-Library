import React from 'react';
import type { IconProps } from '../types';

const CloseIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="m5.47 17.47 12-12 1.06 1.06-12 12z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="m6.53 5.47 12 12-1.06 1.06-12-12z" clip-rule="evenodd"/></svg>
);

export default CloseIcon;
