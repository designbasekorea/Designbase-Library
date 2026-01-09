import React from 'react';
import type { IconProps } from '../types';

const SelectMultipleIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M13.008 11.431 17.47 6.97l1.06 1.06-5.538 5.539-3.53-3.639 1.076-1.044z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M8 3.75a.25.25 0 0 0-.25.25v12c0 .138.112.25.25.25h12a.25.25 0 0 0 .25-.25V4a.25.25 0 0 0-.25-.25zM6.25 4c0-.966.784-1.75 1.75-1.75h12c.966 0 1.75.784 1.75 1.75v12A1.75 1.75 0 0 1 20 17.75H8A1.75 1.75 0 0 1 6.25 16z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M3.75 9v9A2.25 2.25 0 0 0 6 20.25h9v1.5H6A3.75 3.75 0 0 1 2.25 18V9z" clipRule="evenodd"/></svg>
);

export default SelectMultipleIcon;
