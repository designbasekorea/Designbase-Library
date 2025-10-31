import React from 'react';
import type { IconProps } from '../types';

const AppWindowIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M21.25 6c0-.69-.56-1.25-1.25-1.25H4c-.69 0-1.25.56-1.25 1.25v12c0 .69.56 1.25 1.25 1.25h16c.69 0 1.25-.56 1.25-1.25zm1.5 12A2.75 2.75 0 0 1 20 20.75H4A2.75 2.75 0 0 1 1.25 18V6A2.75 2.75 0 0 1 4 3.25h16A2.75 2.75 0 0 1 22.75 6z"/><path fill="currentColor" d="M19 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2M16 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2M13 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>
);

export default AppWindowIcon;
