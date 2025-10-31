import React from 'react';
import type { IconProps } from '../types';

const MicrophoneOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M12 2.75a2.25 2.25 0 0 0-1.59.66h-.001A2.25 2.25 0 0 0 9.75 5v5c0 .596.237 1.168.66 1.59v.001A2.248 2.248 0 0 0 14.25 10V5A2.254 2.254 0 0 0 12 2.75m-2.651-.402A3.75 3.75 0 0 1 15.75 5v5A3.754 3.754 0 0 1 12 13.75 3.75 3.75 0 0 1 8.25 10V5c0-.995.395-1.949 1.099-2.652" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M6.52 15.48A7.76 7.76 0 0 1 4.25 10h1.5c0 1.657.659 3.247 1.83 4.42m0 0A6.25 6.25 0 0 0 18.25 10h1.5a7.749 7.749 0 0 1-13.23 5.48M16 21.75H8v-1.5h8z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M11.25 21v-4h1.5v4z" clip-rule="evenodd"/></svg>
);

export default MicrophoneOutlineIcon;
