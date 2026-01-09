import React from 'react';
import type { IconProps } from '../types';

const GalleryIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M7.5 11c.8 0 1.5-.7 1.5-1.5S8.3 8 7.5 8 6 8.7 6 9.5 6.7 11 7.5 11"/><path fill="currentColor" fillRule="evenodd" d="m16.698 9.015 5.787 4.913-.97 1.144-4.813-4.087L5.487 20.57l-.974-1.14z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M4 4.75c-.69 0-1.25.56-1.25 1.25v12c0 .69.56 1.25 1.25 1.25h16c.69 0 1.25-.56 1.25-1.25V6c0-.69-.56-1.25-1.25-1.25zM1.25 6A2.75 2.75 0 0 1 4 3.25h16A2.75 2.75 0 0 1 22.75 6v12A2.75 2.75 0 0 1 20 20.75H4A2.75 2.75 0 0 1 1.25 18z" clipRule="evenodd"/></svg>
);

export default GalleryIcon;
