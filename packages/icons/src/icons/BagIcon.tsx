import React from 'react';
import type { IconProps } from '../types';

const BagIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M4.298 5.25h15.404l1.1 16.5H3.198zm1.404 1.5-.9 13.5h14.396l-.9-13.5z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M11 2.75c-.686 0-1.25.564-1.25 1.25v5h-1.5V4A2.756 2.756 0 0 1 11 1.25h2A2.756 2.756 0 0 1 15.75 4v5h-1.5V4c0-.686-.564-1.25-1.25-1.25z" clipRule="evenodd"/></svg>
);

export default BagIcon;
