import React from 'react';
import type { IconProps } from '../types';

const ArchiveIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M4.75 8v10c0 .69.56 1.25 1.25 1.25h12c.69 0 1.25-.56 1.25-1.25V8h1.5v10A2.75 2.75 0 0 1 18 20.75H6A2.75 2.75 0 0 1 3.25 18V8z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M15 12.75H9v-1.5h6zM4 4.75a.25.25 0 0 0-.25.25v2c0 .138.112.25.25.25h16a.25.25 0 0 0 .25-.25V5a.25.25 0 0 0-.25-.25zM2.25 5c0-.966.784-1.75 1.75-1.75h16c.966 0 1.75.784 1.75 1.75v2A1.75 1.75 0 0 1 20 8.75H4A1.75 1.75 0 0 1 2.25 7z" clip-rule="evenodd"/></svg>
);

export default ArchiveIcon;
