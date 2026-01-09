import React from 'react';
import type { IconProps } from '../types';

const RainFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path stroke="currentColor" strokeLinecap="round" stroke-miterlimit="10" strokeWidth="2" d="m7 15.4 1 5.9M11.2 16.2l1 5.8M15.3 15.4l1 5.9"/><path stroke="currentColor" stroke-miterlimit="10" strokeWidth="2" d="M7 19c-2.8 0-5-2.2-5-5s1.2-3.8 3-4.6V9c0-3.3 2.7-6 6-6s5.5 2.9 5.9 5c1.2 0 2.3.5 3.1 1.3 1.2 1 2 2.5 2 4.2 0 3.1-2.5 5.5-5.5 5.5"/></svg>
);

export default RainFilledIcon;
