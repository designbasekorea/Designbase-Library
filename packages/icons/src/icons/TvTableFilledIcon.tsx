import React from 'react';
import type { IconProps } from '../types';

const TvTableFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M23 6H1v10h2v2h2v-2h14v2h2v-2h2zM3 8h8v6H3zm18 6h-8V8h8z"/><path fill="currentColor" d="M10 9H8v2h2zM16 9h-2v2h2z"/></svg>
);

export default TvTableFilledIcon;
