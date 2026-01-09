import React from 'react';
import type { IconProps } from '../types';

const PrinterIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M17 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/><path fill="currentColor" fillRule="evenodd" d="M5 5.75c-.686 0-1.25.564-1.25 1.25v7c0 .686.564 1.25 1.25 1.25h1v1.5H5A2.756 2.756 0 0 1 2.25 14V7A2.756 2.756 0 0 1 5 4.25h14A2.756 2.756 0 0 1 21.75 7v7A2.756 2.756 0 0 1 19 16.75h-1v-1.5h1c.686 0 1.25-.564 1.25-1.25V7c0-.686-.564-1.25-1.25-1.25z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M9 2.75c-.686 0-1.25.564-1.25 1.25v.25h8.5V4c0-.686-.564-1.25-1.25-1.25zM6.25 4A2.756 2.756 0 0 1 9 1.25h6A2.756 2.756 0 0 1 17.75 4v1.75H6.25zM5.25 13.25h13.5v7.5H5.25zm1.5 1.5v4.5h10.5v-4.5z" clipRule="evenodd"/></svg>
);

export default PrinterIcon;
