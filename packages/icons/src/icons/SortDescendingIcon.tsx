import React from 'react';
import type { IconProps } from '../types';

const SortDescendingIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M5.2 4.75a.45.45 0 0 0-.45.45v3.6c0 .249.201.45.45.45h3.6a.45.45 0 0 0 .45-.45V5.2a.45.45 0 0 0-.45-.45zm-1.95.45A1.95 1.95 0 0 1 5.2 3.25h3.6a1.95 1.95 0 0 1 1.95 1.95v3.6a1.95 1.95 0 0 1-1.95 1.95H5.2A1.95 1.95 0 0 1 3.25 8.8zM5.2 14.75a.45.45 0 0 0-.45.45v3.6c0 .249.201.45.45.45h3.6a.45.45 0 0 0 .45-.45v-3.6a.45.45 0 0 0-.45-.45zm-1.95.45a1.95 1.95 0 0 1 1.95-1.95h3.6a1.95 1.95 0 0 1 1.95 1.95v3.6a1.95 1.95 0 0 1-1.95 1.95H5.2a1.95 1.95 0 0 1-1.95-1.95zM12.47 15.53l1.06-1.06L17 17.94l3.47-3.47 1.06 1.06L17 20.06z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M17.75 3v16h-1.5V3z" clipRule="evenodd"/></svg>
);

export default SortDescendingIcon;
