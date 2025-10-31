import React from 'react';
import type { IconProps } from '../types';

const FolderIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M5 4.75c-.69 0-1.25.56-1.25 1.25v12c0 .69.56 1.25 1.25 1.25h14c.69 0 1.25-.56 1.25-1.25V8c0-.69-.56-1.25-1.25-1.25h-8.31L9.055 5.116a1.25 1.25 0 0 0-.884-.366zM2.25 6A2.75 2.75 0 0 1 5 3.25h3.172c.73 0 1.429.29 1.944.806l1.195 1.194H19A2.75 2.75 0 0 1 21.75 8v10A2.75 2.75 0 0 1 19 20.75H5A2.75 2.75 0 0 1 2.25 18z" clip-rule="evenodd"/></svg>
);

export default FolderIcon;
