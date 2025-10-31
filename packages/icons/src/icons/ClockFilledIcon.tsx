import React from 'react';
import type { IconProps } from '../types';

const ClockFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2m4 11h-5V6h2v5h3z"/></svg>
);

export default ClockFilledIcon;
