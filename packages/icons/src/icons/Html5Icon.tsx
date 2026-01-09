import React from 'react';
import type { IconProps } from '../types';

const Html5Icon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="m19.865 3.012-1.431 16.15-6.451 1.826-6.414-1.826-1.433-16.15zM9.229 8.279l7.533.002.173-1.963-9.87-.002.522 5.998h6.835l-.243 2.566-2.179.602-2.214-.605-.141-1.58H7.691l.247 3.123L12 17.506l4.028-1.08.558-6.111H9.402v-.001z" clipRule="evenodd"/></svg>
);

export default Html5Icon;
