import React from 'react';
import type { IconProps } from '../types';

const MenuAltFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M21 15H3v2h18zM21 7H3v2h18z"/></svg>
);

export default MenuAltFilledIcon;
