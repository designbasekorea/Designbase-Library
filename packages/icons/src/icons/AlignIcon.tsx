import React from 'react';
import type { IconProps } from '../types';

const AlignIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M21 7.75H3v-1.5h18zM18 12.75H6v-1.5h12zM15 17.75H9v-1.5h6z" clip-rule="evenodd"/></svg>
);

export default AlignIcon;
