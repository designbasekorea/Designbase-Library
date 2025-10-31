import React from 'react';
import type { IconProps } from '../types';

const LongUpRightIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M19.75 13h-1.5V6.81L5.03 20.03l-1.06-1.06L17.19 5.75H11v-1.5h8.75z"/></svg>
);

export default LongUpRightIcon;
