import React from 'react';
import type { IconProps } from '../types';

const SubLeftIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M19.25 13.25V4h1.5v10.75H3v-1.5z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="m4.06 14 5.47-5.47-1.06-1.06L1.94 14l6.53 6.53 1.06-1.06z" clipRule="evenodd"/></svg>
);

export default SubLeftIcon;
