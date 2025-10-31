import React from 'react';
import type { IconProps } from '../types';

const LongBottomDownIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M20.03 5.03 6.81 18.25H13v1.5H4.25V11h1.5v6.19L18.97 3.97z"/></svg>
);

export default LongBottomDownIcon;
