import React from 'react';
import type { IconProps } from '../types';

const TwitterIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M19.994 6.688a4.3 4.3 0 0 0 1.887-2.374 8.6 8.6 0 0 1-2.725 1.041 4.292 4.292 0 0 0-7.313 3.914 12.18 12.18 0 0 1-8.846-4.483 4.27 4.27 0 0 0-.581 2.157 4.29 4.29 0 0 0 1.91 3.572 4.3 4.3 0 0 1-1.945-.537v.054c0 2.08 1.48 3.814 3.443 4.209a4.3 4.3 0 0 1-1.939.073 4.3 4.3 0 0 0 4.01 2.98 8.6 8.6 0 0 1-5.33 1.838q-.52 0-1.024-.06A12.15 12.15 0 0 0 8.12 21c7.893 0 12.21-6.54 12.21-12.21q0-.28-.012-.556a8.7 8.7 0 0 0 2.141-2.222 8.6 8.6 0 0 1-2.465.676"/></svg>
);

export default TwitterIcon;
