import React from 'react';
import type { IconProps } from '../types';

const TextAlignRightIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M22 6.75H2v-1.5h20zM22 10.75H6v-1.5h16zM22 14.75H2v-1.5h20zM22 18.75H6v-1.5h16z" clip-rule="evenodd"/></svg>
);

export default TextAlignRightIcon;
