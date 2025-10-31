import React from 'react';
import type { IconProps } from '../types';

const WarningIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .646.37l10 17A.75.75 0 0 1 22 20.75H2a.75.75 0 0 1-.646-1.13l10-17A.75.75 0 0 1 12 2.25m-8.689 17H20.69L12 4.48z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M11.25 14V9h1.5v5zM11.25 17v-2h1.5v2z" clip-rule="evenodd"/></svg>
);

export default WarningIcon;
