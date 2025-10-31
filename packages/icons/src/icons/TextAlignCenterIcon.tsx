import React from 'react';
import type { IconProps } from '../types';

const TextAlignCenterIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M22 6.75H2v-1.5h20zM20 10.75H4v-1.5h16zM22 14.75H2v-1.5h20zM20 18.75H4v-1.5h16z" clip-rule="evenodd"/></svg>
);

export default TextAlignCenterIcon;
