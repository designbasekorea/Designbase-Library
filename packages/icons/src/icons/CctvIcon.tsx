import React from 'react';
import type { IconProps } from '../types';

const CctvIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M14 9c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1"/><path fill="currentColor" fill-rule="evenodd" d="M5 4.75c-.69 0-1.25.56-1.25 1.25v6c0 .69.56 1.25 1.25 1.25h11c.69 0 1.25-.56 1.25-1.25V6c0-.69-.56-1.25-1.25-1.25zM2.25 6A2.75 2.75 0 0 1 5 3.25h11A2.75 2.75 0 0 1 18.75 6v6A2.75 2.75 0 0 1 16 14.75H5A2.75 2.75 0 0 1 2.25 12z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M22.75 5.04v7.92l-5.5-1.374V6.414zm-4 2.546v2.828l2.5.625V6.961zM6.333 17.917A2.93 2.93 0 0 0 9.25 15h1.5a4.43 4.43 0 0 1-4.417 4.417H3v-1.5z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M2.25 22v-6h1.5v6z" clip-rule="evenodd"/></svg>
);

export default CctvIcon;
