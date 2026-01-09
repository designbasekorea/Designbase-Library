import React from 'react';
import type { IconProps } from '../types';

const SubRightIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M3.25 5h1.5v9.25H21v1.5H3.25z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="m19.94 15-5.47-5.47 1.06-1.06L22.06 15l-6.53 6.53-1.06-1.06z" clipRule="evenodd"/></svg>
);

export default SubRightIcon;
