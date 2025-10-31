import React from 'react';
import type { IconProps } from '../types';

const ShareIosFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M18 10h-2v2h2v8H6v-8h2v-2H6c-1.159 0-2 .841-2 2v8c0 1.159.841 2 2 2h12c1.159 0 2-.841 2-2v-8c0-1.159-.841-2-2-2"/><path fill="currentColor" d="M11 5.414V15h2V5.414l2.293 2.293 1.414-1.414-4-4a1 1 0 0 0-1.414 0l-4 4 1.414 1.414z"/></svg>
);

export default ShareIosFilledIcon;
