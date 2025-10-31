import React from 'react';
import type { IconProps } from '../types';

const SoccerFieldFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M1 4v16h22V4zm10 9.722c-.595-.347-1-.985-1-1.722s.405-1.375 1-1.722zm2-3.444c.595.347 1 .985 1 1.722s-.405 1.375-1 1.722zM3 11h1v2H3zm0 4h3V9H3V6h8v2.142c-1.72.447-3 2-3 3.858s1.28 3.411 3 3.858V18H3zm10 3v-2.142c1.721-.447 3-1.999 3-3.858s-1.279-3.411-3-3.858V6h8v3h-3v6h3v3zm8-7v2h-1v-2z"/></svg>
);

export default SoccerFieldFilledIcon;
