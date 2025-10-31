import React from 'react';
import type { IconProps } from '../types';

const AccessibleIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12 2.25c5.384 0 9.75 4.366 9.75 9.75s-4.366 9.75-9.75 9.75S2.25 17.384 2.25 12 6.616 2.25 12 2.25m0 1.5a8.25 8.25 0 1 0 .001 16.501A8.25 8.25 0 0 0 12 3.75m5.148 5.985-4.398.88v2.176l2.894 4.823-1.288.772L12 14.458l-2.356 3.928-1.288-.772 2.894-4.823v-2.177l-4.397-.879.294-1.47 4.853.97 4.852-.97zM12 5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"/></svg>
);

export default AccessibleIcon;
