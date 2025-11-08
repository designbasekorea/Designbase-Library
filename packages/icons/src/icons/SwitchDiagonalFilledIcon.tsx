import React from 'react';
import type { IconProps } from '../types';

const SwitchDiagonalFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M16.46 3.84c-.15-.37-.52-.62-.92-.62H8.48v2h4.64L2.8 15.53l1.41 1.41L16.24 4.92c.29-.29.37-.72.22-1.09zM21.19 8.47l-1.41-1.41L7.76 19.08c-.29.29-.37.72-.22 1.09s.52.62.92.62h7.06v-2h-4.65z"/></svg>
);

export default SwitchDiagonalFilledIcon;
