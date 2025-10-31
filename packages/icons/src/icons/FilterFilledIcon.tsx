import React from 'react';
import type { IconProps } from '../types';

const FilterFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M2 2v6.618l6 3v10.77l8-2.667v-8.103l6-3V2z"/></svg>
);

export default FilterFilledIcon;
