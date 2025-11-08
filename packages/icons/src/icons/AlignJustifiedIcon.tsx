import React from 'react';
import type { IconProps } from '../types';

const AlignJustifiedIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M15 16.25v1.5H3v-1.5zm6-5v1.5H3v-1.5zm0-5v1.5H3v-1.5z"/></svg>
);

export default AlignJustifiedIcon;
