import React from 'react';
import type { IconProps } from '../types';

const BlockquoteIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M21 14.75H3v-1.5h18zM3 17.25h18v1.5H3zM21 10.75h-8v-1.5h8zM13 5.25h8v1.5h-8zM5.664 4.33 6 5l.336.67h.002l-.008.003-.044.025a3.809 3.809 0 0 0-.756.582 2.7 2.7 0 0 0-.645.97H5A1.75 1.75 0 1 1 3.25 9V8c0-1.27.638-2.199 1.22-2.78a5.3 5.3 0 0 1 1.155-.87l.025-.014.009-.004.003-.002zM4.75 8.75V9A.25.25 0 1 0 5 8.75zM10.664 4.33 11 5l.336.67h.002l-.007.003-.045.025a3.81 3.81 0 0 0-.756.582 2.7 2.7 0 0 0-.645.97H10A1.75 1.75 0 1 1 8.25 9V8c0-1.27.638-2.199 1.22-2.78a5.3 5.3 0 0 1 1.155-.87l.025-.014.009-.004.003-.002zM9.75 8.75V9a.25.25 0 1 0 .25-.25zm1.588-3.08" clipRule="evenodd"/></svg>
);

export default BlockquoteIcon;
