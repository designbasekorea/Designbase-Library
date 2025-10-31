import React from 'react';
import type { IconProps } from '../types';

const PauseIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M5.25 3.25h5.5v17.5h-5.5zm1.5 1.5v14.5h2.5V4.75zM13.25 3.25h5.5v17.5h-5.5zm1.5 1.5v14.5h2.5V4.75z" clip-rule="evenodd"/></svg>
);

export default PauseIcon;
