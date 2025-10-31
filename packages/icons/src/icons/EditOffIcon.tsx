import React from 'react';
import type { IconProps } from '../types';

const EditOffIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M7.47 21.75H2.25v-5.22L9.4 9.4l1.06 1.07-6.71 6.69v3.09h3.09l6.69-6.71 1.07 1.05zM16.69 12.5l-1.06-1.06 3.99-4c.4-.4.63-.96.63-1.53a2.2 2.2 0 0 0-.63-1.53c-.81-.81-2.24-.81-3.05 0l-4.01 3.99-1.06-1.06 4-3.99c.68-.68 1.62-1.07 2.58-1.07s1.89.38 2.59 1.07a3.68 3.68 0 0 1 1.07 2.59c0 .97-.39 1.91-1.07 2.59l-3.99 4z"/><path fill="currentColor" d="m14.61 5.242-1.06 1.06 4.15 4.151 1.06-1.06zM3.527 2.468l-1.06 1.06L20.47 21.533l1.06-1.06z"/></svg>
);

export default EditOffIcon;
