import React from 'react';
import type { IconProps } from '../types';

const ChevronsLeftFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m11.707 7.707-1.414-1.414L4.586 12l5.707 5.707 1.414-1.414L7.414 12z"/><path fill="currentColor" d="m18.707 7.707-1.414-1.414L11.586 12l5.707 5.707 1.414-1.414L14.414 12z"/></svg>
);

export default ChevronsLeftFilledIcon;
