import React from 'react';
import type { IconProps } from '../types';

const LongUpLeftIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M13 5.75H6.81l13.22 13.22-1.06 1.06L5.75 6.81V13h-1.5V4.25H13z"/></svg>
);

export default LongUpLeftIcon;
