import React from 'react';
import type { IconProps } from '../types';

const ReceiptIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M3.25 4.8A2.543 2.543 0 0 1 5.8 2.25h12.6a2.543 2.543 0 0 1 2.55 2.55V21a.75.75 0 0 1-1.166.624L17.5 20.101l-2.284 1.523a.75.75 0 0 1-.862-.021l-2.254-1.67-2.254 1.67a.75.75 0 0 1-.862.021L6.7 20.101l-2.284 1.523A.75.75 0 0 1 3.25 21zM5.8 3.75c-.586 0-1.05.464-1.05 1.05v14.799l1.534-1.023a.75.75 0 0 1 .832 0l2.261 1.508 2.277-1.687a.75.75 0 0 1 .892 0l2.277 1.687 2.261-1.508a.75.75 0 0 1 .832 0l1.534 1.023V4.8c0-.586-.464-1.05-1.05-1.05z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M17 7.75H7v-1.5h10zM17 11.75H7v-1.5h10zM12 15.75H7v-1.5h5z" clip-rule="evenodd"/></svg>
);

export default ReceiptIcon;
