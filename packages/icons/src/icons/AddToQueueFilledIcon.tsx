import React from 'react';
import type { IconProps } from '../types';

const AddToQueueFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M4 18V9H2v9c0 2.2 1.8 4 4 4h9v-2H6c-1.1 0-2-.9-2-2"/><path fill="currentColor" d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-2 9h-3v3h-2v-3h-3V9h3V6h2v3h3z"/></svg>
);

export default AddToQueueFilledIcon;
