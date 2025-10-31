import React from 'react';
import type { IconProps } from '../types';

const HandleFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M15.694 14h5.086a8.95 8.95 0 0 1-6.993 6.825l.532-5.324a4.2 4.2 0 0 0 1.374-1.502zM9.68 15.502A4.2 4.2 0 0 1 8.306 14H3.22a8.95 8.95 0 0 0 6.993 6.825l-.532-5.324zM20.781 10A8.96 8.96 0 0 0 12 3a8.96 8.96 0 0 0-8.78 7h5.086a4.2 4.2 0 0 1 7.388 0zM1 12C1 5.9 5.9 1 12 1s11 4.9 11 11-4.9 11-11 11S1 18.1 1 12" clip-rule="evenodd"/></svg>
);

export default HandleFilledIcon;
