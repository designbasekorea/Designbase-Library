import React from 'react';
import type { IconProps } from '../types';

const CreditScoreIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M16.23 10.18 11 15.41l-3.23-3.23 1.06-1.06L11 13.29l4.17-4.17zM1.25 13c0-2.42.801-4.655 2.151-6.452l1.2.9A9.2 9.2 0 0 0 2.75 13a9.21 9.21 0 0 0 2.65 6.475l-1.07 1.05A10.71 10.71 0 0 1 1.25 13M21.25 13a9.2 9.2 0 0 0-1.85-5.552l1.199-.9A10.7 10.7 0 0 1 22.75 13c0 2.932-1.177 5.587-3.079 7.525l-1.07-1.05A9.21 9.21 0 0 0 21.25 13M12 2.25c3 0 5.72 1.237 7.666 3.226l-1.072 1.048A9.2 9.2 0 0 0 12 3.75a9.2 9.2 0 0 0-6.594 2.774L4.334 5.476A10.7 10.7 0 0 1 12 2.25"/></svg>
);

export default CreditScoreIcon;
