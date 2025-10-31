import React from 'react';
import type { IconProps } from '../types';

const AmbulanceFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M20.99 11h-1.15l-.58-3.49A2.99 2.99 0 0 0 16.3 5H4.69C3.22 5 1.98 6.05 1.73 7.51l-.72 4.33V19h2.17c.41 1.16 1.51 2 2.82 2s2.4-.84 2.82-2h5.37c.41 1.16 1.51 2 2.82 2s2.4-.84 2.82-2H21c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zM6 19c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m5-7H9v2H7v-2H5v-2h2V8h2v2h2zm4-5h1.3c.49 0 .9.35.98.83l.53 3.17H15zm2 12c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"/></svg>
);

export default AmbulanceFilledIcon;
