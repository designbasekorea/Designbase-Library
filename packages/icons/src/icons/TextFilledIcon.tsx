import React from 'react';
import type { IconProps } from '../types';

const TextFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M2 3v4h2V5h7v14H9v2h6v-2h-2V5h7v2h2V3z"/></svg>
);

export default TextFilledIcon;
