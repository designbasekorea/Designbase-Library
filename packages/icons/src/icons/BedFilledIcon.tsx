import React from 'react';
import type { IconProps } from '../types';

const BedFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M21 10.184V5c0-1.654-1.346-3-3-3H6C4.346 2 3 3.346 3 5v5.184A3 3 0 0 0 1 13v4c0 1.302.839 2.402 2 2.816V22h2v-2h14v2h2v-2.184A3 3 0 0 0 23 17v-4a3 3 0 0 0-2-2.816M6.999 9H10v1H7zm7 0H17v1h-3zM5 5c0-.551.449-1 1-1h12c.552 0 1 .449 1 1v4c0-1.103-.897-2-2-2h-3c-1.103 0-2 .897-2 2 0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2zm-1 7h16a1 1 0 0 1 1 1v2H3v-2c0-.552.449-1 1-1"/></svg>
);

export default BedFilledIcon;
