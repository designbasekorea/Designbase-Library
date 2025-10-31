import React from 'react';
import type { IconProps } from '../types';

const MailIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="m1.665 8.67.67-1.34L12 12.161l9.665-4.833.67 1.342L12 13.839z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M4 5.75c-.69 0-1.25.56-1.25 1.25v10c0 .69.56 1.25 1.25 1.25h16c.69 0 1.25-.56 1.25-1.25V7c0-.69-.56-1.25-1.25-1.25zM1.25 7A2.75 2.75 0 0 1 4 4.25h16A2.75 2.75 0 0 1 22.75 7v10A2.75 2.75 0 0 1 20 19.75H4A2.75 2.75 0 0 1 1.25 17z" clip-rule="evenodd"/></svg>
);

export default MailIcon;
