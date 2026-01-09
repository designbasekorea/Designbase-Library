import React from 'react';
import type { IconProps } from '../types';

const FilpVerticalIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M2.25 5A2.756 2.756 0 0 1 5 2.25h14A2.756 2.756 0 0 1 21.75 5v4h-1.5V5c0-.686-.564-1.25-1.25-1.25H5c-.686 0-1.25.564-1.25 1.25v4h-1.5zM3.75 15v4c0 .686.564 1.25 1.25 1.25h14c.686 0 1.25-.564 1.25-1.25v-4h1.5v4A2.756 2.756 0 0 1 19 21.75H5A2.756 2.756 0 0 1 2.25 19v-4zM13 11.25h3v1.5h-3zM8 11.25h3v1.5H8zM3 11.25h3v1.5H3zM18 11.25h3v1.5h-3z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M3 11.25h3v1.5H3z" clipRule="evenodd"/></svg>
);

export default FilpVerticalIcon;
