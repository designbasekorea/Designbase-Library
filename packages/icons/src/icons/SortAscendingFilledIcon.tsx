import React from 'react';
import type { IconProps } from '../types';

const SortAscendingFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M8.8 3H5.2A2.2 2.2 0 0 0 3 5.2v3.6A2.2 2.2 0 0 0 5.2 11h3.6A2.2 2.2 0 0 0 11 8.8V5.2A2.2 2.2 0 0 0 8.8 3M8.8 13H5.2A2.2 2.2 0 0 0 3 15.2v3.6A2.2 2.2 0 0 0 5.2 21h3.6a2.2 2.2 0 0 0 2.2-2.2v-3.6A2.2 2.2 0 0 0 8.8 13M21.707 8.293 17 3.586l-4.707 4.707 1.414 1.414L16 7.414V21h2V7.414l2.293 2.293z"/></svg>
);

export default SortAscendingFilledIcon;
