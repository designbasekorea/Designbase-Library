import React from 'react';
import type { IconProps } from '../types';

const ShapesIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M6.5 14.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M2.25 17.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0M13.25 14a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-.75.75h-7a.75.75 0 0 1-.75-.75zm1.5.75v5.5h5.5v-5.5zM12 1.25a.75.75 0 0 1 .654.382l4.5 8a.75.75 0 0 1-.654 1.118h-9a.75.75 0 0 1-.654-1.118l4.5-8A.75.75 0 0 1 12 1.25m-3.218 8h6.436L12 3.53z" clipRule="evenodd"/></svg>
);

export default ShapesIcon;
