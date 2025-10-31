import React from 'react';
import type { IconProps } from '../types';

const DoneFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m9.5 18.4-5.7-5.7 1.4-1.4 4.3 4.3 9.3-9.3 1.4 1.4z"/></svg>
);

export default DoneFilledIcon;
