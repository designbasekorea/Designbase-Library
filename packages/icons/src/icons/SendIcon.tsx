import React from 'react';
import type { IconProps } from '../types';

const SendIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M1.298 4.736A.75.75 0 0 1 2 4.25h20a.75.75 0 0 1 .646 1.13l-10 17a.75.75 0 0 1-1.382-.233l-1.95-9.75-7.808-6.833a.75.75 0 0 1-.208-.828M3.996 5.75l6.498 5.686a.75.75 0 0 1 .241.417l1.615 8.073L20.689 5.75z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="m22.378 5.648-12 7-.756-1.296 12-7z" clip-rule="evenodd"/></svg>
);

export default SendIcon;
