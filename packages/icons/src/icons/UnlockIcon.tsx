import React from 'react';
import type { IconProps } from '../types';

const UnlockIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M5 11.75a.25.25 0 0 0-.25.25v8c0 .138.112.25.25.25h14a.25.25 0 0 0 .25-.25v-8a.25.25 0 0 0-.25-.25zM3.25 12c0-.966.784-1.75 1.75-1.75h14c.966 0 1.75.784 1.75 1.75v8A1.75 1.75 0 0 1 19 21.75H5A1.75 1.75 0 0 1 3.25 20z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M12 3.75A3.26 3.26 0 0 0 8.75 7v4h-1.5V7A4.76 4.76 0 0 1 12 2.25 4.76 4.76 0 0 1 16.75 7v1h-1.5V7A3.26 3.26 0 0 0 12 3.75" clip-rule="evenodd"/></svg>
);

export default UnlockIcon;
