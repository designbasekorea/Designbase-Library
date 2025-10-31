import React from 'react';
import type { IconProps } from '../types';

const CupboardFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M18 3H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2v2h2v-2h8v2h2v-2c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M6 5h12v3H6zm0 5h5v7H6zm7 7v-7h5v7z"/></svg>
);

export default CupboardFilledIcon;
