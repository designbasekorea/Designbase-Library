import React from 'react';
import type { IconProps } from '../types';

const LaptopIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M5 5.75c-.69 0-1.25.56-1.25 1.25v8c0 .69.56 1.25 1.25 1.25h14c.69 0 1.25-.56 1.25-1.25V7c0-.69-.56-1.25-1.25-1.25zM2.25 7A2.75 2.75 0 0 1 5 4.25h14A2.75 2.75 0 0 1 21.75 7v8A2.75 2.75 0 0 1 19 17.75H5A2.75 2.75 0 0 1 2.25 15zM23 20.75H1v-1.5h22z" clipRule="evenodd"/></svg>
);

export default LaptopIcon;
