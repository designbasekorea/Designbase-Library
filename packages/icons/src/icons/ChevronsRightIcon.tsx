import React from 'react';
import type { IconProps } from '../types';

const ChevronsRightIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M13.53 6.47 19.06 12l-5.53 5.53-1.06-1.06L16.94 12l-4.47-4.47zM6.53 6.47 12.06 12l-5.53 5.53-1.06-1.06L9.94 12 5.47 7.53z" clipRule="evenodd"/></svg>
);

export default ChevronsRightIcon;
