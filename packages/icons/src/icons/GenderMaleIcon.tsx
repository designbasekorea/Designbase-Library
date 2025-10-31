import React from 'react';
import type { IconProps } from '../types';

const GenderMaleIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="m12.07 10.87 6.4-6.4 1.06 1.06-6.4 6.4z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M14 4.25h5.75V10h-1.5V5.75H14zM9 10.75a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5M3.25 15a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0" clip-rule="evenodd"/></svg>
);

export default GenderMaleIcon;
