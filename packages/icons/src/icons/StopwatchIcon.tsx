import React from 'react';
import type { IconProps } from '../types';

const StopwatchIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 6.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5M3.75 13.5a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M12.75 9v4h-1.5V9zM15 3.75H9v-1.5h6zM20.47 7.53l-2-2 1.06-1.06 2 2z" clipRule="evenodd"/></svg>
);

export default StopwatchIcon;
