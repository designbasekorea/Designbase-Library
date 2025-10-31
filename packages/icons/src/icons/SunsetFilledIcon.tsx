import React from 'react';
import type { IconProps } from '../types';

const SunsetFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M21 11c0-4.962-4.037-9-9-9s-9 4.038-9 9H1v2h22v-2zM5 11c0-3.86 3.14-7 7-7s7 3.14 7 7zM20 15H4v2h16zM16 19H8v2h8z"/></svg>
);

export default SunsetFilledIcon;
