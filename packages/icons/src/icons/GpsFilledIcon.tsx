import React from 'react';
import type { IconProps } from '../types';

const GpsFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2m1 17.931V15h-2v4.931A8.01 8.01 0 0 1 4.069 13H9v-2H4.069A8.01 8.01 0 0 1 11 4.069V9h2V4.069A8.01 8.01 0 0 1 19.931 11H15v2h4.931A8.01 8.01 0 0 1 13 19.931"/></svg>
);

export default GpsFilledIcon;
