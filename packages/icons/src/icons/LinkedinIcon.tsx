import React from 'react';
import type { IconProps } from '../types';

const LinkedinIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M17 21v-6.75c0-1.059-1.188-1.944-2.246-1.944-1.06 0-1.754.885-1.754 1.944V21H9V9h4v2c.662-1.071 2.356-1.763 3.525-1.763C18.997 9.237 21 11.28 21 13.75V21zM3 21V9h4v12zM7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0" clipRule="evenodd"/></svg>
);

export default LinkedinIcon;
