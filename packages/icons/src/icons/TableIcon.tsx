import React from 'react';
import type { IconProps } from '../types';

const TableIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M21 7.25h-8.25v10.5H17v1.5h-4.25v.25h-1.5v-.25H7v-1.5h4.25V7.25H3v-1.5h18z"/></svg>
);

export default TableIcon;
