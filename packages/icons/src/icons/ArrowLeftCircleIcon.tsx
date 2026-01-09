import React from 'react';
import type { IconProps } from '../types';

const ArrowLeftCircleIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M1.25 12C1.25 6.086 6.086 1.25 12 1.25S22.75 6.086 22.75 12 17.914 22.75 12 22.75 1.25 17.914 1.25 12M12 2.75c-5.086 0-9.25 4.164-9.25 9.25s4.164 9.25 9.25 9.25 9.25-4.164 9.25-9.25S17.086 2.75 12 2.75" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="m11.47 7.47 1.06 1.06L9.06 12l3.47 3.47-1.06 1.06L6.94 12z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M8 11.25h8v1.5H8z" clipRule="evenodd"/></svg>
);

export default ArrowLeftCircleIcon;
