import React from 'react';
import type { IconProps } from '../types';

const ConfusedIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M8.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M15.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/><path fill="currentColor" fill-rule="evenodd" d="M12 3.25a8.75 8.75 0 1 0 0 17.5 8.75 8.75 0 0 0 0-17.5M1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M8 13.95h8v1.5H8z" clip-rule="evenodd"/></svg>
);

export default ConfusedIcon;
