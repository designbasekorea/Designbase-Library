import React from 'react';
import type { IconProps } from '../types';

const TableFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M21 7.5v-2H3v2h8v10H7v2h10v-2h-4v-10z"/></svg>
);

export default TableFilledIcon;
