import React from 'react';
import type { IconProps } from '../types';

const HotelTagIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M6.25 17v-4A2.75 2.75 0 0 1 9 10.25h7.25V7A4.265 4.265 0 0 0 12 2.75 4.265 4.265 0 0 0 7.75 7a.75.75 0 0 1-1.5 0c0-3.164 2.586-5.75 5.75-5.75S17.75 3.836 17.75 7v10c0 3.164-2.586 5.75-5.75 5.75S6.25 20.164 6.25 17m1.5 0A4.265 4.265 0 0 0 12 21.25 4.265 4.265 0 0 0 16.25 17v-5.25H9c-.69 0-1.25.56-1.25 1.25z"/><path fill="currentColor" d="M13.25 17a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0m1.5 0a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0"/></svg>
);

export default HotelTagIcon;
