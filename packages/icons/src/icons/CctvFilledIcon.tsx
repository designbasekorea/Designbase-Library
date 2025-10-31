import React from 'react';
import type { IconProps } from '../types';

const CctvFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M19 5.7C18.9 4.2 17.6 3 16 3H5C3.3 3 2 4.3 2 6v6c0 1.7 1.3 3 3 3h4c0 1.5-1.2 2.7-2.7 2.7H4V16H2v6h2v-2.3h2.3c2.6 0 4.7-2.1 4.7-4.7h5c1.6 0 2.8-1.2 3-2.7l4 1V4.7zM14 9c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1m7 1.7-2-.5V7.8l2-.5z"/></svg>
);

export default CctvFilledIcon;
