import React from 'react';
import type { IconProps } from '../types';

const FileManagerIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M5.75 8v8A4.25 4.25 0 0 0 10 20.25h5v1.5h-5A5.75 5.75 0 0 1 4.25 16V8z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M11 3.75c-.69 0-1.25.56-1.25 1.25v10c0 .69.56 1.25 1.25 1.25h6c.69 0 1.25-.56 1.25-1.25V8.31l-4.56-4.56zM8.25 5A2.75 2.75 0 0 1 11 2.25h3.31l5.44 5.44V15A2.75 2.75 0 0 1 17 17.75h-6A2.75 2.75 0 0 1 8.25 15z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M13.25 6V3h1.5v3c0 .69.56 1.25 1.25 1.25h3v1.5h-3A2.75 2.75 0 0 1 13.25 6" clipRule="evenodd"/></svg>
);

export default FileManagerIcon;
