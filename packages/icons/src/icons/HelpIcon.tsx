import React from 'react';
import type { IconProps } from '../types';

const HelpIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M11.25 18v-2h1.5v2z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M12 7.75c-1.286 0-2.25.964-2.25 2.25h-1.5c0-2.114 1.636-3.75 3.75-3.75 2.005 0 3.75 1.334 3.75 3.35 0 1.925-1.327 2.72-1.855 3.038l-.01.005c-.225.135-.53.343-.772.604q-.364.396-.363.753v1h-1.5v-1c0-.762.381-1.36.762-1.772a5 5 0 0 1 1.102-.871c.478-.287 1.136-.693 1.136-1.757 0-.984-.854-1.85-2.25-1.85" clip-rule="evenodd"/></svg>
);

export default HelpIcon;
