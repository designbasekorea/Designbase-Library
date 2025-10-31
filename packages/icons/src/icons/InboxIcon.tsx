import React from 'react';
import type { IconProps } from '../types';

const InboxIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M1.25 13a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .53.22l2.78 2.78h5.38l2.78-2.78a.75.75 0 0 1 .53-.22h4a.75.75 0 0 1 0 1.5h-3.69l-2.78 2.78a.75.75 0 0 1-.53.22H9a.75.75 0 0 1-.53-.22l-2.78-2.78H2a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M3.268 3.837A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .732.587l2 9a.8.8 0 0 1 .018.163v7a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75v-7a.8.8 0 0 1 .018-.163zm1.334.913L2.75 13.082v6.168h18.5v-6.168L19.398 4.75z" clip-rule="evenodd"/></svg>
);

export default InboxIcon;
