import React from 'react';
import type { IconProps } from '../types';

const CommentIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M4 4.75c-.686 0-1.25.564-1.25 1.25v14.44l3.781-3.026A.75.75 0 0 1 7 17.25h13c.686 0 1.25-.564 1.25-1.25V6c0-.686-.564-1.25-1.25-1.25zM1.25 6A2.756 2.756 0 0 1 4 3.25h16A2.756 2.756 0 0 1 22.75 6v10A2.756 2.756 0 0 1 20 18.75H7.263L2.47 22.586A.75.75 0 0 1 1.25 22z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M18 9.75H6v-1.5h12zM12 13.75H6v-1.5h6z" clipRule="evenodd"/></svg>
);

export default CommentIcon;
