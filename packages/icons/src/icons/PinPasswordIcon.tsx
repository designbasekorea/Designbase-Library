import React from 'react';
import type { IconProps } from '../types';

const PinPasswordIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M19 3a2 2 0 1 1-.781 3.84L6.84 18.22l.013.031h10.293a2 2 0 1 1 0 1.5H6.854a2 2 0 1 1-1.074-2.592L17.158 5.78l-.012-.03H6.855a2 2 0 1 1 0-1.5h10.293A2 2 0 0 1 19 3"/></svg>
);

export default PinPasswordIcon;
