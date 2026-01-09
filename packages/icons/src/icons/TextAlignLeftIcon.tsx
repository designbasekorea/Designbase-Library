import React from 'react';
import type { IconProps } from '../types';

const TextAlignLeftIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M22 6.75H2v-1.5h20zM18 10.75H2v-1.5h16zM22 14.75H2v-1.5h20zM18 18.75H2v-1.5h16z" clipRule="evenodd"/></svg>
);

export default TextAlignLeftIcon;
