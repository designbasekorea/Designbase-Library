import React from 'react';
import type { IconProps } from '../types';

const ItalicFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M18 4V2h-8v2h3.184L8.74 20H6v2h8v-2h-3.185L15.26 4z"/></svg>
);

export default ItalicFilledIcon;
