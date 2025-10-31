import React from 'react';
import type { IconProps } from '../types';

const WatchFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M16 5.142V2H8v3.142c-1.72.447-3 2-3 3.858v6c0 1.859 1.28 3.411 3 3.858V22h8v-3.142c1.721-.447 3-1.999 3-3.858V9c0-1.858-1.279-3.411-3-3.858M17 15c0 1.103-.897 2-2 2H9c-1.103 0-2-.897-2-2V9c0-1.103.897-2 2-2h6c1.103 0 2 .897 2 2z"/></svg>
);

export default WatchFilledIcon;
