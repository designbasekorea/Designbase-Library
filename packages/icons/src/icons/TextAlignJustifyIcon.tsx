import React from 'react';
import type { IconProps } from '../types';

const TextAlignJustifyIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M22 6.75H2v-1.5h20zM22 10.75H2v-1.5h20zM22 14.75H2v-1.5h20zM22 18.75H2v-1.5h20z" clipRule="evenodd"/></svg>
);

export default TextAlignJustifyIcon;
