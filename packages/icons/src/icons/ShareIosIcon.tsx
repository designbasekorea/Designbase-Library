import React from 'react';
import type { IconProps } from '../types';

const ShareIosIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M4.745 10.745c.334-.335.785-.495 1.255-.495h2v1.5H6c-.13 0-.18.04-.195.055-.015.016-.055.065-.055.195v8c0 .13.04.18.055.195.016.015.065.055.195.055h12c.13 0 .18-.04.195-.055.015-.016.055-.065.055-.195v-8c0-.13-.04-.18-.055-.195-.016-.015-.065-.055-.195-.055h-2v-1.5h2c.47 0 .92.16 1.255.495s.495.785.495 1.255v8c0 .47-.16.92-.495 1.255s-.785.495-1.255.495H6c-.47 0-.92-.16-1.255-.495S4.25 20.47 4.25 20v-8c0-.47.16-.92.495-1.255" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M12.75 3v12h-1.5V3z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l4 4-1.06 1.06L12 4.06 8.53 7.53 7.47 6.47z" clipRule="evenodd"/></svg>
);

export default ShareIosIcon;
