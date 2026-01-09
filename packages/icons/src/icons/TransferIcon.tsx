import React from 'react';
import type { IconProps } from '../types';

const TransferIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="m17.94 7-3.47-3.47 1.06-1.06L20.06 7l-4.53 4.53-1.06-1.06z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M18.9 7.65H3.5v-1.5h15.4zM6.06 17l3.47-3.47-1.06-1.06L3.94 17l4.53 4.53 1.06-1.06z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M5 16.35h15.5v1.5H5z" clipRule="evenodd"/></svg>
);

export default TransferIcon;
