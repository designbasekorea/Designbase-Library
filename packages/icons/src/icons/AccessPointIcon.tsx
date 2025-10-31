import React from 'react';
import type { IconProps } from '../types';

const AccessPointIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M6.021 5.54c-3.695 3.574-3.695 9.346 0 12.92L4.98 19.54C.674 15.373.674 8.625 4.979 4.46zm13-1.08c4.305 4.166 4.305 10.914 0 15.08l-1.043-1.08c3.696-3.574 3.696-9.346 0-12.92zm-10 4.58a4.083 4.083 0 0 0 0 5.92l-1.042 1.08a5.584 5.584 0 0 1 0-8.08zm7-1.08a5.584 5.584 0 0 1 0 8.08l-1.042-1.08a4.083 4.083 0 0 0 0-5.92zM12 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/></svg>
);

export default AccessPointIcon;
