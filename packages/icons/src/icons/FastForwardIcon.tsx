import React from 'react';
import type { IconProps } from '../types';

const FastForwardIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M4.646 7.339a.75.75 0 0 1 .77.037l6 4a.75.75 0 0 1 0 1.248l-6 4A.75.75 0 0 1 4.25 16V8a.75.75 0 0 1 .396-.661M5.75 9.4V14.6L9.648 12zM13.646 7.339a.75.75 0 0 1 .77.037l6 4a.75.75 0 0 1 0 1.248l-6 4A.75.75 0 0 1 13.25 16V8a.75.75 0 0 1 .396-.661M14.75 9.4V14.6L18.648 12z" clip-rule="evenodd"/></svg>
);

export default FastForwardIcon;
