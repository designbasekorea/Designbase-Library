import React from 'react';
import type { IconProps } from '../types';

const ArrowBarDownFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M20 4H4v2h16zM13 18.086V9h-2v9.086l-4.293-4.293-1.414 1.414L12 21.914l6.707-6.707-1.414-1.414z"/></svg>
);

export default ArrowBarDownFilledIcon;
