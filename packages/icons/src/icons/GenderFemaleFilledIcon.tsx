import React from 'react';
import type { IconProps } from '../types';

const GenderFemaleFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M18 9c0-3.309-2.691-6-6-6S6 5.691 6 9c0 2.967 2.167 5.431 5 5.91V17H8v2h3v3h2v-3h3v-2h-3v-2.09c2.833-.478 5-2.942 5-5.91M8 9c0-2.206 1.794-4 4-4s4 1.794 4 4-1.794 4-4 4-4-1.794-4-4"/></svg>
);

export default GenderFemaleFilledIcon;
