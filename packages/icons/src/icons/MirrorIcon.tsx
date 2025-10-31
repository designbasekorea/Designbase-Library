import React from 'react';
import type { IconProps } from '../types';

const MirrorIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12 2.25A6.753 6.753 0 0 1 18.75 9v12.749H5.25V9A6.753 6.753 0 0 1 12 2.25m0 1.5A5.253 5.253 0 0 0 6.75 9v11.249h10.5V9A5.253 5.253 0 0 0 12 3.75m2.519 6.327a.75.75 0 0 1 1.06 1.06l-4.53 4.531a.75.75 0 0 1-1.06-1.06zm-3.05-1.568a.75.75 0 0 1 1.061 1.06L9.57 12.53a.75.75 0 0 1-1.061-1.06z"/></svg>
);

export default MirrorIcon;
