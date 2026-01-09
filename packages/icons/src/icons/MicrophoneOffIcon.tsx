import React from 'react';
import type { IconProps } from '../types';

const MicrophoneOffIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="m20.47 21.53-18-18 1.06-1.06 18 18z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M12 2.75a2.25 2.25 0 0 0-1.59.66h-.001A2.25 2.25 0 0 0 9.75 5h-1.5a3.75 3.75 0 1 1 7.5 0v5c0 .37-.055.739-.162 1.092l-1.436-.436q.098-.321.098-.656V5A2.254 2.254 0 0 0 12 2.75M9.75 9.002v1a2.26 2.26 0 0 0 .909 1.808h.001a2.25 2.25 0 0 0 1.992.346l.436 1.436a3.75 3.75 0 0 1-4.438-1.904c-.263-.523-.4-1.1-.4-1.686v-1z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M19.748 9.999a7.7 7.7 0 0 1-1.276 4.264l-1.252-.826A6.2 6.2 0 0 0 18.248 10zM5.345 13.972A7.75 7.75 0 0 1 4.25 10h1.5a6.247 6.247 0 0 0 9.685 5.222l.824 1.254a7.746 7.746 0 0 1-10.914-2.503M16 21.75H8v-1.5h8z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M11.25 21v-4h1.5v4z" clipRule="evenodd"/></svg>
);

export default MicrophoneOffIcon;
