import React from 'react';
import type { IconProps } from '../types';

const ErrorFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z"/></svg>
);

export default ErrorFilledIcon;
