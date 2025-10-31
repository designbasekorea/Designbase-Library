import React from 'react';
import type { IconProps } from '../types';

const FrameFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M21 6h-2.7L12 1.8 5.7 6H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-9-1.8L14.7 6H9.31l2.7-1.8zM3 8h18v6.03l-3-2.77-5.47 5.1-4.02-3.71-5.5 5.08V8.01z"/></svg>
);

export default FrameFilledIcon;
