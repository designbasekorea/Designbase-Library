import React from 'react';
import type { IconProps } from '../types';

const FastRewindIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M20.354 7.339A.75.75 0 0 1 20.75 8v8a.75.75 0 0 1-1.166.624l-6-4a.75.75 0 0 1 0-1.248l6-4a.75.75 0 0 1 .77-.037M15.352 12l3.898 2.599V9.4zM11.354 7.339A.75.75 0 0 1 11.75 8v8a.75.75 0 0 1-1.166.624l-6-4a.75.75 0 0 1 0-1.248l6-4a.75.75 0 0 1 .77-.037M6.352 12l3.898 2.599V9.4z" clipRule="evenodd"/></svg>
);

export default FastRewindIcon;
