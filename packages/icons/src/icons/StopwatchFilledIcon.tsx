import React from 'react';
import type { IconProps } from '../types';

const StopwatchFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12 5c-4.687 0-8.5 3.813-8.5 8.5S7.313 22 12 22s8.5-3.813 8.5-8.5S16.687 5 12 5m1 8h-2V9h2zM15 2H9v2h6zM19.707 4.293l-1.414 1.414 2 2 1.414-1.415z"/></svg>
);

export default StopwatchFilledIcon;
