import React from 'react';
import type { IconProps } from '../types';

const DressingTableFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M19 10V9c0-3.86-3.14-7-7-7S5 5.14 5 9v1H3v12h2v-4h14v4h2V10zm-6 5h-2v-2h2zm4-5H7V9c0-2.76 2.24-5 5-5s5 2.24 5 5z"/></svg>
);

export default DressingTableFilledIcon;
