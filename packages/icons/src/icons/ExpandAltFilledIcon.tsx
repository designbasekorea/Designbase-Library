import React from 'react';
import type { IconProps } from '../types';

const ExpandAltFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M13 3v2h4.59l-5.3 5.29 1.42 1.42L19 6.41V11h2V3zM10.29 12.29 5 17.59V13H3v8h8v-2H6.41l5.3-5.29z"/></svg>
);

export default ExpandAltFilledIcon;
