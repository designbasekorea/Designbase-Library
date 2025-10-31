import React from 'react';
import type { IconProps } from '../types';

const UnsplashIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M8.625 3h6.75v5.063h-6.75zM21 10.875V21H3V10.875h5.625v5.063h6.75v-5.063z" clip-rule="evenodd"/></svg>
);

export default UnsplashIcon;
