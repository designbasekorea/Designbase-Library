import React from 'react';
import type { IconProps } from '../types';

const ShareAltFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m22.658 10.248-8-7A1 1 0 0 0 13 4.001v3.147c-5.472.921-11 2.911-11 11.853a1 1 0 0 0 1 1c.309 0 .607-.144.8-.4 2.639-3.518 5.519-4.454 9.2-4.583v2.983a.999.999 0 0 0 1.658.753l8-7a.997.997 0 0 0 0-1.504z"/></svg>
);

export default ShareAltFilledIcon;
