import React from 'react';
import type { IconProps } from '../types';

const AdobeIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M9.401 3H2v18zM14.609 3H22v18zM12.005 9.634 16.715 21h-3.09l-1.408-3.619H8.77z"/></svg>
);

export default AdobeIcon;
