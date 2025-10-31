import React from 'react';
import type { IconProps } from '../types';

const CodeFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M6.293 7.293 1.586 12l4.707 4.707 1.414-1.414L4.414 12l3.293-3.293zM17.707 7.293l-1.414 1.414L19.586 12l-3.293 3.293 1.414 1.414L22.414 12zM14.08 4.606 8.082 18.608l1.838.787 5.997-14.002z"/></svg>
);

export default CodeFilledIcon;
