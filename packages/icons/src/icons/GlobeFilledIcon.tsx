import React from 'react';
import type { IconProps } from '../types';

const GlobeFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M19.071 16.071c3.898-3.899 3.898-10.243 0-14.142l-1.414 1.414c3.119 3.12 3.119 8.194 0 11.314-3.118 3.118-8.196 3.12-11.314 0l-1.414 1.414A9.95 9.95 0 0 0 11 18.943V20H7v2h10v-2h-4v-1.057a9.95 9.95 0 0 0 6.071-2.87"/><path fill="currentColor" d="M12 15.625A6.633 6.633 0 0 0 18.625 9 6.633 6.633 0 0 0 12 2.375 6.633 6.633 0 0 0 5.375 9 6.633 6.633 0 0 0 12 15.625"/></svg>
);

export default GlobeFilledIcon;
