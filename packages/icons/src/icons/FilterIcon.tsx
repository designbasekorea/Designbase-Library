import React from 'react';
import type { IconProps } from '../types';

const FilterIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M2.25 2.25h19.5v6.214l-6 3v8.077l-7.5 2.5V11.464l-6-3zm1.5 1.5v3.786l6 3v9.423l4.5-1.5v-7.922l6-3V3.75z" clipRule="evenodd"/></svg>
);

export default FilterIcon;
