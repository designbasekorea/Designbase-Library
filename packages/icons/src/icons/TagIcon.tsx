import React from 'react';
import type { IconProps } from '../types';

const TagIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M8.7 9.8a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/><path fill="currentColor" fillRule="evenodd" d="M4.25 4.25h8.06L22.06 14 14 22.06l-9.75-9.75zm1.5 1.5v5.94L14 19.94 19.94 14l-8.25-8.25z" clipRule="evenodd"/></svg>
);

export default TagIcon;
