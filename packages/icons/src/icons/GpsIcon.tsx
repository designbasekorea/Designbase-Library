import React from 'react';
import type { IconProps } from '../types';

const GpsIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M12.75 3v6h-1.5V3zM12.75 15v6h-1.5v-6zM21 12.75h-6v-1.5h6zM9 12.75H3v-1.5h6z" clipRule="evenodd"/></svg>
);

export default GpsIcon;
