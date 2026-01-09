import React from 'react';
import type { IconProps } from '../types';

const NoteIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M5 3.75a.25.25 0 0 0-.25.25v16c0 .138.112.25.25.25h8.69l5.56-5.56V4a.25.25 0 0 0-.25-.25zM3.25 4c0-.966.784-1.75 1.75-1.75h14c.966 0 1.75.784 1.75 1.75v11.31l-6.44 6.44H5A1.75 1.75 0 0 1 3.25 20z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M13.25 14.25H20v1.5h-5.25V21h-1.5z" clipRule="evenodd"/></svg>
);

export default NoteIcon;
