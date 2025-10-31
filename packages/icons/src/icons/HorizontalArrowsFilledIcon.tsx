import React from 'react';
import type { IconProps } from '../types';

const HorizontalArrowsFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m15.707 5.793-1.414 1.414L19.086 12l-4.793 4.793 1.414 1.414L21.914 12zM8.293 5.793 2.086 12l6.207 6.207 1.414-1.414L4.914 12l4.793-4.793z"/></svg>
);

export default HorizontalArrowsFilledIcon;
