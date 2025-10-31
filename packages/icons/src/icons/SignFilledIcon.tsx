import React from 'react';
import type { IconProps } from '../types';

const SignFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M13 11h6.914l3.5-3.5-3.5-3.5H13V1h-2v7H4.086l-3.5 3.5 3.5 3.5H11v6H8v2h8v-2h-3z"/></svg>
);

export default SignFilledIcon;
