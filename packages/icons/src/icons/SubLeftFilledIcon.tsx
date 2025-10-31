import React from 'react';
import type { IconProps } from '../types';

const SubLeftFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M21 4h-2v9H5.414l4.293-4.293-1.414-1.414L1.586 14l6.707 6.707 1.414-1.414L5.414 15H21z"/></svg>
);

export default SubLeftFilledIcon;
