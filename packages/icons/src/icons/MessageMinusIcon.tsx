import React from 'react';
import type { IconProps } from '../types';

const MessageMinusIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M7.552 3.326C12.342.87 18.218 2.76 20.675 7.551l.13.263a9.74 9.74 0 0 1-.017 8.404l.784 4.433a.75.75 0 0 1-.86.87l-4.493-.737c-4.747 2.282-10.474.38-12.892-4.335C.87 11.66 2.762 5.783 7.552 3.326m11.788 4.91A8.25 8.25 0 0 0 8.237 4.66a8.248 8.248 0 1 0 7.529 14.678l.11-.046a.75.75 0 0 1 .354-.027l3.68.603-.64-3.631a.75.75 0 0 1 .071-.473 8.25 8.25 0 0 0 0-7.53"/><path fill="currentColor" d="M17 11.25v1.5H7.001v-1.5z"/></svg>
);

export default MessageMinusIcon;
