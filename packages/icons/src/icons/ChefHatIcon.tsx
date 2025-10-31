import React from 'react';
import type { IconProps } from '../types';

const ChefHatIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M4.25 17a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M7.284 5.433a4.751 4.751 0 0 1 9.433 0A4.6 4.6 0 0 1 18 5.25 4.75 4.75 0 0 1 22.75 10a4.73 4.73 0 0 1-3 4.402V22a.75.75 0 0 1-.75.75H5a.75.75 0 0 1-.75-.75v-7.598a4.735 4.735 0 0 1-3-4.402A4.75 4.75 0 0 1 6 5.25c.448 0 .878.065 1.284.183M12 2.75A3.25 3.25 0 0 0 8.75 6a3 3 0 0 0 .051.48.75.75 0 0 1-1.13.749A3.2 3.2 0 0 0 6 6.75 3.25 3.25 0 0 0 2.75 10a3.24 3.24 0 0 0 2.438 3.133.75.75 0 0 1 .562.726v7.391h12.5v-7.391a.75.75 0 0 1 .562-.726A3.24 3.24 0 0 0 21.25 10 3.25 3.25 0 0 0 18 6.75c-.606 0-1.173.177-1.67.479a.75.75 0 0 1-1.13-.753c.03-.205.05-.341.05-.476A3.25 3.25 0 0 0 12 2.75" clip-rule="evenodd"/></svg>
);

export default ChefHatIcon;
