import React from 'react';
import type { IconProps } from '../types';

const TrashIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M6.75 6v13c0 .69.56 1.25 1.25 1.25h8c.69 0 1.25-.56 1.25-1.25V6h1.5v13A2.75 2.75 0 0 1 16 21.75H8A2.75 2.75 0 0 1 5.25 19V6z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M21 6.75H3v-1.5h18z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M7.25 4c0-.966.784-1.75 1.75-1.75h6c.966 0 1.75.784 1.75 1.75v2h-1.5V4a.25.25 0 0 0-.25-.25H9a.25.25 0 0 0-.25.25v2h-1.5zM9.25 16V9h1.5v7zM13.25 16V9h1.5v7z" clipRule="evenodd"/></svg>
);

export default TrashIcon;
