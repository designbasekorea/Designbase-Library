import React from 'react';
import type { IconProps } from '../types';

const WonFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2m5.372 11h-1.304l-.882 2.352a1 1 0 0 1-.934.648h-.003c-.415 0-.786-.256-.935-.644l-1.338-3.508-1.289 3.498a1 1 0 0 1-.936.654h-.003c-.417 0-.79-.259-.937-.648L7.929 13H6.608a1 1 0 1 1 0-2h.571l-.618-1.649a1.001 1.001 0 0 1 1.873-.703L9.74 12.13l1.281-3.477a1 1 0 0 1 .933-.654h.005c.415 0 .786.256.935.644l1.346 3.529.206-.549.008-.021 1.108-2.954a1 1 0 0 1 1.873.703L16.817 11h.554a1 1 0 0 1 .001 2"/></svg>
);

export default WonFilledIcon;
