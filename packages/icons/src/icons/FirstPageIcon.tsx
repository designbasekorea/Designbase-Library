import React from 'react';
import type { IconProps } from '../types';

const FirstPageIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M6.25 19V5h1.5v14zM13.06 12l5.47-5.47-1.06-1.06L10.94 12l6.53 6.53 1.06-1.06z" clip-rule="evenodd"/></svg>
);

export default FirstPageIcon;
