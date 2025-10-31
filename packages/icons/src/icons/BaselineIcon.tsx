import React from 'react';
import type { IconProps } from '../types';

const BaselineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M21 20.75H3v-1.5h18zM5.25 11V3h1.5v8c0 2.886 2.364 5.25 5.25 5.25s5.25-2.364 5.25-5.25V3h1.5v8c0 3.714-3.036 6.75-6.75 6.75S5.25 14.714 5.25 11" clip-rule="evenodd"/></svg>
);

export default BaselineIcon;
