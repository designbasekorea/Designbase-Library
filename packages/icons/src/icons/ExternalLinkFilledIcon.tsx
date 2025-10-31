import React from 'react';
import type { IconProps } from '../types';

const ExternalLinkFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M18 18a1 1 0 0 1-1 1H6c-.551 0-1-.448-1-1V7c0-.551.449-1 1-1h6V4H6C4.346 4 3 5.346 3 7v11c0 1.654 1.346 3 3 3h11c1.654 0 3-1.346 3-3v-6h-2z"/><path fill="currentColor" d="M15 2v2h3.586l-8.293 8.293 1.414 1.414L20 5.414V9h2V2z"/></svg>
);

export default ExternalLinkFilledIcon;
