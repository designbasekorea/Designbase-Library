import React from 'react';
import type { IconProps } from '../types';

const BuildingAltFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M11 11H8v2h3zM11 7H8v2h3z"/><path fill="currentColor" d="M23 11c0-1.654-1.346-3-3-3s-3 1.346-3 3c0 .771.301 1.468.78 2a2.98 2.98 0 0 0-.78 2c0 1.302.839 2.402 2 2.816V20h-3V5c0-1.654-1.346-3-3-3H6C4.346 2 3 3.346 3 5v15H2v2h20v-2h-1v-2.184A3 3 0 0 0 23 15a2.98 2.98 0 0 0-.78-2c.48-.532.78-1.229.78-2m-10 9v-2c0-1.103-.897-2-2-2H8c-1.103 0-2 .897-2 2v2H5V5c0-.551.449-1 1-1h7c.552 0 1 .449 1 1v15z"/></svg>
);

export default BuildingAltFilledIcon;
