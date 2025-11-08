import React from 'react';
import type { IconProps } from '../types';

const SwitchVerticalIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M8.47 3.47A.75.75 0 0 1 9.75 4v17h-1.5V5.81L4.54 9.52 3.48 8.46zM15.75 3v15.19l3.71-3.71 1.06 1.06-4.99 4.99a.75.75 0 0 1-1.28-.53V3z"/></svg>
);

export default SwitchVerticalIcon;
