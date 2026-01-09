import React from 'react';
import type { IconProps } from '../types';

const DevicesIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M7 4.75a.25.25 0 0 0-.25.25v3h-1.5V5c0-.966.784-1.75 1.75-1.75h13c.966 0 1.75.784 1.75 1.75v11A1.75 1.75 0 0 1 20 17.75h-9v-1.5h9a.25.25 0 0 0 .25-.25V5a.25.25 0 0 0-.25-.25z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M4 8.75a.25.25 0 0 0-.25.25v10c0 .138.112.25.25.25h6a.25.25 0 0 0 .25-.25V9a.25.25 0 0 0-.25-.25zM2.25 9c0-.966.784-1.75 1.75-1.75h6c.966 0 1.75.784 1.75 1.75v10A1.75 1.75 0 0 1 10 20.75H4A1.75 1.75 0 0 1 2.25 19z" clipRule="evenodd"/></svg>
);

export default DevicesIcon;
