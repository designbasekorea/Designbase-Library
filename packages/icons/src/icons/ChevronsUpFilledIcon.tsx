import React from 'react';
import type { IconProps } from '../types';

const ChevronsUpFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m12 7.414 4.293 4.293 1.414-1.414L12 4.586l-5.707 5.707 1.414 1.414z"/><path fill="currentColor" d="m6.293 17.293 1.414 1.414L12 14.414l4.293 4.293 1.414-1.414L12 11.586z"/></svg>
);

export default ChevronsUpFilledIcon;
