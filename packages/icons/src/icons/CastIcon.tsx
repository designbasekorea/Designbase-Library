import React from 'react';
import type { IconProps } from '../types';

const CastIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M1 21v-3c1.7 0 3 1.3 3 3z" clip-rule="evenodd"/><path fill="currentColor" d="M8 21H6c0-2.8-2.2-5-5-5v-2c3.9 0 7 3.1 7 7"/><path fill="currentColor" d="M12 21h-2c0-5-4-9-9-9v-2c6.1 0 11 4.9 11 11"/><path fill="currentColor" fill-rule="evenodd" d="M4 4.75c-.686 0-1.25.564-1.25 1.25v2h-1.5V6A2.756 2.756 0 0 1 4 3.25h16A2.756 2.756 0 0 1 22.75 6v12A2.756 2.756 0 0 1 20 20.75h-6v-1.5h6c.686 0 1.25-.564 1.25-1.25V6c0-.686-.564-1.25-1.25-1.25z" clip-rule="evenodd"/></svg>
);

export default CastIcon;
