import React from 'react';
import type { IconProps } from '../types';

const HomeOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l9 9a.75.75 0 1 1-1.06 1.06L12 4.06l-8.47 8.47a.75.75 0 0 1-1.06-1.06z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M4.25 20V10h1.5v10c0 .13.04.18.055.195.016.015.065.055.195.055h12c.13 0 .18-.04.195-.055.015-.016.055-.065.055-.195V10h1.5v10c0 .47-.16.92-.495 1.255s-.785.495-1.255.495H6c-.47 0-.92-.16-1.255-.495S4.25 20.47 4.25 20" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M12 14.75c-.686 0-1.25.564-1.25 1.25v5h-1.5v-5A2.756 2.756 0 0 1 12 13.25 2.756 2.756 0 0 1 14.75 16v5h-1.5v-5c0-.686-.564-1.25-1.25-1.25" clip-rule="evenodd"/></svg>
);

export default HomeOutlineIcon;
