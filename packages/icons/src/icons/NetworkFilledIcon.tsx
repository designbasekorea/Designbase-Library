import React from 'react';
import type { IconProps } from '../types';

const NetworkFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M19 14v-3h-6v-1h3V2H8v8h3v1H5v3H2v8h8v-8H7v-1h10v1h-3v8h8v-8z"/></svg>
);

export default NetworkFilledIcon;
