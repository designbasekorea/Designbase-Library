import React from 'react';
import type { IconProps } from '../types';

const CurtainFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M21 2H3c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 7.88h-2.5c-.62-.87-2.11-3.2-2.43-5.88H21zm-4.2 1.07c-.76 1.39-2.51 4.98-2.77 9.05H9.96c-.26-4.07-2.01-7.67-2.77-9.05.8-1.12 2.43-3.8 2.74-6.95h4.13c.31 3.15 1.95 5.83 2.74 6.95M3 4h4.93C7.61 6.68 6.12 9.01 5.5 9.88H3zm0 7.88h2.42c.65 1.19 2.27 4.49 2.54 8.12H3zM16.04 20c.27-3.63 1.89-6.93 2.54-8.12H21V20z"/></svg>
);

export default CurtainFilledIcon;
