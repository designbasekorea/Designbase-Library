import React from 'react';
import type { IconProps } from '../types';

const Refresh2FilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M20 3v3.013A9.96 9.96 0 0 0 12 2C6.486 2 2 6.486 2 12h2c0-4.411 3.589-8 8-8 2.87 0 5.471 1.526 6.909 4H16v2h6V3zM12 20a8.01 8.01 0 0 1-6.914-4H8v-2H2v7h2v-3.003A10.02 10.02 0 0 0 12 22c5.514 0 10-4.486 10-10h-2c0 4.411-3.589 8-8 8"/></svg>
);

export default Refresh2FilledIcon;
