import React from 'react';
import type { IconProps } from '../types';

const SwitchVerticalFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M9.38 3.08a.99.99 0 0 0-1.09.22L3.3 8.29 4.71 9.7l3.28-3.28v14.59h2V4c0-.4-.24-.77-.62-.92zM19.28 14.3 16 17.58V3h-2v17c0 .4.24.77.62.92a.995.995 0 0 0 1.09-.21l4.99-4.99z"/></svg>
);

export default SwitchVerticalFilledIcon;
