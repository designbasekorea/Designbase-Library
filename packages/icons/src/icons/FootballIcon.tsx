import React from 'react';
import type { IconProps } from '../types';

const FootballIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M12.544 5.905a.75.75 0 0 1 .912 0l4.5 3.45a.75.75 0 0 1 .262.81l-1.664 5.55a.75.75 0 0 1-.718.535h-5.672a.75.75 0 0 1-.718-.535l-1.664-5.55a.75.75 0 0 1 .262-.81zM9.367 10.23l1.355 4.52h4.556l1.355-4.52L13 7.445z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M3.065 8.11a.75.75 0 0 1 .95-.47l4.726 1.6a.75.75 0 0 1-.482 1.42l-4.725-1.6a.75.75 0 0 1-.47-.95M13 2.305a.75.75 0 0 1 .75.75V6.5a.75.75 0 0 1-1.5 0V3.055a.75.75 0 0 1 .75-.75M21.01 8.275a.75.75 0 0 1-.354 1l-2.833 1.352a.75.75 0 1 1-.646-1.354l2.833-1.352a.75.75 0 0 1 1 .354M15.366 14.916a.75.75 0 0 1 1.054.114l2.403 2.987a.75.75 0 1 1-1.168.94l-2.403-2.987a.75.75 0 0 1 .114-1.054M10.665 14.942A.75.75 0 0 1 10.722 16L7.31 19.807a.75.75 0 1 1-1.116-1.002L9.606 15a.75.75 0 0 1 1.059-.057" clip-rule="evenodd"/></svg>
);

export default FootballIcon;
