import React from 'react';
import type { IconProps } from '../types';

const VerticalArrowsIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="m12 19.828-4.364-4.453-1.072 1.05L12 21.97l5.436-5.546-1.072-1.05zM12 2.029l5.436 5.546-1.072 1.05L12 4.172 7.636 8.625l-1.072-1.05z" clipRule="evenodd"/></svg>
);

export default VerticalArrowsIcon;
