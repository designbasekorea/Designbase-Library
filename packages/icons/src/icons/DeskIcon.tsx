import React from 'react';
import type { IconProps } from '../types';

const DeskIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M23 8.25h-2.25V18.5h-1.5v-6.75H4.75v5.75h-1.5V8.25H1v-1.5h22zm-18.25 2h14.5v-2H4.75z"/></svg>
);

export default DeskIcon;
